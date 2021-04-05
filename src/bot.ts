import {config} from 'dotenv';
config();

import {PREFIX, MEGAE, MEGAT} from './config.json';
import {price as priceMegaE} from './mega-e/mega-e'
import {price as priceMegaT} from './mega-t/mega-t'
import { Client, Message } from 'discord.js';
const client: Client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log('Bot is Ready');
});

client.on('message', (message: Message) => {
    if (message.content.toUpperCase().startsWith(`${PREFIX}${MEGAE}`)) {
        priceMegaE(message);
    }
    if (message.content.toUpperCase().startsWith(`${PREFIX}${MEGAT}`)) {
        priceMegaT(message);
    }
});




