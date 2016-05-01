var TelegramBot = require('node-telegram-bot-api');

var token = process.env['TELEGRAM_BOT_TOKEN'];
var chatId = process.env['TELEGRAM_CHAT_ID'];

exports.handler = function(event, context, callback) {
  var bot = new TelegramBot(token, {polling: false});
  var message = event.project_name + ' - ' + event.stage_name + ' #' + event.counter + ': ' + event.build_result;
  bot.sendMessage(chatId, message);
  callback(null, "success");
}
