const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");



var fenomen = "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio";
var metro   = "http://17773.live.streamtheworld.com/METRO_FM_SC";
var number1 = "http://nr1digitalsc.radyotvonline.com/stream/264/";
var power   = "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio";
var slowtr  = "https://radyo.dogannet.tv/slowturk";
var joyturk = "http://17733.live.streamtheworld.com/JOY_TURK_SC";






exports.run = function (bot, message, args) {
		let mesaj = args.slice(0).join(' ');
if(!mesaj) {
	message.reply("Bir radyo kanalı seç! Doğru Kullanım: **-radyo <kanal adı> | <bitir>** Kanallar: **joyturk**, **slowturk**, **fenomen**, **metro**, **number1**, **power**")
}		
    if (!message.member.voiceChannel) return message.reply("Bir sesli kanala katılmalısın!");

		    if (mesaj === "joyturk") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(joyturk);
            return message.channel.send("**JoyTürk** FM Oynatılıyor");
        }));
        return;
    };
	
	    if (mesaj === "slowturk") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(slowtr);
            return message.channel.send("**SlowTürk** FM Oynatılıyor");
        }));
        return;
    };
    // 2 Fenomen
    if (mesaj === "fenomen") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(fenomen);
            return message.channel.send("**Fenomen** FM Oynatılıyor");
        }));
        return;
    };
    // 6 Metro
    if(mesaj === "metro") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(metro);
            return message.channel.send("**Metro** FM Oynatılıyor");
        }));
        return;
    };
    // 8 Number1
    if(mesaj === "number1") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(number1);
            return message.channel.send("**Number1** FM Oynatılıyor");
        }));
        return;
    };    
    // 14
    if(mesaj === "power") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(power);
            return message.channel.send("**Power** FM Oynatılıyor");
        }));
        return;
    } 
	
	if (mesaj === "bitir") {
							const voiceChannel = message.member.voiceChannel;

			voiceChannel.leave()
	}else {
    message.channel.send("Radyonun adını doğru girdiğinize emin olun! Mevcut radyolar hakkında bilgi için **-help radyo** komutunu kullanabilirsiniz ^^")
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "radyo",
    description: "Belirtilen Radyo istasyonunu bulunduğu kanalda paylaşır.",
    usage: "radyo <name>"
};