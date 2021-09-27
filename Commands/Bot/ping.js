module.exports = {
  name : "ping" ,
  aliases : [ "ms", "latency" ] ,
  info : {
    desc : "Shows Bot Latencies" ,
    cat : "Info" ,
  } ,
  code : `
    $author[1;Ping;$client[avatarUrl]]
    $if[$voiceId[$clientId]!=;$addField[1;Voice;\`\`\`js
    $voicePing\`\`\`];]
    $addFields[1;Ping:\`\`\`js
    $ping\`\`\`;Message:\`\`\`js
    $messagePing\`\`\`;Database:\`\`\`js
    $dbPing\`\`\`]
    $color[1;RANDOM]
    $footer[1;Requested By $userTag;$authorAvatar]
    $title[1;$serverName]
    $addTimestamp
    $addButton[1;Close;danger;Close_$authorId]
  `
}
