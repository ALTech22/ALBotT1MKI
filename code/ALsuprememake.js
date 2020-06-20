module.exports = async (client,msg) => {
    msg.reply("Canal ALSupremeMake")
    msg.channel.send(`Logo do canal:`, {files:["./assets/img/alsuprememake.png"]})
    msg.channel.send(`canal sobre criações, com a intenção de ajudar quem deseja criar algo digital`)
    msg.channel.send("caso deseja saber mais, digite %Andrey")
}
