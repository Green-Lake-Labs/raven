import Discord from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';
import { 
    financialEmbed,
    priceEmbed,
    profileEmbed,
} from './embed';
import { 
    parseMessage,
    RavenLoadCommand,
} from './parser';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const client = new Discord.Client({
    intents: [
        'Guilds',
        'GuildMembers',
        'GuildMessages',
        'MessageContent',
    ]
});

client.on('messageCreate', function(message) { 
    if (!message.author.bot) {
        const [cmd, symbol] = parseMessage(message.content.toString());
        if (cmd === RavenLoadCommand.loadFinancialData) {
            message.reply({ embeds: [financialEmbed(symbol)] });
        } else if (cmd === RavenLoadCommand.loadPriceData) {
            message.reply({ embeds: [priceEmbed(symbol)] });
        } else if (cmd === RavenLoadCommand.loadProfileData) {
            message.reply({ embeds: [profileEmbed(symbol)] });
        }
    };
}); 

client.login(process.env.DISCORD_BOT_TOKEN);
console.log("\n>- Bot running")
