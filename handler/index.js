module.exports = (Options) => {

  Options.loader.load(Options.bot.cmd,"../Commands/Bot/");
  Options.loader.load(Options.voice.cmd,"../Commands/Voice/");
  Options.loader.load(Options.bot.customFunctions,"../Commands/CustomFunctions/");
	
  Options.bot.functionManager.createCustomFunctions( Options.bot.customFunctions );
}
