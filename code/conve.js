const config = require("../info/config.json");

module.exports = async (client, msg) => {
    
    msg.delete();
    const conversa = await msg.guild.channels.cache.find(channel => channel.id === config.chatchannel);
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    await conversa.send(`${message}`);
}