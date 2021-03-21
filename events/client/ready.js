const prefix = 'prefix' //!help, /help, &help, $help
module.exports=bot=>{
     console.log(bot.user.tag);
     
const coolstatus = [
  {
    name: `cool status`,
    type: `PLAYING`
  },
  {
    name: `second cool status`,
    type: `WATCHING` 
  },
  {
    name: `cool third status`,
    type: `LISTENING`
   //},
   //{
   //name: `cool streaming!`,
   //type: STREAMING,
   //url: 'streaming url'
  }
]

    setInterval(() => {
        function presence() {
            bot.user.setPresence({
              status: 'online', //u can use dnd, idle and online
                activity: coolstatus[Math.floor(Math.random() * coolstatus.length)], 
            });
        }

        
        presence();
    }, 10000);

}
