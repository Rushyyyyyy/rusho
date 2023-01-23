const Discord = require('discord.js')
exports.run = async(client, message, args) => {

const ping = new Discord.EmbedBuilder()
.setColor(Discord.Colors.Red)
.setDescription(`Gecikme sürem ${client.ws.ping} ms`)
.setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping)
message.channel.send({embeds: [ping]})
}

exports.conf = {
  aliases: ['p', 'ms']
}

exports.help = {
  name: 'ping'
}