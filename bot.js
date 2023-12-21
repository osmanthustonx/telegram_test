require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.key;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  if (msg === "shareAddress") {
    const chatId = msg.chat.id;
    const replyMarkup = JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "分享我的錢包地址：1GfGcsVrfmQx7NRgv3PAWMzgaw3D2hS8e",
            switch_inline_query:
              "你的錢包地址：：1GfGcsVrfmQx7NRgv3PAWMzgaw3D2hS8e",
          },
        ],
      ],
    });

    bot.sendMessage(chatId, "点击下面按钮分享你的比特币地址:", {
      reply_markup: replyMarkup,
    });
  }
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // URL of your web app
  const webAppUrl = "https://osmanthustonx.github.io/telegram_test/";

  // Inline keyboard with web app button
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: [
        [
          {
            text: "Open Web App",
            web_app: { url: webAppUrl },
          },
        ],
      ],
    }),
  };

  // Send a message with the keyboard
  bot.sendMessage(chatId, "open web app", opts);
});
