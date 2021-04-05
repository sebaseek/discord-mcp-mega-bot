import { Message, MessageEmbed } from "discord.js";
import { JUSTSWAP_URL_MEGA_T } from "../config.json";

export const price = async (message: Message) => {
  const embed: MessageEmbed = await buildMessage();
  message.reply(embed);
};

const buildMessage = async () => {
  const embed: MessageEmbed = new MessageEmbed();
  embed.setTitle(`JustSwap`);
  embed.setDescription(
    `Unfortunately, Mega-T Token has not been listed yet. Until then, please visit JustSwap to get more information`
  );
  embed.setURL(`${JUSTSWAP_URL_MEGA_T}`);
  return embed;
};
