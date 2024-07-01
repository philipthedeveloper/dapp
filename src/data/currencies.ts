import USD from "@/assets/currencies/USD.png";
import EUR from "@/assets/currencies/EUR.png";
import GBP from "@/assets/currencies/GBP.png";
import AUD from "@/assets/currencies/AUD.png";
import BGN from "@/assets/currencies/BGN.png";
import BRL from "@/assets/currencies/BRL.png";
import CAD from "@/assets/currencies/CAD.png";
import CHF from "@/assets/currencies/CHF.png";
import CZK from "@/assets/currencies/CZK.png";
import DKK from "@/assets/currencies/DKK.png";
import BTC from "@/assets/currencies/BTC.png";
import ETH from "@/assets/currencies/ETH.png";
import LTC from "@/assets/currencies/LTC.png";
import USDC from "@/assets/currencies/USDC.png";
import XLM from "@/assets/currencies/XLM.png";
import ADA from "@/assets/currencies/ADA.png";
import ALGO from "@/assets/currencies/ALGO.png";
import ATOM from "@/assets/currencies/ATOM.png";
import AVAX from "@/assets/currencies/AVAX.png";
import BAT from "@/assets/currencies/BAT.png";
import BCH from "@/assets/currencies/BCH.png";
import DAI from "@/assets/currencies/DAI.png";
import DOGE from "@/assets/currencies/DOGE.png";
import EOS from "@/assets/currencies/EOS.png";
import LINK from "@/assets/currencies/LINK.png";
import SOL from "@/assets/currencies/SOL.png";
import USDT from "@/assets/currencies/USDT.png";
import XRP from "@/assets/currencies/XRP.png";
import XTZ from "@/assets/currencies/XTZ.png";
import ZRX from "@/assets/currencies/ZRX.png";

export type Currency = {
  name: string;
  imgUrl: string;
  abbr: string;
};

export const paymentCurrencies: Currency[] = [
  {
    name: "US Dollar",
    imgUrl: USD,
    abbr: "USD",
  },
  {
    name: "Euro",
    imgUrl: EUR,
    abbr: "EUR",
  },
  {
    name: "Pound Sterling",
    imgUrl: GBP,
    abbr: "GBP",
  },
  {
    name: "Australian Dollar",
    imgUrl: AUD,
    abbr: "AUD",
  },
  {
    name: "Bulgarian Lev",
    imgUrl: BGN,
    abbr: "BGN",
  },
  {
    name: "Brazilian Real",
    imgUrl: BRL,
    abbr: "BRL",
  },
  {
    name: "Canadian Dollar",
    imgUrl: CAD,
    abbr: "CAD",
  },
  {
    name: "Swiss Franc",
    imgUrl: CHF,
    abbr: "CHF",
  },
  {
    name: "Czech Koruna",
    imgUrl: CZK,
    abbr: "CZK",
  },
  {
    name: "Danish Krone",
    imgUrl: DKK,
    abbr: "DKK",
  },
];

export const receivingCurrencies: Currency[] = [
  {
    name: "Bitcoin",
    abbr: "BTC",
    imgUrl: BTC,
  },
  {
    name: "Ethereum",
    abbr: "ETH",
    imgUrl: BTC,
  },
  {
    name: "Litecoin",
    abbr: "LTC",
    imgUrl: LTC,
  },
  {
    name: "USD Coin (Stellar)",
    abbr: "XLM",
    imgUrl: XLM,
  },
  {
    name: "Cardano",
    abbr: "ADA",
    imgUrl: ADA,
  },
  {
    name: "Algorand",
    abbr: "ALGO",
    imgUrl: ALGO,
  },
  {
    name: "Cosmos",
    abbr: "ATOM",
    imgUrl: ATOM,
  },
  {
    name: "Avalanche (C-Chain)",
    abbr: "AVAX",
    imgUrl: AVAX,
  },
  {
    name: "Basic Attention Token",
    abbr: "BAT",
    imgUrl: BAT,
  },
  {
    name: "Bitcoin Cash",
    abbr: "BCH",
    imgUrl: BCH,
  },
  {
    name: "Dai",
    abbr: "DAI",
    imgUrl: DAI,
  },
  {
    name: "Dogecoin",
    abbr: "DOGE",
    imgUrl: DOGE,
  },
  {
    name: "EOS",
    abbr: "EOS",
    imgUrl: EOS,
  },
  {
    name: "Chainlink",
    abbr: "LINK",
    imgUrl: LINK,
  },
  {
    name: "Solana",
    abbr: "SOL",
    imgUrl: SOL,
  },
  {
    name: "USD Coin (ERC-20)",
    abbr: "USDC",
    imgUrl: USDC,
  },
  {
    name: "Tether (ERC-20)",
    abbr: "USDT",
    imgUrl: USDT,
  },
  {
    name: "XRP",
    abbr: "XRP",
    imgUrl: XRP,
  },
  {
    name: "Tezos",
    abbr: "XTZ",
    imgUrl: XTZ,
  },
  {
    name: "0x",
    abbr: "ZRX",
    imgUrl: ZRX,
  },
];
