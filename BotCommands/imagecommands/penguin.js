const superagent = require('superagent');

exports.run = async (bot, message, args) => {
    const Discord = bot.discord;
    let {body} = await superagent.get(`https://animals.anidiots.guide/penguin`);
    let penguinembed = new Discord.RichEmbed()
    .setColor("#01FF6D")
    .setTitle("penguin :penguin:")
    .setImage(body.link)
    message.channel.send(penguinembed);
}

exports.help = {
    name: "penguin"
}
