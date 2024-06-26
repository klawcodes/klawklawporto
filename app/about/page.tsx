"use client";

import { useState, useEffect } from "react";
import Sparkle from "react-sparkle";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

const About = () => {
  const [currentText, setCurrentText] = useState<string>("dIgiTal ArTiSt");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const textArray = [
      "DiGItAl ARtIST",
      "dIGitAL arTIsT",
      "DigitaL artiSt",
      "DigItal aRtiSt",
      "DiGItaL ARTiST",
      "dIgiTal ArTiSt",
    ];
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
  const textArrayy = "HELL°, THIS IS KLAW⁘.".split(" ");
  const textArrayy2 = "A JUNIOR PROGRAMMER &".split(" ");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full px-10 text-neutral-600 pt-[50px] max-[390px]:px-5" id="home">
        {textArrayy.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: i / 10,
            }}
            className="text-[80px] leading-[5rem] helvetica mb-3 max-[640px]:text-[45px] max-[640px]:leading-[3rem]"
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
            className="text-[80px] leading-[5rem] helvetica mb-3 max-[640px]:text-[45px] max-[640px]:leading-[3rem]"
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
            className="mondwest leading-[5rem] italic text-[100px] max-[640px]:text-[65px] max-[640px]:leading-[3rem]"
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
        <p
          className="text-[12px] leading-[1rem] helvetica mt-4"
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="1000"
        >
          BASED IN BEKASI _ INDONESIA<br></br>WORKING WORLDWIDE
        </p>
        <div className="flex place-content-around mt-20">
          {isMobile ? (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              navigation={false}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div
                  className="relative group flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <a
                    href="https://github.com/klawcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="h-300 relative">
                      <Image
                        src="/img/klaw.png"
                        width={300}
                        height={300}
                        alt="klaw"
                        className="rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                        <h2 className="vivaldi bold text-white text-5xl text-bold">
                          Klaw.
                        </h2>
                      </div>
                    </div>
                  </a>
                  <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                  <p className="text-[12px] py-[0.9rem] helvetica">
                    FRONT END DEVELOPER & BACK END A BIT
                  </p>
                  <h2 className="text-[19px] helvetica">KLAW</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative group flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <a
                    href="https://www.instagram.com/riotrevenger/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="h-300 relative">
                      <Image
                        src="/img/riot.png"
                        width={300}
                        height={300}
                        alt="riot"
                        className="rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src="/img/logoriot.png"
                          width={150}
                          height={150}
                          alt="klaw"
                          className="rounded-3xl"
                        />
                      </div>
                    </div>
                  </a>
                  <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                  <p className="text-[12px] py-[0.9rem] helvetica">
                    3D DESIGNER, MOGRAPH DESIGNER & MORE
                  </p>
                  <h2 className="text-[19px] helvetica">RIOT REVENGER</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative group flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <a
                    href="https://www.instagram.com/neonpaperkid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="h-300 relative">
                      <Image
                        src="/img/npk.png"
                        width={300}
                        height={300}
                        alt="npk"
                        className="rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src="/img/logonpk.png"
                          width={150}
                          height={150}
                          alt="klaw"
                          className="rounded-3xl"
                        />
                      </div>
                    </div>
                  </a>
                  <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                  <p className="text-[12px] py-[0.9rem] helvetica">
                    GRAPHIC DESIGNER & MOTION GRAPHIC ARTIST
                  </p>
                  <h2 className="text-[19px] helvetica">NEON PAPER KID</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative group flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <a
                    href="https://open.spotify.com/artist/6l6neQdiyZXEXDDJAINfIm?si=3u3BXLfaQu-SE93yqUd2KA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <div className="h-300 relative">
                      <Image
                        src="/img/mk.png"
                        width={300}
                        height={300}
                        alt="mk"
                        className="rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                          src="/img/logomk.png"
                          width={150}
                          height={150}
                          alt="klaw"
                          className="rounded-3xl"
                        />
                      </div>
                    </div>
                  </a>
                  <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                  <p className="text-[12px] py-[0.9rem] helvetica">
                    MUSIC PRODUCER
                  </p>
                  <h2 className="text-[19px] helvetica">MIDNIGHT KOALA</h2>
                </div>
              </SwiperSlide>
              {/* Add more slides here */}
            </Swiper>
          ) : (
            <>
              <div
                className="relative group flex flex-col"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <a
                  href="https://github.com/klawcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="h-300 relative">
                    <Image
                      src="/img/klaw.png"
                      width={300}
                      height={300}
                      alt="klaw"
                      className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="vivaldi bold text-white text-5xl text-bold">
                        Klaw.
                      </h2>
                    </div>
                  </div>
                </a>
                <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                <p className="text-[12px] py-[0.9rem] helvetica">
                  FRONT END DEVELOPER & BACK END A BIT
                </p>
                <h2 className="text-[19px] helvetica">KLAW</h2>
              </div>
              <div
                className="relative group flex flex-col"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <a
                  href="https://www.instagram.com/riotrevenger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="h-300 relative">
                    <Image
                      src="/img/riot.png"
                      width={300}
                      height={300}
                      alt="riot"
                      className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src="/img/logoriot.png"
                        width={150}
                        height={150}
                        alt="klaw"
                        className="rounded-3xl"
                      />
                    </div>
                  </div>
                </a>
                <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                <p className="text-[12px] py-[0.9rem] helvetica">
                  3D DESIGNER, MOGRAPH DESIGNER & MORE
                </p>
                <h2 className="text-[19px] helvetica">RIOT REVENGER</h2>
              </div>
              <div
                className="relative group flex flex-col"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <a
                  href="https://www.instagram.com/neonpaperkid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="h-300 relative">
                    <Image
                      src="/img/npk.png"
                      width={300}
                      height={300}
                      alt="npk"
                      className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src="/img/logonpk.png"
                        width={150}
                        height={150}
                        alt="klaw"
                        className="rounded-3xl"
                      />
                    </div>
                  </div>
                </a>
                <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                <p className="text-[12px] py-[0.9rem] helvetica">
                  GRAPHIC DESIGNER & MOTION GRAPHIC ARTIST
                </p>
                <h2 className="text-[19px] helvetica">NEON PAPER KID</h2>
              </div>
              <div
                className="relative group flex flex-col"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <a
                  href="https://open.spotify.com/artist/6l6neQdiyZXEXDDJAINfIm?si=3u3BXLfaQu-SE93yqUd2KA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="h-300 relative">
                    <Image
                      src="/img/mk.png"
                      width={300}
                      height={300}
                      alt="mk"
                      className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 flex rounded-3xl items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src="/img/logomk.png"
                        width={150}
                        height={150}
                        alt="klaw"
                        className="rounded-3xl"
                      />
                    </div>
                  </div>
                </a>
                <hr className="h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900" />
                <p className="text-[12px] py-[0.9rem] helvetica">
                  MUSIC PRODUCER
                </p>
                <h2 className="text-[19px] helvetica">MIDNIGHT KOALA</h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
