/*CMD
  command: 📊 Statistics 📊
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  .value()
  .toFixed(0)

let stat =
  "*📊 Total  : " +
  status +
  " Users*"

Bot.sendMessage(stat)
