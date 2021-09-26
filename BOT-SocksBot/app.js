const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://strawpoll.com/juc6gbs7w', 2, true, join(__dirname, 'socks.txt'));
