export interface ServerResponse {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number;
  contract_address: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    total_supply: number;
    circulating_supply: number;
    current_price: Currency;
    ath: Currency;
    ath_change_percentage: Currency;
    atl: Currency;
    market_cap: Currency;
    low_24h: Currency;
    high_24h: Currency;
    total_volume: Currency;
  };
}

export interface Currency {
  eth: number;
  eur: number;
  usd: number;
}
