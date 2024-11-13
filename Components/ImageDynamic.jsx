
import { motion, useScroll, useWillChange } from "framer-motion";
import { useEffect, useState } from "react";
export default function ImageDynamic() {

    const Styled = {
        absolute: {
            position: "absolute",
            top: "0%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            width: "100%"
        },
        fixed: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%"
        }
    }

    const [number, setNumber] = useState(1);
    const [position, setPosition] = useState(Styled.absolute)


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
            body: `Adios`
        }
    ]);
    const { scrollYProgress } = useScroll();

    const handlerScrollYProgress = () => {
        console.log(scrollYProgress.current.toFixed(2));
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
                            5);
        setPosition(scrollYProgress.current.toFixed(2) <= 0.16 ?
            Styled.absolute
            :
            scrollYProgress.current.toFixed(2) >= 0.85 ?
                Styled.absolute
                :
                Styled.fixed
        )
    }

    useEffect(() => {
        handlerScrollYProgress();
        window.addEventListener("scroll", handlerScrollYProgress);
        return () => {
            window.removeEventListener("scroll", handlerScrollYProgress);
        }
    }, []);

    return (
        <div>
            <div style={{
                position: "sticky",
                top: "0px",
            }}>
                <div style={position}>
                    <motion.img src={`/MAPAS${number}.jpg`} />
                </div>
            </div>
            {
                //Dinamicamente el Articulo se va añadiendo al font end
                arrArticulo.map((art, index) => {
                    return (
                        <div className=" z-30  bg-white text-black" key={index} style={{
                            marginBottom: "75%",
                            marginTop: "5%",
                            position: "relative",
                            marginLeft: "5%",
                            marginRight: "45%",
                            padding: "40px 30px",
                            top:"1000px",
                            width:"58%"
                        }}>
                            <h1 className="text-9xl">{art.title}</h1>
                            <label className="text-6xl">{art.body}</label>
                        </div>
                    )
                })
            }
        </div>
    );

}