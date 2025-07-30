const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require('@whiskeysockets/baileys');
const express = require('express');
const qrcode = require('qrcode');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد الواجهة
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let qrCodeImage = null;
let sock = null;

// ===== بدء تشغيل البوت =====
const startBot = async () => {
    try {
        const { state, saveCreds } = await useMultiFileAuthState('./session');
        const { version } = await fetchLatestBaileysVersion();

        sock = makeWASocket({
            version,
            auth: state,
            printQRInTerminal: false
        });

        // ✅ تحديث QR عند الاتصال
        sock.ev.on('connection.update', async (update) => {
            const { connection, qr } = update;
            if (qr) {
                qrCodeImage = await qrcode.toDataURL(qr);
                console.log('📌 امسح QR عبر الواجهة');
            }
            if (connection === 'open') {
                qrCodeImage = null; // تم الإقتران
                console.log('✅ تم الاتصال بواتساب!');
            }
            if (connection === 'close') {
                const reason = update.lastDisconnect?.error?.output?.statusCode;
                const shouldReconnect = reason !== DisconnectReason.loggedOut;
                console.log('⚠ تم فقد الاتصال، إعادة المحاولة:', shouldReconnect);
                if (shouldReconnect) startBot();
            }
        });

        sock.ev.on('creds.update', saveCreds);

        // ✅ تحميل ملف الأوامر (curserdVvip.js)
        try {
            const loadCommands = require('./curserdVvip.js');
            if (typeof loadCommands === 'function') {
                loadCommands(sock);
                console.log('✅ تم تحميل أوامر البوت من curserdVvip.js');
            } else {
                console.log('⚠ ملف الأوامر لا يحتوي على دالة صالحة');
            }
        } catch (err) {
            console.error('⚠ خطأ أثناء تحميل ملف الأوامر:', err);
        }

    } catch (err) {
        console.error('❌ خطأ في تشغيل البوت:', err);
    }
};

startBot();

// ===== API لعرض QR =====
app.get('/qr', (req, res) => {
    res.json({ qr: qrCodeImage });
});

// ===== API لطلب رمز الاقتران =====
app.post('/pair', async (req, res) => {
    try {
        if (!sock) return res.json({ error: 'البوت غير متصل حالياً' });

        const { phone } = req.body;
        if (!phone) return res.json({ error: 'أدخل رقم الهاتف' });

        const code = await sock.requestPairingCode(phone);
        res.json({ code });
    } catch (err) {
        console.error('❌ فشل في إنشاء رمز الاقتران:', err.message);
        res.json({ error: 'فشل في توليد رمز الاقتران', details: err.message });
    }
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🌍 السيرفر يعمل على: http://localhost:${PORT}`);
});
