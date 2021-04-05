import { Message, MessageEmbed } from "discord.js";
import { DOCUMENTATION_URL } from "../config.json";

export const help = async (message: Message) => {
  const embed: MessageEmbed = new MessageEmbed();
  embed.setTitle(`Game Documentation`);
  embed.setURL(`${DOCUMENTATION_URL}`);
  embed.setDescription(
    `You can refer to the Documentation link above for general information about the game`
  );
  message.reply(embed);
};
