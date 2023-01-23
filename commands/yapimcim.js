exports.run = async(client, message, args) => { 
let id = "470955293480583178"
let sahip = client.users.cache.get(id)
message.channel.send(`Benim Yapımcım: ${sahip.tag}`)
}
exports.conf = {
  aliases: ['yapımcı']
};
exports.help = {
 name: 'sahip'
};