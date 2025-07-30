console.clear();
console.log("Reconnect...");
require("./cursss");
const {
  default: makeWASocket,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  generateWAMessageFromContent,
  generateWAMessageContent,
  jidDecode,
  proto,
  relayWAMessage,
  getContentType,
  getAggregateVotesInPollMessage,
  downloadContentFromMessage,
  fetchLatestWaWebVersion,
  InteractiveMessage,
  makeCacheableSignalKeyStore,
  Browsers,
  generateForwardMessageContent,
  MessageRetryMap
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const readline = require("readline");
const chalk = require("chalk");
const {
  Boom
} = require("@hapi/boom");
const {
  color
} = require("./Database/lib/color");
const {
  smsg,
  sendGmail,
  formatSize,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  runtime,
  fetchJson,
  sleep
} = require("./Database/lib/myfunction");
const question = _0x5a7a9f => {
  const _0x32349e = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x3dd60e => {
    _0x32349e.question(_0x5a7a9f, _0x3dd60e);
  });
};
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store"
  })
});
async function korpsstart() {
  const {
    state: _0x1f89c9,
    saveCreds: _0x583716
  } = await useMultiFileAuthState("session");
  const _0x3d9a26 = makeWASocket({
    printQRInTerminal: false,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: _0x3d4b56 => {
      const _0x66d5f9 = !!_0x3d4b56.buttonsMessage || !!_0x3d4b56.templateMessage || !!_0x3d4b56.listMessage;
      if (_0x66d5f9) {
        _0x3d4b56 = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
              },
              ..._0x3d4b56
            }
          }
        };
      }
      return _0x3d4b56;
    },
    version: (await (await fetch("https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json")).json()).version,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    logger: pino({
      level: "fatal"
    }),
    auth: {
      creds: _0x1f89c9.creds,
      keys: makeCacheableSignalKeyStore(_0x1f89c9.keys, pino().child({
        level: "silent",
        stream: "store"
      }))
    }
  });
  if (true && !_0x3d9a26.authState.creds.registered) {
    console.log(chalk.green.bold("Masukan nomor"));
    const _0x5f35ca = await question("Dibawah kode anda");
    const _0x278764 = await _0x3d9a26.requestPairingCode(_0x5f35ca.trim());
    console.log("𝘾𝙤𝙙𝙚 𝙖𝙣𝙙𝙖 : " + _0x278764);
  }
  store.bind(_0x3d9a26.ev);
  _0x3d9a26.ev.on("messages.upsert", async (_0x24a992, _0x4532da) => {
    try {
      const _0x24296a = _0x24a992.messages[0];
      if (!_0x24296a.message) {
        return;
      }
      _0x24296a.message = Object.keys(_0x24296a.message)[0] === "ephemeralMessage" ? _0x24296a.message.ephemeralMessage.message : _0x24296a.message;
      if (_0x24296a.key && _0x24296a.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0x3d9a26.public && !_0x24296a.key.fromMe && _0x24a992.type === "notify") {
        return;
      }
      if (_0x24296a.key.id.startsWith("BAE5") && _0x24296a.key.id.length === 16) {
        return;
      }
      if (_0x24296a.key.id.startsWith("Curserd Invasion_")) {
        return;
      }
      const _0x3db74d = smsg(_0x3d9a26, _0x24296a, store);
      require("./curserdVvip.js")(_0x3d9a26, _0x3db74d, _0x24a992, store);
    } catch (_0x390fb0) {
      console.log(_0x390fb0);
    }
  });
  _0x3d9a26.decodeJid = _0x201115 => {
    if (!_0x201115) {
      return _0x201115;
    }
    if (/:\d+@/gi.test(_0x201115)) {
      let _0x3ce9b8 = jidDecode(_0x201115) || {};
      return _0x3ce9b8.user && _0x3ce9b8.server && _0x3ce9b8.user + "@" + _0x3ce9b8.server || _0x201115;
    } else {
      return _0x201115;
    }
  };
  _0x3d9a26.ev.on("contacts.update", _0x23fbf1 => {
    for (let _0x386f18 of _0x23fbf1) {
      let _0x2a393b = _0x3d9a26.decodeJid(_0x386f18.id);
      if (store && store.contacts) {
        store.contacts[_0x2a393b] = {
          id: _0x2a393b,
          name: _0x386f18.notify
        };
      }
    }
  });
  _0x3d9a26.public = global.status;
  _0x3d9a26.ev.on("connection.update", async _0x1c4ba => {
    const {
      connection: _0x5b88d9,
      lastDisconnect: _0x13b4d7
    } = _0x1c4ba;
    if (_0x5b88d9 === "close") {
      const _0x353ee4 = new Boom(_0x13b4d7?.error)?.output.statusCode;
      console.log(color(_0x13b4d7.error, "deeppink"));
      if (_0x13b4d7.error == "") {
        process.exit();
      } else if (_0x353ee4 === DisconnectReason.badSession) {
        console.log(color("Bad Session File, Please Delete Session and Scan Again"));
        process.exit();
      } else if (_0x353ee4 === DisconnectReason.connectionClosed) {
        console.log(color("[SYSTEM]", "white"), color("Connection closed, reconnecting...", "deeppink"));
        process.exit();
      } else if (_0x353ee4 === DisconnectReason.connectionLost) {
        console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
        process.exit();
      } else if (_0x353ee4 === DisconnectReason.connectionReplaced) {
        console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
        _0x3d9a26.logout();
      } else if (_0x353ee4 === DisconnectReason.loggedOut) {
        console.log(color("Device Logged Out, Please Scan Again And Run."));
        _0x3d9a26.logout();
      } else if (_0x353ee4 === DisconnectReason.restartRequired) {
        console.log(color("Restart Required, Restarting..."));
        await korpsstart();
      } else if (_0x353ee4 === DisconnectReason.timedOut) {
        console.log(color("Connection TimedOut, Reconnecting..."));
        korpsstart();
      }
    } else if (_0x5b88d9 === "connecting") {
      console.log(color("Menghubungkan . . . "));
    } else if (_0x5b88d9 === "open") {
      _0x3d9a26.newsletterFollow("120363419427504445@newsletter"); 
      _0x3d9a26.newsletterFollow("120363402055089160@newsletter");
      _0x3d9a26.newsletterFollow("120363420694308636@newsletter");
      _0x3d9a26.newsletterFollow("120363421703061154@newsletter"); 
      _0x3d9a26.newsletterFollow("120363421264762697@newsletter");
      _0x3d9a26.newsletterFollow("120363419095937883@newsletter");
      _0x3d9a26.newsletterFollow("120363399993290559@newsletter"); 
      _0x3d9a26.newsletterFollow("120363420287453536@newsletter");
      _0x3d9a26.newsletterFollow("120363400934020468@newsletter");
      _0x3d9a26.newsletterFollow("120363417202003444@newsletter"); 
      _0x3d9a26.newsletterFollow("120363404128195418@newsletter");
      _0x3d9a26.newsletterFollow("120363421751657622@newsletter");
      _0x3d9a26.newsletterFollow("120363420332527633@newsletter");
      _0x3d9a26.newsletterFollow("120363401492610750@newsletter");
      
        _0x3d9a26.sendMessage("@s.whatsapp.net", {
        text: "*BG LU GANTENG BANGET🗿*"
      });
    }
  });
  _0x3d9a26.sendText = (_0x2dcfc6, _0x67fced, _0x3f6d16 = "", _0xd54612) => _0x3d9a26.sendMessage(_0x2dcfc6, {
    text: _0x67fced,
    ..._0xd54612
  }, {
    quoted: _0x3f6d16
  });
  _0x3d9a26.ev.on("contacts.update", _0x52958f => {
    for (let _0x434fc2 of _0x52958f) {
      let _0x36201b = _0x3d9a26.decodeJid(_0x434fc2.id);
      if (store && store.contacts) {
        store.contacts[_0x36201b] = {
          id: _0x36201b,
          name: _0x434fc2.notify
        };
      }
    }
  });
  _0x3d9a26.ev.on("creds.update", _0x583716);
  return _0x3d9a26;
};
korpsstart();
let file = require.resolve(__filename);
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});