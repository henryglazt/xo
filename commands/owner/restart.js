
module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        try {
        if (message.author.id !== '306649165801324556') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`🔄 | Restarting, please wait...`)
        this.client.commands.forEach(async cmd => {
            await this.client.unloadCommand(cmd);
          });
          process.exit(1);
        } catch (e) {
          this.client.logger.error(e);
        }
    }
}