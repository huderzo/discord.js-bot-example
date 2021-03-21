//u can rename this file ('bot.js', 'ready.js' or 'name-of-bot.js') but i choise index.js because it's a word that I like a lot.

const {Collection, Client, Discord} = require('discord.js') //node discord.js
 const fs = require('fs') //node i fs
  const ms = require('ms') //node i ms
   const bot = new Client() //u can use const bot = new Client({ ws: { properties: { $browser: "Discord Android" }}}) so that our bot appears that it is connected from a mobile device
    const token = "here come the token" //https://discord.com/developers/applications/
    
//command and event handler
bot.commands = new Collection();
 bot.aliases = new Collection();
  bot.categories = fs.readdirSync("./commands/");
   ["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on('message', async message => { // yep

})
bot.login(token) //you can directly put the bot token here
