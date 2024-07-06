import { useState } from "react";
import { BuyAndSellDialog } from "../BuyAndSellDialog";
import { Currency } from "@/data";

type Props = {
  tagText: string;
  currencies: Currency[];
  currentCurrency: Currency;
  changeCurrentCurrency: (asset: Currency) => any;
};
export const TradeCard = ({
  tagText,
  currencies,
  currentCurrency,
  changeCurrentCurrency,
}: Props) => {
  return (
    <div className="card px-4 py-5 rounded-md md:rounded-lg w-full">
      <div className="flex flex-col gap-2">
        {/* Tag text */}
        <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base mb-2">
          {tagText}
        </p>

        {/* Header */}
        <header className="flex justify-between items-start">
          {/* Asset info */}
          <div>
            <BuyAndSellDialog
              currentCurrency={currentCurrency}
              currencies={currencies}
              onChangeSelectedAsset={changeCurrentCurrency}
            />
          </div>

          {/* Amount input */}
          <div className="flex-1 overflow-hidden">
            <input
              type="text"
              className="border-none outline-none text-white text-2xl md:text-3xl montserrat-all font-medium bg-transparent placeholder:text-gray-300 text-right w-full"
              placeholder="0.00"
            />
          </div>
        </header>

        {/* Footer */}
        <footer className="flex justify-end items-center">
          {/* Asset cost in basic currency */}
          <div>
            <p className="montserrat-all text-sm text-gray-500 font-semibold">
              &#8358;{" "}
              {Math.floor(Math.random() * 100000).toLocaleString("en-US")}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
