const { RoleManager } = require("discord.js")
const config = require("../info/config.json")


module.exports = async (client, msg) => {
    const notice = await msg.guild.channels.cache.find(channel => channel.id === config.noticechannel)

    if(msg.author.id === config.userADM){
        let message = msg.content.split(" ")
         message.splice(0,1)
         message.join(" ")
         await notice.send(`@everyone ${message}`)
    }else{
        msg.reply('você não possui direitos para usar este comando. Caso sejas um ADM fale com o Andrey')
    }

}