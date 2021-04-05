import {API_BASE_URL, API_COINS, API_MEGACRYPTOPOLIS_E} from './config.json';
import { Client, Message } from "discord.js";
import fetch from 'node-fetch';
interface ServerResponse {
    data: ServerData
  }
  
  interface ServerData {
    foo: string
    bar: number
  }

export const price = async (message: Message) => {
    const response = await fetch(`${API_BASE_URL}${API_COINS}${API_MEGACRYPTOPOLIS_E}`);
    const data = await response.json();
    console.log(data);
}