const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "chat",
    category: "extra",
    run: async (client, message, args) => {

        if (!args[0]) {
            return message.channel.send('Please enter Message `Example: /chat hello`');
        }
        const url = `https://some-random-api.ml/chatbot?message=${args[0]}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`@${message.mentions.users.first() || message.author.username} ${data.response} `)

        await message.channel.send(embed)
    }
}