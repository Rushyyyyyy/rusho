const Discord = require("discord.js");
exports.run = async (client, message, args) => {

if (!message.member.permissions.has("0x0000000000000020")) return message.reply("**YETERSİZ YETKİ!**");
let csc = message.mentions.channels.first();
if (!csc) return message.reply("**Bir Kanal Etiketlemen Gerek!**");
let csm = args.slice(1).join(" ");
if (!csm) return message.reply("**Ne Duyurusu Yapılacak Yazman Gerek!**");

let cse = new Discord.EmbedBuilder()
.setTitle("Bir Duyuru Var!")
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor(Discord.Colors.Blue)
.setDescription(`\`${csm}\``)
.setTimestamp()
csc.send({embeds: [cse]})

setTimeout(() => {
csc.send("@here").then(csmm => {
csmm.delete()
})
}, 2000)

}

exports.conf = {
aliases: ["sunucuduyuru","Sunucu-duyuru","Sunucuduyuru"]
}

exports.help = {
name: "sunucu-duyuru"
}