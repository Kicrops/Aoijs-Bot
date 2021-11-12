const events = require('./events.js');

module.exports = async (Options) => {
	events.forEach(x => Options.bot[x]());
	
  await Options.loader.load(Options.bot.cmd,"./Commands/Bot/");
  await Options.loader.load(Options.voice.cmd,"./Commands/Voice/");
  await Options.loader.load(Options.bot.customFunctions,"./Commands/CustomFunctions/");
	
  Options.bot.functionManager.createCustomFunctions( ...( Options.bot.customFunctions.djs.allValues().concat( Options.bot.customFunctions["aoi.js"].allValues() ) ) );
}
