var TelegramBot = require( "node-telegram-bot-api" );

var token = "567556684:AAHxtGqzRMvLOQQUd0nXuaZn2OFMAKNU-f8";

var bot = new TelegramBot( token, { polling: true } );

bot.onText( /\/start/, function( msg ) {

  bot.sendMessage(

      msg.from.id,

      "Hi <b>" + msg.from.first_name + "</> " + msg.from.last_name + "\nLet's play games!  " + msg.from.id,

      {

          parse_mode: "HTML"

     }

  );

} );
