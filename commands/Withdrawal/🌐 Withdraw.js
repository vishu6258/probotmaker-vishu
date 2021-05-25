/*CMD
  command: 🌐 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var button = [[{ title: "ATRON", command: "withatron" }],[{ title: "TWEET", command: "withtweet" }]]
var wallet = User.getProperty("TRXwallet")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
Bot.sendInlineKeyboard(
  button,
  "*💲 User* : " +
    user.first_name +
    "\n\n*💸 Balance *: " +
    balance.value() +
    " ATRON/TWEET \n\nYour wallet = " +
    wallet +
    "\n\nCheck you address once again then click yes to withdraw"
)
