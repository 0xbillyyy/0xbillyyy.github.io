import { useRef, useState, useEffect } from "react"

import { CardNavigation } from "../Components/CardNavigation";

import { TypeAnimation } from 'react-type-animation';

import { motion } from "framer-motion"

import gambar from "/img/FotoBaru.png"

export default function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Asumsikan 768px sebagai batas mobile
  const constraintsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ubah batas ini sesuai kebutuhan
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const constraints = isMobile
    ? {
      left: -30,
      right: window.innerWidth - 330, // Contoh batas untuk mobile
      top: -110,
      bottom: 170, // Contoh batas untuk mobile
    }
    : {
      left: -400,
      right: window.innerWidth - 1000, // Contoh batas untuk desktop
      top: -70,
      bottom: 190, // Contoh batas untuk desktop
    };


  return (
    <div className="min-h-screen bg-custom-bg">
      {/* <div className="absolute top-[-5] right-0 w-48 h-48 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div> */}
      <div className="absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text" style={{ marginTop: "-100px", }}></div>


      <div className="flex justify-center">
        <motion.div
          ref={constraintsRef}
          // drag
          dragConstraints={constraints}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          whileHover={{ scale: 1.1 }}
          // whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
          drag // Mengizinkan elemen untuk digeser
          // dragConstraints={{ left: 50, right: window.innerWidth - 300, top: 0, bottom: window.innerHeight - 300 }} // Sesuaikan ukuran dragConstraints
          style={{
            backgroundImage: `url(${gambar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginTop: "50px",
          }}
          className="w-64 h-96 z-50"
        />
      </div>
      <div className="flex flex-col justify-center pt-5 items-center">
        <div>
          <h1 className="text-2xl font-bold text-custom-headline">Bilhaq Syahbani Sahatmojo</h1>
        </div>
        <div className="text-custom-paragraph">
          <TypeAnimation
            sequence={[
              "I'm Not Programmer!",
              1000,
              "I'm Not Hacker!",
              1000,
              "I excel at 'Ctrl+C' and 'Ctrl+V'!",
              1000,
            ]}
            speed={50}
            style={{ fontSize: '20px' }}
            repeat={Infinity}
          />
        </div>
      </div>
      <CardNavigation />
    </div>
  )

}