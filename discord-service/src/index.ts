import Discord from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const client = new Discord.Client({intents: ["Guilds", "GuildMessages"]});

client.on("messageCreate", function(message) { 
    if (!message.author.bot) {
        message.reply('This is a test');
    };
}); 

client.login(process.env.DISCORD_BOT_TOKEN);