
module.exports = {
    name: "shutdown",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '306649165801324556') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`:wave: | Shutting down...`)
          process.exit(0);
    }
}