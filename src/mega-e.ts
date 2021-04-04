import {API_BASE_URL, API_COINS, API_MEGACRYPTOPOLIS_E} from './config.json';
import { Client, Message } from "discord.js";

interface ServerResponse {
    data: ServerData
  }
  
  interface ServerData {
    foo: string
    bar: number
  }

export const price = (message: Message) => {
    
}