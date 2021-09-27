////requiring files
const { Bot,LoadCommands,Voice } = require('aoi.js');
const Config = require('./config.js');
const Handler = require('./handler/index.js');
const Status = require('./handler/status.js');

////setting up the Bot
const bot = new Bot( Config.Bot );
//events
bot.onMessage();
//status 
bot.status( ...Status );

////setting up the LoadCommands Class 
const loader = new LoadCommands(bot);

////setting up the Voice Class 
const voice = new Voice(bot,Config.Voice.ytdl,Config.Voice.scdl,Config.Voice.cache);

////Handlers™
Handler({ bot,loader,voice });
