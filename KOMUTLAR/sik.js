const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Kimi bol bol sikmek istersin...')
  

      var resim = [
      'https://cdn.discordapp.com/attachments/534026891502419988/536524407540154368/Ekran_Alnts.PNG'];

      var resimler = resim[Math.floor(Math.random() * resim.length)];
  
    const sik = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` ${user.username}'ı çatur çutur sikti`)
    .setColor('RANDOM')
    .setFooter('Bu komut niye var amk?')
    .setImage(resimler)
     message.channel.send(sik)
    }
  
;

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sik',
  description: '',
  usage: ''
};