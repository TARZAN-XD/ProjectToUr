const fs = require('fs')

//Bot Setting
global.owner = ['6281326070075'] //Own Number
global.urlfoto = 'https://files.catbox.moe/dat7cz.jpg' //Url Foto 
global.url = 'https://whatsapp.com/channel/0029VbAMfj059PwZ8MxK7P3s' //Url Channel dev
global.developer = "KapotID" //Dev Name
global.botname = "MODULCRASH V1" //Bot Name
global.NameSaluran = "KapotID CH"//Nama Saluran Own
global.idSaluran = "120363397307145011@newsletter"//Id saluran 
global.version = "1.0" //Version Bot
global.footer = "CurserdVvip" //footer section
global.status = true //"self/public" section of the bot
global.autoreactDB = '120363397307145011' //Global auto react Channel 

//Sticker Setiings
global.packname = "Kapot Hosting" //Pack Name 
global.author = "KapotID" // Author

global.lol = "";
global.mess = {
    owner: "ᴏᴡɴᴇʀ"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
