/*CMD
  command: ðSet wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("TRXwallet")
var button = [{ title : "Set Wallet â" , command : "setwallet" }]
Bot.sendInlineKeyboard(button , "*Account Settings â\n\nð User : "+user.first_name+"\nð£ User ID : "+user.telegramid+"\nð Wallet :* "+wallet+"\n\n*If You're Wallet Is Undefined Set It By Clicking The Button Below*")
