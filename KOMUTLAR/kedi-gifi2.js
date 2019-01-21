const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://img-s1.onedio.com/id-53e4dad78f4950ea740abc22/rev-0/w-500/s-fc87971286bc440637cadf90a3295514ae96af08.gif","http://www.cutecatgifs.com/wp-content/uploads/2014/05/cat_n_dog.gif","http://68.media.tumblr.com/e9ef51556b9f50006c89c5955af2ccb4/tumblr_ohd7uoHkHt1sowe88o1_400.gif", "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif", "http://www.kadioglublog.com/wp-content/uploads/2016/09/masum-kedi.gif", "http://cdn.lowgif.com/full/d8bb77f21e79bc67-techno-cat-gif-animation-starecat-com.gif",];
                   
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'kedi-gif',
  description: 'Rastgele Kedi gifi atar',
  usage: 'kedi-gif'
}; 