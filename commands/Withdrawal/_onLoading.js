/*CMD
  command: /onLoading
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

var add = User.getProperty("TRXwallet")
var amo = User.getProperty("amo")
var tx = content
Bot.sendMessage(
  "✅* Paid automatically* \n ▪️ User Id : <code>" +
    user.telegramid +
    "</code>" +
    "\n🎤 <b> UserName: " +
    "@" +
    user.username +
    "\n Recipient's Name: " +
    user.first_name +
    "\n\nREFER AND EARN MORE" +
    "\n" +
    "🎪 Requester's id: " +
    user.id +
    "\n\n" +
    "🏆Hash\n  -  :https://tronscan.org/#/transaction/" +
    content
)

Api.sendMessage({
  chat_id: "@Helpeveryone54",
  text:"✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n     User - @"+user.username+"\n💳 Amount: " +
    amo +
    " WHXC \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.",
  disable_web_page_preview: true
})
Bot.sendMessageToChatWithId(
  1680884053,
  "✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n💳 Amount: " +
    amo +
    " WHXC \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.\nUser id : " +
    user.telegramid+""
)
