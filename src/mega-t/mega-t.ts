import { Message, MessageEmbed } from "discord.js";
import { JUSTSWAP_URL_MEGA_T } from "../config.json";
import puppeteer from "puppeteer";

export const price = async (message: Message) => {
  const embed: MessageEmbed = new MessageEmbed();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${JUSTSWAP_URL_MEGA_T}`);
  // wait page to load data
  await page.waitForTimeout(3000);
  const result = await page.evaluate(() => {
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
  embed.setTitle(`JustSwap`);
  embed.setURL(`${JUSTSWAP_URL_MEGA_T}`);
  embed.addFields(
    { name: "Mega Price", value: `${result.megaPrice}` },
    { name: "TRX Price", value: `1 TRX ${result.trxPrice}` }
  );
  message.reply(embed);
};
