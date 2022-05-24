const crixa = require("aoi.js")

const bot = new crixa.Bot({

token: process.env.TOKEN, 

prefix: "+", 

intents: "all" 

}) 

const loader = new crixa.LoadCommands(bot)

loader.load(bot.cmd,"./komutlar/")

//callbackleri buraya yazabilirsiniz

bot.onJoin()

bot.onLeave()

bot.onMessage()

//bot status (çoğaltılabilir)

bot.status({

text:"Crìxa v5 Altyapı",

type:"PLAYING",

status:"dnd",

time: 12

})

//değişkenler

bot.variables({

örnek:"değer",

})

//komutlar

bot.command({

name:"ping",

code:`

\`$botPingms\` pingim var!

`

})

