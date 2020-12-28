const Discord = require("discord.js")
module.exports = async (client,msg) => {
    const supreme = new Discord.MessageEmbed()
    .setAuthor('Andrey e Laura', 'https://i.imgur.com/TPDapWa.png')
    .setTitle('Vip Supreme')
    .setDescription('Um vip que tras beneficios e facilita a vida da pessoa, também é util para quem quer dar um pouco mais de vida para o servidor com mais lojas nele')
    .setFooter('todos os direitos reservedos', 'https://i.imgur.com/TPDapWa.png')
    .addFields(
        {name: "Preço", value: "R$1,50 o dia", inline: true},
        {name: "Vantagens", value: "Vou ajudar a laura na sopa :-3", inline: true},
        {name: "Compre já o seu", value: "Atualmente as compras de vip só são feitas através do paypal"},
        {name: "1Dia R$1,50", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FHTVSESPC4FU6", inline:true},
        {name: "7Dias R$10,50", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R2WDGVEFATKK2", inline:true},
        {name: "1Mês(30Dias) R$45,00", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=M3TX5EV2475JW", inline:true}
    )
    .setColor('#EE0000')
    .setTimestamp()
    msg.reply(supreme)
}