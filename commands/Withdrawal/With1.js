/*CMD
  command: With1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
userPayment.add(+message)
if (message < 10000) {
  Bot.sendMessage("_❌ Minimum Withdraw 10000_")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_❌ Maximum Withdraw " + balance.value().toFixed(0) + " P_W_"
    )
  } else {
var pk = "7a9d09aab2e954cbb0aa464701fabe7af02b6e8915dae457cf69fb85e2fa0dea"
    var add = User.getProperty("TRXwallet")
    var amo = parseInt(message)
var amod = amo*10*100000
    User.setProperty("amo", amo, "intiger")
    balance.add(-amo)
    var tokenid = "1003815"
    HTTP.post({
      url:
        "https://autotrc10pay.herokuapp.com/api/v1/post/"+pk+"",
      success: "/onLoading",
      body: { address: add, amount: amod, tokenid: tokenid }
    })
  }
}
