const prefix = '/h.'
module.exports=bot=>{
     console.log(bot.user.tag);
const array = [
  {
    name: `/h.`,
    type: `PLAYING`
  },
  {
    name: `/h.help`,
    type: `WATCHING` 
  },
  {
    name: `@Huder`,
    type: `LISTENING`
  }
]

    setInterval(() => {
        function presence() {
            bot.user.setPresence({
              status: 'online', 
                activity: array[Math.floor(Math.random() * array.length)], 
            });
        }

        
        presence();
    }, 10000);

}