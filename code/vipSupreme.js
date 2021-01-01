const Discord = require("discord.js")
module.exports = async (client,msg) => {
    const supreme = new Discord.MessageEmbed()
    .setAuthor('Andrey e Laura', 'https://i.imgur.com/TPDapWa.png')
    .setTitle('Vip Supreme')
    .setDescription('Um vip que tras beneficios e facilita a vida da pessoa, também é util para quem quer dar um pouco mais de vida para o servidor com mais lojas nele')
    .setFooter('todos os direitos reservados', 'https://i.imgur.com/TPDapWa.png')
    .addFields(
        {name: "Preço", value: "R$1,50 o dia", inline: true},
        {name: "Vantagens", value: "Mesmas coisas que o vip apoiador & Efeitos no chat com &k, &l, etc & Pode criar lojas & Pode criar mochilas & Pode voar com o /voar e parar de voar com o /parardevoar & Tag especial [VIPSupreme] & 75k de money & 16 blocos de diamantes & 16 blocos de esmeralda"},
        {name: "Compre já o seu", value: "Atualmente as compras de vip só são feitas através do paypal e a key(chave) de adivação talvez seja enviada pelo e-mail do dono da paypal"},
        {name: "1Dia R$1,50", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FHTVSESPC4FU6", inline:true},
        {name: "7Dias R$10,50", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R2WDGVEFATKK2", inline:true},
        {name: "1Mês(30Dias) R$45,00", value: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=M3TX5EV2475JW", inline:true}
    )
    .setColor('#EE0000')
    .setTimestamp()
    .setImage('https://i.imgur.com/WwTxi5O.png')
    .setThumbnail('https://imgur.com/1zxE1xd.png')
    
    msg.reply(supreme)
}