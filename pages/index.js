import Image from "next/image";
import localFont from "next/font/local";
import { motion, useScroll, useWillChange } from "framer-motion";
import { useEffect, useState } from "react";
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

  const [number, setNumber] = useState(1);


  const [arrArticulo, setArrArticulo] = useState([
    {
      title: "hola",
      body: `hola`
    },
    {
      title: "hola",
      body: `hola`
    },
    {
      title: "hola",
      body: `hola`
    },
    {
      title: "hola",
      body: `hola`
    },
    {
      title: "hola",
      body: `hola`
    }
  ]);

  // console.log(scrollYProgress);
  const { scrollYProgress } = useScroll();

  const handlerScrollYProgress = () => {
    // console.log(scrollYProgress.current.toFixed(2));
    setNumber(
      scrollYProgress.current.toFixed(2) <= 0.0 ?
        1
        :
        scrollYProgress.current.toFixed(2) <= 0.3 ?
          2
          :
          scrollYProgress.current.toFixed(2) <= 0.5 ?
            3
            :
            scrollYProgress.current.toFixed(2) <= 0.8 ?
              4
              :
              5)
  }

  useEffect(() => {
    window.addEventListener("scroll", handlerScrollYProgress);
    return () => {
      window.removeEventListener("scroll", handlerScrollYProgress);
    }
  }, [])

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Se va a cambiar el numero en la url de la imagen segun el porcentaje de scroll */}
        <motion.img src={`/MAPAS${number}.jpg`} className="fixed" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)",width: "1550px"}}/>
        {
          //Dinamicamente el Articulo se va añadiendo al font end
          arrArticulo.map((art, index) => {
            return (
              <div className=" z-30 m-32 bg-white text-black" key={index}>
                <h1 className="text-3xl">{art.title}</h1>
                <label>{art.body}</label>
              </div>
            )
          })
        }
      </main>
    </div>
  );
}
