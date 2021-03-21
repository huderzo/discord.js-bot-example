const Timeout = new Set()
const prefix = 'prefix'
const ms = require('ms')
module.exports=async(bot,message)=>{



if(message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
message.channel.send(`why u mentioned me.`)
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
