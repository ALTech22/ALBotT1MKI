const config = require("../info/config.json");

const commands = require("../CommandsReader.js")(config.prefix);

const desc = {
    "%help": "use este comando para ver os outros comandos",
    "%ping": "use e descubra",
    "%clear": "faxina no chat",
    "%conve": "apago sua mensagem, e repito a mensagem exatamente igual você escreveu ^^",
    "%canal": "falo quais canais estão essencialmente vinculados à esse discord",
    "%mcreator": "uma breve explicação sobre mcreator"
};

module.exports = async (client, msg) => {
    var texto = "Comandos: "
    msg.reply("quer ver meus comanditos? :-3");
    Object.keys(commands).forEach(command =>{
        texto += `\n ${command}: ${desc[command] ? desc[command] : 'não tem descrição'}`
    });
    msg.channel.send(texto);
};