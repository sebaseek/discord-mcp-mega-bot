import {config} from 'dotenv';
config();

import { Client } from 'discord.js';
const client: Client = new Client();

client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
    console.log('Bot is Ready');
});