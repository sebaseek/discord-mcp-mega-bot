import { config } from "dotenv";
config();

import { PREFIX, MEGAE, MEGAT, HELP } from "./config.json";
import { price as priceMegaE } from "./mega-e/mega-e";
import { price as priceMegaT } from "./mega-t/mega-t";
import { Client, Message } from "discord.js";
import { help } from "./utils/utils";
const client: Client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log("Bot is Running");
});

// Mega Ethereum version price call
client.on("message", (message: Message) => {
  if (message.content.toUpperCase().startsWith(`${PREFIX}${MEGAE}`)) {
    priceMegaE(message);
  }
});

// Mega TRX version price call
client.on("message", (message: Message) => {
  if (message.content.toUpperCase().startsWith(`${PREFIX}${MEGAT}`)) {
    priceMegaT(message);
  }
});

// Mega TRX version price call
client.on("message", (message: Message) => {
  if (message.content.toUpperCase().startsWith(`${PREFIX}${HELP}`)) {
    help(message);
  }
});
