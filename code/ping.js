const Discord = require("discord.js");

module.exports = async (client,msg) => {
    const pingEmbeded = new Discord.MessageEmbed()
    .setTitle("PONG!")
    .setDescription(`Ping é: ${Math.round(client.ws.ping)}ms!`)

    msg.reply("PONG!");
    msg.channel.send(pingEmbeded);
}
