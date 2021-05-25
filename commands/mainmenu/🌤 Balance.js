/*CMD
  command: 🌤 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendMessage(
  "*💲 User* : " +
    user.first_name +
    "\n\n*💸 Balance *: " +
    balance.value() +
    " WHXC\n\n"
)
