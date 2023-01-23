const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("<:R_Duyuru:1008002467109277826> Bu Bot Yeni Yapılıyordur Public İçin Bitme Süresi Tahminen 20.03.2023")
    .setDescription("**[Discord Linkimiz](https://discord.gg/Mskgnz8RZx)**")
    .setColor("#007fff")
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "test"
};
