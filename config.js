module.exports = {
  Bot : {
    token : process.env.Token ,
    prefix : "." ,
    intents : [ "guilds","guildMessages" ] ,
    database : {
      type : "default" ,
      promisify : false ,
      tables : [ "main" ] ,
      path : "./database/" 
    } ,
    cache : {
      users : 100 ,
      messages : 10 ,
      presences : 0 ,
      guildEmojis : 0 ,
      guildStickers : 0,
    }
  } ,
  Voice : {
    ytdl : {
      filter : "audioonly" ,
      quality : "highestaudio" ,
    } ,
    scdl : {
      clientID : "SoundCloud client Id Here"
    } ,
    cache : {
      enabled : false ,
      limit : 20 
    } 
  }
 }
