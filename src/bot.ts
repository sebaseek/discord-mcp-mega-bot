import { config } from "dotenv";
config();

import { PREFIX, MEGAE, MEGAT, DOC, HELP, SUPPORT, CHANNEL_ID } from "./config.json";
import { price as priceMegaE } from "./mega-e/mega-e";
import { price as priceMegaT } from "./mega-t/mega-t";
import { Client, Message } from "discord.js";
import { sendDocumentLink, sendHelpData, sendDonationText } from "./utils/utils";
const client: Client = new Client();
client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
    console.log("Bot is Running");
});

// Mega Ethereum version price call
client.on("message", (message: Message) => {
    if (
        message.channel.id === CHANNEL_ID &&
        message.content.toUpperCase().startsWith(`${PREFIX}${MEGAE}`)
    ) {
        priceMegaE(message);
    }
});
// Mega TRX version price call
client.on("message", (message: Message) => {
    if (
        message.channel.id === CHANNEL_ID &&
        message.content.toUpperCase().startsWith(`${PREFIX}${MEGAT}`)
    ) {
        priceMegaT(message);
    }
});

client.on("message", (message: Message) => {
    if (
        message.channel.id === CHANNEL_ID &&
        message.content.toUpperCase().startsWith(`${PREFIX}${DOC}`)
    ) {
        sendDocumentLink(message);
    }
});

// Help data Call
client.on("message", (message: Message) => {
    if (
        message.channel.id === CHANNEL_ID &&
        message.content.toUpperCase().startsWith(`${PREFIX}${HELP}`)
    ) {
        sendHelpData(message);
    }
});

// Support Text ( Donations )
client.on("message", (message: Message) => {
    if (
        message.channel.id === CHANNEL_ID &&
        message.content.toUpperCase().startsWith(`${PREFIX}${SUPPORT}`)
    ) {
        sendDonationText(message);
    }
});
