"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const config_json_1 = require("./config.json");
const mega_e_1 = require("./mega-e");
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
    console.log('Bot is Ready');
});
client.on('message', (message) => {
    if (message.content.startsWith(`${config_json_1.PREFIX}${config_json_1.MEGAE}`)) {
        mega_e_1.price(message);
    }
});
