require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.key;

const bot = new TelegramBot(token, { polling: true });
const InlineKeyboardMarkup = bot.InlineKeyboardMarkup;
const InlineKeyboardButton = bot.InlineKeyboardButton;

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // URL of your web app
  const webAppUrl = 'https://osmanthustonx.github.io/telegram_test/';

  // Inline keyboard with web app button
  const opts = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ 
          text: 'Open Web App', 
          web_app: { url: webAppUrl } 
        }]
      ]
    })
  };

  // Send a message with the keyboard
  bot.sendMessage(chatId, 'Click to open the Web App:', opts);
});

// 监听'/shareaddress'命令
bot.onText(/\/shareaddress/, (msg) => {
  const chatId = msg.chat.id;
  const replyMarkup = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "分享我的比特币地址：1GfGcsVrfmQx7NRgv3PAWMzgaw3D2hS8e",
          switch_inline_query: "你的比特币地址",
        },
      ],
    ],
  });

  bot.sendMessage(chatId, "点击下面按钮分享你的比特币地址:", {
    reply_markup: replyMarkup,
  });

  // const url = "https://osmanthustonx.github.io/genftai/";

  // const opts = {
  //   reply_markup: {
  //     inline_keyboard: [[{ text: "開啟彈窗", url: url }]],
  //   },
  // };

  // bot.sendMessage(chatId, "點擊下方按鈕打開彈窗", opts);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
