const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("» " + client.user.username + ' | Davet Linkleri')
.setDescription(`[Botu Sunucuna Eklemek İçin Tıkla!](https://discordapp.com/oauth2/authorize?client_id=536267433950838785&scope=bot&permissions=2146958847) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla](https://discord.gg/JMKB38A)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  category: 'bot',
  description: 'Botun davet linklerini gösterir.',
  usage: 'r?davet'
};