import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/Components/header";
import Intro from "@/Components/intro";
import ImageDynamic from "@/Components/ImageDynamic";
import SeguidoIntro from "@/Components/seguidoIntro";
// import {gatito1} from "@/public/gatito1.jpg"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  return (
    <div>
      <main>
        <div>
          <Header />
        </div>
        <div>
          <Intro />
        </div>
        <div style={{
          marginTop:"10%",
          // position: "absolute",
          // left:"0",
          width:"100%",
        }}>
          <ImageDynamic />
        </div>
        <div>
          <SeguidoIntro />
        </div>
      </main>
    </div>
  );
}
