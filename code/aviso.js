const config = require("../info/config.json");

module.exports = async (client, msg) => {
    const avisoC = await msg.guild.channels.cache.find(channel => channel.id === config.punicaochannel);
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    await avisoC.send(`@everyone ${message}`);
    msg.reply(`avisado no canal ${avisoC}`)
}