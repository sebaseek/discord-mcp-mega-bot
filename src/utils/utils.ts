import { Message, MessageEmbed } from "discord.js";
import { DOCUMENTATION_URL, COLOR_EMBEDED } from "../config.json";

export const sendDocumentLink = async (message: Message) => {
  const embed: MessageEmbed = new MessageEmbed();
  embed.setColor(COLOR_EMBEDED);
  embed.setTitle(`Game Documentation`);
  embed.setURL(`${DOCUMENTATION_URL}`);
  embed.setDescription(
    `You can refer to the Documentation link above for general information about the game`
  );
  message.reply(embed);
};

export const sendHelpData = async (message: Message) => {
  const embed = new MessageEmbed()
    .setTitle("Commands")
    .setColor(COLOR_EMBEDED)
    .addFields({
      name: "List:",
      value: "`!MEGA-E`\n`!MEGA-T`\n`!DOC`\n`!DONATION`\n`!HELP`",
    });
  message.channel.send(embed);
};

export const sendDonationText = async (message: Message) => {
  const embed = new MessageEmbed()
    .setTitle("Support Me (TRX)")
    .setColor(COLOR_EMBEDED)
    .addFields({
      name: "Donations and tips are really appreciated :pray:",
      value: `TTurENnD1KqMtPaa5BihBfb4R5ptEiMmGH`,
      inline: false,
    });
  message.channel.send(embed);
};
