const randomPuppy = require("random-puppy");

exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
   randomPuppy('dankmemes').then(url => {
      const embed = new Discord.RichEmbed()
      .setTitle('Here is a meme')
      .setTimestamp()
      .setImage(url)
      .setColor(`RANDOM`)
      message.channel.send(embed);
  });
}

exports.help = {
  name: "meme"
}