import {config} from 'dotenv';
config();

import {PREFIX, MEGAE} from './config.json';
import {price} from './mega-e/mega-e'
import { Client, Message } from 'discord.js';
const client: Client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log('Bot is Ready');
});

client.on('message', (message: Message) => {
    if (message.content.startsWith(`${PREFIX}${MEGAE}`)) {
        price(message);
    }
});




