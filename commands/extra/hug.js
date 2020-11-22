const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`hugs @${message.mentions.users.first() || message.author.username}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}