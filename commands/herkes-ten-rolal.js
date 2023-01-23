const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("> <a:R_Hayr:1054465924264099851> **BAŞARSIZ** Lütfen bir rol belirt.")
    message.guild.members.cache.forEach(arez => arez.roles.remove(rol.id))
    return message.reply(`> <a:R_Evet:1054465980908195860> **BAŞARILI**Herkesten **${rol.id}** id'li rol alınıyor. Bu işlem sunucunun büyüklüğüne göre olarak zaman alabilir.`)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "herkestenrolal"
};