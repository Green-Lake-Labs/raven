import { EmbedBuilder } from 'discord.js';

const ravenIconUrl = 'https://cdn1.vectorstock.com/i/1000x1000/66/45/golden-raven-logo-crow-bird-sign-vector-32686645.jpg';
const yahooFinanceIconUrl = 'https://s.yimg.com/cv/apiv2/hkmedia/Financeapp_icon_new.png';
const yahooFinanceProfileUrl = 'https://finance.yahoo.com/quote';

export const financialEmbed = (symbol: string) => new EmbedBuilder()
    .setColor(0xd99a41)
    .setTitle(`Financial Data for ${symbol}`)
    .setURL(`${yahooFinanceProfileUrl}/${symbol}`)
    .setDescription(`Basic profile data for firm ${symbol}`)
    .setThumbnail(ravenIconUrl)
    .addFields(
        { name: 'Basic Info:', value: 'Some value\nSome value\nSome value', inline: false },
        { name: 'Financials Info:', value: 'Some other value\nSome other value\nSome other value', inline: false },
    )
    .setFooter({ 
        text: 'Data taken from Yahoo! Finance', 
        iconURL: yahooFinanceIconUrl 
    });

export const priceEmbed = (symbol: string) => new EmbedBuilder()
    .setColor(0x83d941)
    .setTitle(`Historical Price Data for ${symbol}`)
    .setURL(`${yahooFinanceProfileUrl}/${symbol}`)
    .setDescription(`Basic profile data for firm ${symbol}`)
    .setThumbnail(ravenIconUrl)
    .addFields(
        { name: 'Basic Info:', value: 'Some value\nSome value\nSome value', inline: false },
        { name: 'Financials Info:', value: 'Some other value\nSome other value\nSome other value', inline: false },
    )
    .setFooter({ 
        text: 'Data taken from Yahoo! Finance', 
        iconURL: yahooFinanceIconUrl 
    });

export const profileEmbed = (symbol: string) => new EmbedBuilder()
    .setColor(0x415dd9)
    .setTitle(`Profile Data for ${symbol}`)
    .setURL(`${yahooFinanceProfileUrl}/${symbol}`)
    .setDescription(`Basic profile data for firm ${symbol}`)
    .setThumbnail(ravenIconUrl)
    .addFields(
        { name: 'Basic Info:', value: 'Some value\nSome value\nSome value', inline: false },
        { name: 'Financials Info:', value: 'Some other value\nSome other value\nSome other value', inline: false },
    )
    .setFooter({ 
        text: 'Data taken from Yahoo! Finance', 
        iconURL: yahooFinanceIconUrl 
    });
