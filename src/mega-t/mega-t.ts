import { Message, MessageEmbed } from "discord.js";
import { JUSTSWAP_URL_MEGA_T, COLOR_EMBEDED } from "../config.json";
import puppeteer from "puppeteer";
import { getTime } from "../utils/utils";
import fs from "fs";
import { ScreenshotData } from "./interfaces";

export const price = async (message: Message) => {
    const screenshot: ScreenshotData = await takeScreenshot();
    await sendMessage(screenshot, message);
};

const sendMessage = async ({ screenshotUrl }: ScreenshotData, message: Message) => {
    // Send image as attachment
    await message.channel.send({
        files: [
            {
                attachment: screenshotUrl,
                name: screenshotUrl,
            },
        ],
    });
    // Remove Screenshot from local storage
    fs.unlinkSync(screenshotUrl);
};

const takeScreenshot = async () => {
    const screenshotUrl: string = `screenshots/mega-trx${getTime()}.png`;
    // Mobile viewport ( Iphone X)
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--window-size=375,812", "--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(JUSTSWAP_URL_MEGA_T, { waitUntil: "networkidle2" });
    await page.waitForTimeout(2000);
    //Focus Price Div
    await page.focus(".pr-l");
    // Create file
    fs.writeFileSync(screenshotUrl, "base64");

    await page.screenshot({
        path: screenshotUrl,
        clip: { x: 310, y: 90, width: 620, height: 210 },
    });
    await browser.close();
    return {
        screenshotUrl,
    };
};
