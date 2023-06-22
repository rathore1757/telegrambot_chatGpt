
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const dotenv=require('dotenv').config()
const bot = new TelegramBot(process.env.TelegramBot, { polling: true });
// const openaiApiKey = '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';
// const openaiApiKey = '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';


async function getChatGPTResponse(message) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a user' }, { role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.CHATGPT}`
        },
      }
    );
    const choices = response.data.choices;
    const reply = choices[0].message.content;
    return reply;
  } catch (error) {
    console.error('Error processing OpenAI API request:', error);
    throw error;
  }
}

// async function getChatGPTResponse(message) {/////t
//     try {
//       const response = await axios.post(
//             "https://api.openai.com/v1/chat/completions",
//             {
//               model: "gpt-3.5-turbo",
//               messages: [
//                 { role: "system", content: "You are a helpful assistant." },
//                 { role: "user", content: message },
//               ],
//             },
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${process.env.CHATGPT}`, // Replace with your OpenAI API key
//               },
//             }
//           );
  
//       const choices = response.data.choices;
//       const reply = choices[0].message.content;
//       // console.log(reply,"mvmdfvmekvnerkvnerker==================================")
//       return reply;
//     } catch (error) {
//       console.error('Error processing OpenAI API request:', error);
//       throw error;
//     }
//   }
 exports.fetch =  bot.on('message', async (msg) => {
    // console.log(msg,"mmmmmmmmmmmmmmmmmmmmmmmm")
  const chatId = msg.chat.id;
  const message = msg.text;
  try {
    const reply = await getChatGPTResponse(message);
   return  bot.sendMessage(chatId, reply);
  } catch (error) {
    console.error('====Error:eeeeeeeeeeeeeee', error);
  }
});








