const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "lyrics",
    category: "extra",
    run: async (client, message, args) => {

        if (!args[0]) {
            return message.channel.send('Please enter lyrics `Example: /lyrics someone like you`');
        }
        const url = `https://some-random-api.ml/lyrics?title=${args[0]}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Lyrics for : ${data.title} by ${data.author}`)
            .setDescription(data.lyrics)


        await message.channel.send(embed)
    }
}