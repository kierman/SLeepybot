const Discord = require('discord.js');
const client = new Discord.Client();

client.on(!ready!, () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});


client.on('message', message => {
    if (message.content === 'kieran is best') {
      message.reply('You ar Right! :D');
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
