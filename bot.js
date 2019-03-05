const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "519534970130137100"; // ايدي السررفر
var channel = "519535221582987265";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM **')
    },305);
})

client.login(process.env.BOT_TOKEN);
