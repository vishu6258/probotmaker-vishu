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

var button = [{ title: "โ Joined โ", command: "โJoined" }]
Bot.sendInlineKeyboard(
  button,
  "_๐You Must Be In Our Telegram Chats To Use Our Bot\n\n๐ - Join Our _[Main Channel](https://t.me/cyptoftw69)_\n๐ - Join Our _[Friend's Channel](     link  )_\n๐ - Join Our _[Promoter Channel](https://t.me/legitlootonly)_\n๐ - Join Our _[Promoter Channel](https://t.me/Legit_AirdropsOnly)_\n๐ - Join Our _[Promoter Channel](https://t.me/cryptolooters777)_\n๐ - Join Our _[Promoter Channel](https://t.me/Legit_Bots_Updater)_\n\n ๐ค Join Our _[Payment Channel](https://t.me/atronftwsutopayment)_\n\nClick โโ Joined โโ button After Join All Above Channels_",{disable_web_page_preview: "true"}
)

let welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)

  User.setProperty("welco", user.telegramid, "text")
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self โ*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
   var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(30000.0)
  Bot.sendMessageToChatWithId(refUser.chatId, "๐ฎ You have a New Referral\n๐ฅ User : "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"\n_Now You Will get bonus only if he joins our channel!!_"
   
)
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot โ*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
