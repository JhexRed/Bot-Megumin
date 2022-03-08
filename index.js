const Discord =require ("discord.js");
require("dotenv").config();
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});
 client.on("ready", () => {
     console.log (`log in as ${client.user.tag}`)
 });
 client.on("messageCreate", (message) => {
     if (message.content == "Explosion")
     {
         message.reply("Efectivamente, las explosiones deberían de ser eternas")
        }

 })
 client.login(proces.env.TOKEN);
