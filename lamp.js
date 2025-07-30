const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require('@whiskeysockets/baileys');
const express = require('express');
const qrcode = require('qrcode');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let qrCodeImage = null;
let sock;

// ===== بدء البوت =====
const startBot = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version } = await fetchLatestBaileysVersion();

    sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: false
    });

    sock.ev.on('connection.update', async (update) => {
        const { connection, qr } = update;
        if (qr) {
            qrCodeImage = await qrcode.toDataURL(qr);
        }
        if (connection === 'open') {
            qrCodeImage = null; // تم الإقتران
            console.log('✅ تم الاتصال بواتساب!');
        }
        if (connection === 'close') {
            const shouldReconnect = update.lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) startBot();
        }
    });

    sock.ev.on('creds.update', saveCreds);

    // تحميل الأوامر من ملفك الأصلي
    require('./curserdVvip.js')(sock);
};

startBot();

// ===== واجهة QR =====
app.get('/qr', (req, res) => {
    res.json({ qr: qrCodeImage });
});

// ===== API طلب رمز الاقتران =====
app.post('/pair', async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.json({ error: 'أدخل رقم الهاتف' });
        const code = await sock.requestPairingCode(phone);
        res.json({ code });
    } catch (err) {
        res.json({ error: 'فشل في توليد رمز الاقتران', details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🌍 السيرفر يعمل على: http://localhost:${PORT}`);
});
