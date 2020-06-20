module.exports = (client, msg) => { 
    var message = msg.content.split(" ");
    message = message[0];   
    msg.reply(`Comando '${message}' não existe`)
    msg.channel.send("digite '%help' para ver a lista de comandos")
}