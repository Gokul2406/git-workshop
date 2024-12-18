import Image from "next/image";
import { VT323 } from "next/font/google";

const VT323_font = VT323({
  weight: "400"
})

export default function Home() {
  return (
    <div className="w-screen h-screen bg-homePage flex items-center justify-center flex-col">
    {/*
    <div className="h-1/4 w-screen flex flex-row justify-evenly items-center">
      <h1>Turing</h1>
      <h1>Robotics</h1>
    </div>
    */}
    <div className="h-3/4 flex items-center justify-center">
      <h1 className={`${VT323_font.className} text-9xl [text-shadow:_0_9px_4px_rgb(194_36_147_/_1)]`}>CONVERGENCE</h1>
    </div>
    <footer className="h-1/4 flex items-center justify-center">
      <Image 
        src="/arrow_down.svg"
        width={50}
        height={50}
        alt="Arrow down button" />
    </footer>
    </div>
  );
}


