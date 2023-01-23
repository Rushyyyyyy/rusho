const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("> <a:R_Hayr:1054465924264099851> **BAŞARISIZ**Lütfen bir rol belirt.")
    message.guild.members.cache.forEach(arez => arez.roles.add(rol.id))
    return message.reply(`> <a:R_Evet:1054465980908195860> **BAŞARILI** Herkese **${rol.id}** id'li rol veriliyor. Bu işlem sunucunun büyüklüğüne göre olarak zaman alabilir.`)

};
exports.conf = {
  aliases: ["herkese rol ver",
           "Herkese rol ver",
           "Herkese-rol-ver",
           "herkese-rol-ver"]
};

exports.help = {
  name: "herkeserolver"
};