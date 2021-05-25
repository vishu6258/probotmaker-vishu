/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: join
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "⚜ Joined ⚜", command: "✅Joined" }]
Bot.sendInlineKeyboard(
  button,
  "_📛You Must Be In Our Telegram Chats To Use Our Bot\n\n🚀 - Join Our _[Main Channel](https://t.me/cyptoftw69)_\n🚀 - Join Our _[Friend's Channel](     link  )_\n🚀 - Join Our _[Promoter Channel](https://t.me/legitlootonly)_\n🚀 - Join Our _[Promoter Channel](https://t.me/Legit_AirdropsOnly)_\n🚀 - Join Our _[Promoter Channel](https://t.me/cryptolooters777)_\n🚀 - Join Our _[Promoter Channel](https://t.me/Legit_Bots_Updater)_\n\n 🤘 Join Our _[Payment Channel](https://t.me/atronftwsutopayment)_\n\nClick “⚜ Joined ⚜” button After Join All Above Channels_",{disable_web_page_preview: "true"}
)

let welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)

  User.setProperty("welco", user.telegramid, "text")
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
   var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(30000.0)
  Bot.sendMessageToChatWithId(refUser.chatId, "🔮 You have a New Referral\n👥 User : "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"\n_Now You Will get bonus only if he joins our channel!!_"
   
)
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
