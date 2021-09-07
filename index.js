const Discord = require('discord.js');
const bot = new Discord.Client();


const { DiscordTogether } = require('discord-together');

bot.discordTogether = new DiscordTogether(bot);
bot.on("ready", ()=>{
    console.log("Wee so on io")
})

bot.on('message', message => {
    if (message.content === '/youtube') {
        if(message.member.voice.channel) {
            bot.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`Clicca questo link per vedere YouTube :${invite.code}`);
            });
        }else{
            message.channel.send("js.youtubebot.IllegalStateException User is not in a vc")
        }
    };
});


//bot.login('BOT TOKEN');
bot.login(process.env.token)
