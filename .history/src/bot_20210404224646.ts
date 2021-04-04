import {config} from 'dotenv';
config();

import { Client } from 'discord.js';

process.env.DISCORD_TOKEN

const client: Client = new Client()
