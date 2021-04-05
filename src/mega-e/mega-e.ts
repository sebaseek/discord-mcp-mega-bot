import {
  API_BASE_URL,
  API_COINS,
  API_MEGACRYPTOPOLIS_E,
  EMPTY_SPACE,
  COLOR_EMBEDED,
} from "../config.json";
import { Message, MessageEmbed } from "discord.js";
import fetch from "node-fetch";
import { ServerResponse } from "./interfaces";

export const price = async (message: Message) => {
  const response = await fetch(
    `${API_BASE_URL}${API_COINS}${API_MEGACRYPTOPOLIS_E}`
  );
  const data: ServerResponse = await response.json();
  const embed: MessageEmbed = new MessageEmbed();
  embed.setThumbnail(`${data.image.small}`);
  embed.setColor(COLOR_EMBEDED);
  embed.setTitle(`Coingecko`);
  embed.setURL(`https://www.coingecko.com/en/coins/megacryptopolis`);
  embed.addFields(
    {
      name: "Name:",
      value: `${data.name}`,
      inline: true,
    },
    {
      name: "Symbol:",
      value: `${data.symbol}`,
      inline: true,
    },
    {
      name: "Market Cap Rank:",
      value: `${data.market_cap_rank}`,
      inline: true,
    },
    {
      name: "Contract Address:",
      value: `${data.contract_address}`,
      inline: true,
    },
    {
      name: "Total Supply:",
      value: `${data.market_data.total_supply}`,
      inline: true,
    },
    {
      name: "Circulating Supply:",
      value: `${data.market_data.circulating_supply.toFixed(0)}`,
      inline: true,
    },
    {
      name: `${EMPTY_SPACE}`,
      value: `${EMPTY_SPACE}`,
    },
    {
      name: "Price: (USD):",
      value: `${data.market_data.current_price.usd}`,
      inline: true,
    },
    {
      name: "Price: (ETH):",
      value: `${data.market_data.current_price.eth.toFixed(3)}`,
      inline: true,
    },
    {
      name: "Volume 24hs: (USD):",
      value: `${data.market_data.total_volume.usd}`,
      inline: true,
    },
    {
      name: "All Time Low: (USD):",
      value: `${data.market_data.atl.usd}`,
      inline: true,
    },
    {
      name: "All Time Low: (ETH):",
      value: `${data.market_data.atl.eth.toFixed(3)}`,
      inline: true,
    },
    {
      name: "All Time High: (USD):",
      value: `${data.market_data.ath.usd}`,
      inline: true,
    },
    {
      name: "All Time High: (ETH):",
      value: `${data.market_data.ath.eth.toFixed(3)}`,
      inline: true,
    },
    {
      name: "All Time Low 24hs: (USD):",
      value: `${data.market_data.low_24h.usd}`,
      inline: true,
    },
    {
      name: "All Time High 24hs: (USD):",
      value: `${data.market_data.high_24h.usd}`,
      inline: true,
    }
  );
  message.reply(embed);
};
