'use client'

import { useState, useEffect } from 'react';
import Sparkle from "react-sparkle";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const [currentText, setCurrentText] = useState<string>('dIgiTal ArTiSt');

  useEffect(() => {
    const textArray = ['DiGItAl ARtIST', 'dIGitAL arTIsT', 'DigitaL artiSt', 'DigItal aRtiSt', 'dIgiTal ArTiSt'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentText(textArray[currentIndex]);
      currentIndex++;
      if (currentIndex === textArray.length) {
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  
  const textArrayp = currentText.split(" ");
  const textArrayy = "HELLO, THIS IS KLAW⁘.".split(" ");
  const textArrayy2 = "A JUNIOR PROGRAMMER &".split(" ");


  return (
    <>
      <div className="w-full px-10 text-neutral-600 pt-[50px]" id='home'>
      {textArrayy.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 10,
          }}
          className='text-[80px] leading-[5rem] helvetica mb-3'
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      <br />
      {textArrayy2.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 8,
          }}
          className='text-[80px] leading-[5rem] helvetica mb-3'
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      {textArrayp.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 6,
          }}
          className='mondwest leading-[5rem] italic text-[100px]'
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
        <p className="text-[12px] leading-[1rem] helvetica mt-4">
          BASED IN BEKASI _ INDONESIA<br></br>WORKING WORLDWIDE
        </p>
        <div className="flex space-x-5 mt-20">
          <div className="relative group flex flex-col">
            <a href="https://github.com/klawcodes" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <div className="h-300 relative">
                <Image src="/img/klaw.png" width={300} height={300} alt='klaw' className='rounded-3xl'/>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="vivaldi bold text-white text-5xl text-bold">Klaw.</h2>
                </div>
              </div>
            </a>
            <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
            <p className="text-[12px] py-[0.9rem] helvetica">
              FRONT END DEVELOPER & BACK END A BIT
            </p>
            <h2 className="text-[19px] helvetica">KLAW</h2>
          </div>
          <div className="relative group flex flex-col">
            <a href="https://www.instagram.com/riotrevenger/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <div className="h-300 relative">
                <Image src="/img/riot.png" width={300} height={300} alt='riot' className='rounded-3xl'/>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/img/logoriot.png" width={150} height={150} alt='klaw' className='rounded-3xl'/>
                </div>
              </div>
            </a>
            <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
            <p className="text-[12px] py-[0.9rem] helvetica">
              3D DESIGNER, MOGRAPH DESIGNER & MORE
            </p>
            <h2 className="text-[19px] helvetica">RIOT REVENGER</h2>
          </div>
          <div className="relative group flex flex-col">
            <a href="https://www.instagram.com/neonpaperkid/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <div className="h-300 relative">
                <Image src="/img/npk.png" width={300} height={300} alt='npk' className='rounded-3xl'/>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/img/logonpk.png" width={150} height={150} alt='klaw' className='rounded-3xl'/>
                </div>
              </div>
            </a>
            <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
            <p className="text-[12px] py-[0.9rem] helvetica">
              GRAPHIC DESIGNER & MOTION GRAPHIC ARTIST
            </p>
            <h2 className="text-[19px] helvetica">NEON PAPER KID</h2>
          </div>
          <div className="relative group flex flex-col">
            <a href="https://open.spotify.com/artist/6l6neQdiyZXEXDDJAINfIm?si=3u3BXLfaQu-SE93yqUd2KA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <div className="h-300 relative">
                <Image src="/img/mk.png" width={300} height={300} alt='mk' className='rounded-3xl'/>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/img/logomk.png" width={150} height={150} alt='klaw' className='rounded-3xl'/>
                </div>
              </div>
            </a>
            <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
            <p className="text-[12px] py-[0.9rem] helvetica">
              MUSIC PRODUCER
            </p>
            <h2 className="text-[19px] helvetica">MIDNIGHT KOALA</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
