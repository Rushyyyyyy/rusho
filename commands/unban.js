const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("> <a:R_Hayr:1054465924264099851> **BAŞARISIZ** Yetkin Yok!").catch(err => {})
 
let user = args[0]
if(!user) return message.reply("> <a:R_Hayr:1054465924264099851> **BAŞARISIZ** Banı kaldırılacak kişinin ID numarasını yazmalısın.").catch(err => {})


message.guild.bans.fetch().then(async bans=> {
if(bans.size == 0) return 
let bUser = bans.find(b => b.user.id == user)
if(!bUser) return message.reply({ content: "> <a:R_Hayr:1054465924264099851>  **Başarısız!** Kullanıcı yasaklı değil." }).catch(err => {})

await message.guild.members.unban(bUser.user)
return message.reply({ content: `> \`${bUser.user.tag}\` > <a:R_Evet:1054465980908195860> **BAŞARILI** kullanıcısının yasağı kaldırıldı.` }).catch(err => {})

})
}
exports.conf = {
  aliases: []
}

exports.help = {
  name: "unban"
}