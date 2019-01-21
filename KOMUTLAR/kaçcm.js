const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var uzunluk = ["1", "18", "0", "24", "32", "-1", "3", "7", "13"];
    var sonuc = uzunluk[Math.floor((Math.random() * uzunluk.length))];
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/534026891502419988/536516085688696833/7446muz_buyuk.jpg')
    .setDescription(`**${message.author.tag}** \n\nSeninkinin boyu tam olarak **${sonuc}** cm naptın kanki sen ya...`)
    .setFooter('LynxBot| 2019', 'https://cdn.discordapp.com/attachments/534026891502419988/536516085688696833/7446muz_buyuk.jpg')
    return message.channel.sendEmbed(embed);
  };

   exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kaccm'],
 permLevel: 0
};

exports.help = {
 name: 'kaçcm',
 description: '',
 usage: 'kaçcm efso kod fln'
};