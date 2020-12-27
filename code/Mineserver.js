const Discord = require("discord.js")

module.exports = async (client,msg) => {
    const server = new Discord.MessageEmbed()
    .setColor('#005E00')
    .setTitle('ALServer Minecraft')
    .setDescription('Servidor Survival de minecraft para a versão 1.16.3 do minecraft com plugins.')
    .setAuthor('Andrey Henrique Lopes Zeferino', 'https://i.imgur.com/TPDapWa.png')
    .setFooter('Todos os direitos reservados', 'https://i.imgur.com/TPDapWa.png')
    .addFields(
        {name: 'IP:', value: 'Em breve', inline: true},
        {name: 'Vip Apoiador', value: 'Um vip para quem deseja apoiar e manter o servidor no ar com alguns beneficios, %vipApoiador para mais informações'},
        {name: 'Vip Supreme', value: 'Um vip para quem deseja apoiar, manter o servidor no ar com alguns beneficios e receber uma facilitada, %vipSupreme para mais informações'}
    )

    msg.reply(server)
}