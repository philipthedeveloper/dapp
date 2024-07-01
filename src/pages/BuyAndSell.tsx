import { useState } from "react";
import { Asset, paymentCurrencies, receivingCurrencies } from "@/data";
import { BuyAndSellDialog } from "@/components/BuyAndSellDialog";

type Props = {};
export const BuyAndSell = ({}: Props) => {
  const [youGet, setYouGet] = useState(receivingCurrencies[0]);
  const [youPay, setYouPay] = useState(paymentCurrencies[0]);

  const changeReceivingCurrency = (data: Asset) => setYouGet(data);
  const changePaymentCurrency = (data: Asset) => setYouPay(data);

  return (
    <>
      <div className="min-h-dvh flex flex-col gap-16 md:flex-row md:gap-6 justify-center md:justify-center items-center w-[90%] mx-auto my-24 sm:mt-16 sm:mb-0 md:mt-0">
        {/* Left container */}
        <div className="md:flex-1 max-w-[500px]">
          <h2 className="text-white font-bold text-2xl md:text-4xl mb-4 montserrat-all">
            Buy Lumens (Stellar) instantly
          </h2>
          <p className="text-gray-300 montserrat-all max-w-[450px] leading-lose md:leading-loose text-sm md:text-base">
            StellarX is a trusted place where you can easily buy Lumens
            (Stellar) and other cryptocurrencies instantly using a credit or
            debit card, bank transfer, Apple Pay, Google Pay, and more.
          </p>
          <ul className="list-inside list-disc ml-4 mt-6 flex flex-col gap-2">
            <li className="montserrat-all font-medium">
              No registration required
            </li>
            <li className="montserrat-all font-medium">
              Work with Apple Pay & Google Pay
            </li>
            <li className="montserrat-all font-medium">
              Available in 150+ countries (including US)
            </li>
            <li className="montserrat-all font-medium">
              No KYC for small amounts
            </li>
          </ul>
        </div>

        {/* Right container */}
        <div className="backdrop-blur-sm flex-col md:flex-1 w-full mx-auto justify-center flex items-center">
          <div className="black-bg p-2 rounded-2xl md:rounded-3xl w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-2 relative">
            {/* Source coin */}
            <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
              <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
                You Pay
              </p>
              <div className="my-2 flex justify-between items-center">
                {/* <p className="text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium">
                0
              </p> */}
                <input
                  type="text"
                  className="border-none outline-none text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium bg-transparent flex-1 inline-block max-w-24"
                  placeholder="0"
                />
                <BuyAndSellDialog
                  currentCurrency={youPay}
                  currencies={paymentCurrencies}
                  onChangeSelectedAsset={changePaymentCurrency}
                />
              </div>
            </div>

            {/* Reverse trade */}
            {/* <div className="relative h-0 mb-1">
              <button
                className="card rounded-xl w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#131313] flex justify-center items-center"
              >
                <i className="fi fi-rr-arrow-small-down text-white flex text-xl md:text-2xl"></i>
              </button>
            </div> */}

            {/* Destination coin */}
            <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
              <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
                You Get
              </p>
              <div className="my-2 flex justify-between items-center">
                <input
                  type="text"
                  className="border-none outline-none text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium bg-transparent flex-1 inline-block max-w-24"
                  placeholder="0"
                />
                <BuyAndSellDialog
                  currentCurrency={youGet}
                  currencies={receivingCurrencies}
                  onChangeSelectedAsset={changeReceivingCurrency}
                />
              </div>
            </div>
            {/* <div className="card p-4 rounded-xl md:rounded-2xl w-full mt-1">
            <p className="text-[#9b9b9b] montserrat-all text-xl font-semibold text-center opacity-60">
              Connecting wallet...
            </p>
          </div> */}
            <button className="uppercase rounded-xl md:rounded-2xl mt-2 py-3 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80">
              Buy {youGet.name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
