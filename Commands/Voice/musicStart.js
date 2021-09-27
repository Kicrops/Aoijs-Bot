module.exports = {
  name : "musicStart" ,
  type : "musicStart" ,
  channel : "$channelId" ,
  code : ` 
    $title[1;$songInfo[title];$songInfo[url]]
    $Author[1;Now Playing;$client[avatarUrl]]
    $description[1;\`\`\`js
    $cropText[$songinfo[description];1000]...\`\`\`]
    $addField[1;Duration;\`\`\`js
    "$parseTime[$songInfo[duration];time]"\`\`\`]
    $addField[1;Requested By;\`\`\`js
    "$songInfo[user.username]"\`\`\`]
    $color[1;RANDOM]
    $addTimestamp
    $addButton[1;Pause;2;pauseMusic]
    $addButton[1;Resume;2;resumeMusic]
    $addButton[1;Stop;danger;stopMusic]
    $addButton[1;Skip;danger;skipMusic]
    $addButton[1;Leave;danger;leaveMusic]
  `
}
