const request = require('request-promise-native');

exports.run = async (bot, message, args) => {
  const Discord = bot.discord;
  let tickleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!tickleUser) return message.channel.send("Could not find that user make sure you typed it in right and try again.");

  require('dotenv').config()
  let options = {
    url: 'http://api.giphy.com/v1/gifs/search',
    qs: {
      q: 'tickle',
      api_key: process.env.GIPHY,
      limit: 10,
      offset: 0,
    },
    json: true
  };

  let response = await request(options);
  if (response.data.length);
  
  let tickleEmbed = new Discord.RichEmbed()
  .setColor("#9b42f4")
  .setDescription(`<@${message.author.id}> is tickling <@${tickleUser.id}>`)
  .setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
  .setThumbnail('https://cdn.glitch.com/952eb130-408e-4eda-9f41-b2ad740ad159%2FPoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif?v=1565759111525')
  message.channel.send(tickleEmbed) ;
}

exports.help = {
  name: 'tickle'
}