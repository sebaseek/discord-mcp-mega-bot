import { Message, MessageEmbed } from "discord.js";
import { JUSTSWAP_URL_MEGA_T } from "../config.json";
import puppeteer from "puppeteer";
import { MegaResultData } from "./interfaces";

export const price = async (message: Message) => {
  const embed: MessageEmbed = await buildMessage();
  message.reply(embed);
};

const buildMessage = async () => {
  const embed: MessageEmbed = new MessageEmbed();
  const result: MegaResultData = await navigateAndCollectData();
  embed.setTitle(`JustSwap`);
  embed.setURL(`${JUSTSWAP_URL_MEGA_T}`);
  embed.addFields(
    { name: "Mega Price", value: `${result.megaPrice}` },
    { name: "TRX Price", value: `1 TRX ${result.trxPrice}` }
  );
  return embed;
};

const navigateAndCollectData = async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`${JUSTSWAP_URL_MEGA_T}`);
  // wait page to load data
  await page.waitForTimeout(3000);
  const result: MegaResultData = await page.evaluate(() => {
    // Get Just Swap div with price elements
    const data = document.querySelector(".pr-price")?.textContent;
    // split data-price in two.
    const splittedData = data?.split("1TRX");
    const megaPrice = splittedData![0];
    const trxPrice = splittedData![1];
    return {
      megaPrice,
      trxPrice,
    };
  });
  return result;
  browser.close();
};
