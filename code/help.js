const config = require("../info/config.json");

const commands = require("../CommandsReader.js")(config.prefix);

const desc = {
    "%about": "Sobre mim",
    "%ALGamer": "Sobre o canal ALGamer",
    "%ALSupremegaming": "Sobre o canal ALSupremeGAMING",
    "%ALSuprememake": "Sobre o canal ALSuprememake",
    "%Andrey": "Sobre o Andrey",
    "%aviso": "CONFIDENCIAL",
    "%canais": "todos os canais que fazem parte desse servidor",
    "%conve": "repetirei sua mensagem, mas saiba que ela ficara salva no meu log pro andrey ver depois... hehe",
    "%help": "Mostra ajuda, igual ta acontecendo aqui",
    "%mcreator": "Sobre o mcreator",
    "%ping": "PONG!!!!",
};

module.exports = async (client, msg) => {
    var texto = "Comandos: "
    msg.reply("quer ver meus comanditos? :-3");
    Object.keys(commands).forEach(command =>{
        texto += `\n ${command}: ${desc[command] ? desc[command] : 'não tem descrição'}`
    });
    msg.channel.send(texto);
};