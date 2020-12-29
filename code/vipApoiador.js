const Discord = require('discord.js')
module.exports = async (client,msg) => {
    const apoiador = new Discord.MessageEmbed()
    .setAuthor('Andrey e Laura', 'https://i.imgur.com/TPDapWa.png')
    .setTitle('Vip Apoiador')
    .setDescription('Um vip mais para quem quer apoiar o servidor e mante-lo no ar, alguns beneficios nada de mais comparado com o VIP SUPREME.')
    .setFooter('Todos os direitos reservados', 'https://i.imgur.com/TPDapWa.png')
    .addFields(
        {name: "Preço", value: "R$1,00 o dia", inline: true},
        {name: "Vantagens", value: "Vou ajudar a laura na sopa :-3", inline: true},
        {name: "Compre já o seu", value: "Atualmente as compras de vip só são feitas através do paypal"},
        {name: "1Dia R$1,00", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X4YY2TX6BN6SQ", inline:true},
        {name: "7Dias R$7,00", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WSA42XHDDSEWS", inline:true},
        {name: "1Mês(30Dias) R$30,00", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UHYZQWBWFCM3S", inline:true}
    )
    .setThumbnail('https://i.imgur.com/g9dW9sI.png')
    .setImage('https://i.imgur.com/WwTxi5O.png')
    .setColor('#0000A9')
    .setTimestamp()
    msg.reply(apoiador)
}