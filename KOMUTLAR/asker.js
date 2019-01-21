const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://yunti.files.wordpress.com/2017/03/canakkale_02_tam35-blogspot-com.gif",
          color: 0xD97634,
		  description: "**1 ÖLÜR 1000 DİRİLİRİZ**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'asker',
  description: 'Türk bayrağı Gôsterir',
  usage: 'bayrak'
};
