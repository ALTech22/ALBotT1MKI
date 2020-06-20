const info = require("../info/informations.json");

module.exports = async (client, msg) => {
    msg.reply("Informações sobre mim é oque você quer??? então é o que terá: ");
    msg.channel.send("estou na versão: " + info.version);
    msg.channel.send("descrição sobre euu: " + info.description + " :-3" )
    msg.channel.send("versão do api do discord:" + info["discord.js"])
    msg.channel.send("está com duvidas sobre meu comando? digite %help")
}