"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.price = void 0;
const config_json_1 = require("./config.json");
const axios_1 = __importDefault(require("axios"));
const price = (message) => {
    C;
    axios_1.default.request({
        url: `${config_json_1.API_BASE_URL}${config_json_1.API_COINS}${config_json_1.API_MEGACRYPTOPOLIS_E}`,
    }).then((response) => {
        // `response` is of type `AxiosResponse<ServerData>`
        const { data } = response;
        console.log(response);
        // `data` is of type ServerData, correctly inferred
    });
};
exports.price = price;
