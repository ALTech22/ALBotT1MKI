const Discord = require("discord.js");

module.exports = async (client,msg) => {
    const pingEmbeded = new Discord.MessageEmbed()
    .setColor("#7A00FA")
    .setTitle("PONG!")
    .setDescription(`Ping é: ${Math.round(client.ws.ping)}ms!`)

    msg.reply("PONG!");
    msg.channel.send(pingEmbeded);
}
