const superagent = require('superagent');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    let {body} = await superagent.get(`https://random-d.uk/api/v1/random?type=jpg`);
    let duckembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("duck :duck:")
    .setImage(body.url);
    message.channel.send(duckembed);
}

exports.help = {
    name: "duck"
}
