import "./App.css";
import { Defi } from "./components/Defi/Defi";
import Navbar from "./components/Navbar";
import { Intro } from "./components/intro/Intro";
import noiseBg from "./assets/images/noise-bg.png";
import { Trust } from "./components/Trust/Trust";
import { Connect } from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div
        className="w-dvw h-full absolute z-0 opacity-[0.018]"
        style={{ background: `url(${noiseBg})` }}
      ></div>
      <Navbar />
      <main className="min-h-dvh w-dvw overflow-x-hidden bg-[#131313]">
        <div className="page-container w-full mx-auto max-w-[1400px] bg-[#131313]">
          <Intro />
          <Defi />
          <Trust />
          <Connect />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
