import { useMemo, useRef, useState } from "react";
import dappLogo from "../assets/icons/logo.svg";
import { useScrollPosition } from "../hooks";
import SideNav from "./SideNav";

export const navLinks = [
  {
    name: "Markets",
    path: "#market-section",
  },
  { name: "Swap", path: "#swap-section" },
  {
    name: "AMM",
    path: "#amm-section",
  },
  {
    name: "Buy & Sell Crypto",
    path: "#buy-and-sell",
  },
  {
    name: "Legal",
    path: "#legal-section",
  },
  { name: "Support", path: "#support-section" },
];

const Navbar = () => {
  const navbarRef = useRef<any>(null);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const onOpen = () => setIsSidenavOpen(true);

  const onClose = () => setIsSidenavOpen(false);

  const onTrue = () => {
    if (!navbarRef.current) return;
    console.log("true");
    navbarRef.current.classList.remove("bg-opacity-0");
    navbarRef.current.classList.add("bg-opacity-100");
  };

  const onFalse = () => {
    if (!navbarRef.current) return;
    navbarRef.current.classList.remove("bg-opacity-100");
    navbarRef.current.classList.add("bg-opacity-0");
  };

  useScrollPosition(navbarRef as any, 80, onTrue, onFalse);

  return (
    <div
      className="w-full overflow-hidden z-50 h-16 fixed bg-[#131313] bg-opacity-0 top-0 left-0 transition-colors duration-300 flex items-center border-b-gray-700 border-b"
      ref={navbarRef}
    >
      <div className="w-full flex item-center justify-between py-3 px-6">
        <img src={dappLogo} />
        <div className="justify-end items-center gap-5 hidden md:flex">
          {navLinks.map((linkItem) => (
            <a
              href={linkItem.path}
              className="text-gray-300 montserrat-all font-medium text-xs"
            >
              {linkItem.name}
            </a>
          ))}
          <button className="uppercase border border-gray-700 text-gray-300 text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-gray-700 transition-colors rounded-md">
            Connect wallet
          </button>
        </div>
        <button
          className="text-gray-300 p-4 cursor-pointer flex items-center justify-center md:hidden"
          onClick={onOpen}
        >
          <i className="fi fi-br-bars-sort flex text-xl"></i>
        </button>
      </div>
      <SideNav isOpen={isSidenavOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
