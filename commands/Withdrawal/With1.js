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
if (message < 150000) {
  Bot.sendMessage("_❌ Minimum Withdraw 150,000 ATRON_")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_❌ Maximum Withdraw " + balance.value().toFixed(0) + " P_W_"
    )
  } else {
var pk = "9c82c52b56001a6b155c9fe7f94aada36aba4167e27db0ee7d50a2aaf80fe668"
    var add = User.getProperty("TRXwallet")
    var amo = parseInt(message)
    User.setProperty("amo", amo, "intiger")
    balance.add(-amo)
    var tokenid = "1000088"
    HTTP.post({
      url:
        "https://autotrc10pay.herokuapp.com/api/v1/post/"+pk+"",
      success: "/onLoading",
      body: { address: add, amount: amo, tokenid: tokenid }
    })
  }
}
