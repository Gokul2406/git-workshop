import Image from "next/image";
import { VT323 } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const VT323_font = VT323({
  weight: "400"
})

const RobotoMono_font = Roboto_Mono({
  weight: "700"
})

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-homePage flex items-center justify-center flex-col p-2">
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
      <div className="h-screen w-screen p-16">
        <h1 className={`${RobotoMono_font.className} text-3xl [text-shadow:_0_5px_4px_rgb(194_36_147_/_1)]`}>latest articles</h1>
      </div>
    </div>
  );
}


