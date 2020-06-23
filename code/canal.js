module.exports = async (client,msg) => {
    msg.reply("Canais vinculados à esse discord:")
    msg.channel.send(`Logo do canal principal:`, {files:["./assets/img/alsuprememake.png"]})
    msg.channel.send(`Logo do canal de jogos:`, {files:["./assets/img/algamer.jpg"]})
    msg.channel.send(`
        ALGamer(youtube) canal de jogos que será retirado do canal da Twitch(canal da twitch:ALsupremeGaming) \n 
        ALsupremeGaming: canal da Twitch onde eu farei lives/streams de jogos, não vai haver jogo especifico, tentarei trazer todos que eu gosto \n
        Canal principal: ALSupremeMake no youtube \n
        Mais informações: %ALgamer ou %ALsuprememake %ALsupremegaming
        `);
}
