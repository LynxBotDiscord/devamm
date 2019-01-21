const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
  
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= LynxBot Yardım Menüsü =

${prefix}eğlence        ::  Eğlence komutlarını gösterir.
${prefix}eğlence-2        ::  Eğlence komutlarını gösterir.
${prefix}eğlence-3        ::  Eğlence komutlarını gösterir.
${prefix}eğlence-ekstra        ::  Eğlence komutlarını gösterir.
${prefix}yetkili        ::  Yetkili komutlarını gösterir.
${prefix}müzik          ::  Müzik komutlarını gösterir.
${prefix}bot-komutları          ::  Genel komutlarını gösterir.

# Botun sahibi ; Ahmet半仙#0666`);
    
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};