const Discord = require('discord.js') //npm i discord.js
 module.exports={ //exports this commands
   name: "avatar", //name of the command
   category: "info", //category
   run: async(bot,message,args)=>{ //run

let mavatar = message.mentions.users.first() // /avatar @{user}
if (!mavatar) {
message.channel.send(message.author.displayAvatarURL({dynamic: true, size : 1024 }));

} else { 

message.channel.send(mavatar.displayAvatarURL({dynamic: true, size : 1024 }));

}
}
 }
 //finish
