////requiring files
const { Bot,LoadCommands } = require('aoi.js');
const Config = require('./config.js');
const Handler = require('./handler/index.js');
const Status = require('./handler/status.js');

////setting up the Bot
const bot = new Bot( Config );
//events
bot.onMessage();
//status 
bot.status( ...Status );

////setting up the LoadCommands Class 
const loader = new LoadCommands(bot);

////Handlers™
Handler(bot,loader);
