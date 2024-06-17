import DefiCard from "../Defi/DefiCard";

type Props = {};

export const Connect = ({}: Props) => {
  return (
    <div className="py-8 md:py-16 w-[90%] mx-auto relative z-10">
      <div className="w-full">
        <h1 className="text-white montserrat-all font-medium text-2xl md:text-3xl">
          Connect with us
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <DefiCard
            color={"red"}
            badgeIcon={"fi fi-sr-interrogation"}
            badgeText={"Help center"}
            className="h-[250px] flex flex-col justify-between col-span-2 lg:col-span-1"
          >
            <h2 className="text-[#ff4d00] montserrat-all font-medium text-xl md:text-2xl">
              Get Support
            </h2>
          </DefiCard>
          <DefiCard
            color={"brown"}
            badgeIcon={"fi fi-sr-book-alt"}
            badgeText={"Blog"}
            className="h-[250px] flex flex-col justify-between col-span-2 lg:col-span-1"
          >
            <h2 className="text-[#8e8767] montserrat-all font-medium text-xl md:text-2xl">
              Insight and news from the team
            </h2>
          </DefiCard>
          <DefiCard
            color={"darkPink"}
            badgeIcon={"fi fi-sr-comments"}
            badgeText={"Stay connected"}
            className="h-[250px] flex flex-col justify-between col-span-2"
          >
            <h2 className="text-[#fc72ff] montserrat-all font-medium text-xl md:text-2xl">
              Folow @Peeswap on X for the latest updates
            </h2>
          </DefiCard>
        </div>
      </div>
    </div>
  );
};
