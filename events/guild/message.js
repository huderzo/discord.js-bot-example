const Timeout = new Set()
const prefix = '/h.'
const ms = require('ms')
module.exports=async(bot,message)=>{



if(message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
message.channel.send(`my prefix is **/h.**, check my commands with **/h.help**.`)
}
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
const command = bot.commands.get(cmd)
if (!command) command = bot.commands.get(bot.aliases.get(cmd))
if (command) command.run(bot, message, args)
if (message.author.bot) return;
if (!message.guild) return;
if (!message.member) message.member = await message.guild.fetchMember(message)
if (!message.content.startsWith(prefix)) return;
if (cmd.length == 0 ) return;
}