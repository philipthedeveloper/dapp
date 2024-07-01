import ethLogo from "../assets/icons/eth.png";
import daiLogo from "../assets/icons/dai.png";
import { AssetDialog } from "@/components/AssetDialog";
import { useState } from "react";
import { Asset, assets } from "@/data";

type Props = {};
export const Swap = ({}: Props) => {
  const [toBuy, setToBuy] = useState(assets[0]);
  const [toSell, setToSell] = useState(assets[1]);

  const changeBuyAsset = (data: Asset) => setToBuy(data);
  const changeSellAsset = (data: Asset) => setToSell(data);

  const reverseTradeOrder = () => {
    const buying = { ...toBuy };
    const selling = { ...toSell };
    setToSell(buying);
    setToBuy(selling);
  };

  return (
    <>
      <div className="min-h-dvh flex justify-center items-center backdrop-blur-sm w-[90%] mx-auto flex-col">
        <div className="mb-2 w-[90%] max-w-[400px] sm:max-w-[450px] md:max-w-[500px]">
          <button className="text-gray-200 card px-6 py-2 rounded-full montserrat-all text-sm font-medium">
            Swap
          </button>
        </div>
        <div className="black-bg p-2 rounded-2xl md:rounded-3xl w-[90%] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] flex flex-col gap-0 relative">
          {/* Source coin */}
          <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
            <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
              From
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
              <AssetDialog
                currentAsset={toSell}
                onChangeSelectedAsset={changeSellAsset}
              />
            </div>
          </div>

          {/* Reverse trade */}
          <div className="relative h-0 mb-1">
            <button
              className="card rounded-xl w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#131313] flex justify-center items-center"
              onClick={reverseTradeOrder}
            >
              <i className="fi fi-rr-arrow-small-down text-white flex text-xl md:text-2xl"></i>
            </button>
          </div>

          {/* Destination coin */}
          <div className="card p-4 rounded-xl md:rounded-2xl w-full hover:border hover:border-gray-800">
            <p className="text-[#9b9b9b] montserrat-all text-xs font-medium md:base">
              To
            </p>
            <div className="my-2 flex justify-between items-center">
              <input
                type="text"
                className="border-none outline-none text-[#9b9b9b] text-2xl md:text-3xl montserrat-all font-medium bg-transparent flex-1 inline-block max-w-24"
                placeholder="0"
              />
              <AssetDialog
                currentAsset={toBuy}
                onChangeSelectedAsset={changeBuyAsset}
              />
            </div>
          </div>
          {/* <div className="card p-4 rounded-xl md:rounded-2xl w-full mt-1">
            <p className="text-[#9b9b9b] montserrat-all text-xl font-semibold text-center opacity-60">
              Connecting wallet...
            </p>
          </div> */}
          <button className="uppercase rounded-xl md:rounded-2xl mt-6 py-4 text-gray-300 montserrat-all font-medium bg-yellow-500 duration-500 transition hover:bg-opacity-80">
            Connect wallet
          </button>
        </div>
      </div>
    </>
  );
};
