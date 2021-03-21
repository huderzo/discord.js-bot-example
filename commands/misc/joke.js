const giveMeAJoke = require('discord-jokes');
const {MessageEmbed, Discord} = require('discord.js')
 module.exports={
   name: "joke",
   category: "misc",
   run: async(bot,message,args)=>{
 

        giveMeAJoke.getRandomDadJoke (function(joke) {
          
    const jokeE = new MessageEmbed() 
    .setDescription('```xl\n'+ joke +'```')
    .setColor('RANDOM')
    .setFooter('© devmitza') //npm made by devmitza
      message.channel.send({embed : jokeE})
    
    })

   }
 }
