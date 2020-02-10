const copypastas = require('../assets/copypastas.json');

exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
  let copyembed = new Discord.RichEmbed()
  .setColor("#f99d9d")
  .setDescription(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`)
  message.channel.send(copyembed);
}

exports.help = {
  name: 'copypaste'
}