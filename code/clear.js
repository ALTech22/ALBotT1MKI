module.exports = async (client, msg) => {
    const channel = msg.channel;
    const FetchMsg = await channel.messages.fetch();
    channel.bulkDelete(FetchMsg);
    channel.bulkDelete(FetchMsg);
    channel.bulkDelete(FetchMsg);
    channel.bulkDelete(FetchMsg);
    msg.reply("chat limpinho!");
}