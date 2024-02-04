"use client";

import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AOS from 'aos';
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-full flex justify-between px-10 py-5 bg-white shadow-lg text-neutral-600 sticky top-0 z-50">
        <div className="vivaldi bold text-5xl text-bold" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Klaw.</div>
        <ul className="flex space-x-10 pt-2">
          <Link activeClass="active" to="home" offset={-100} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
            >
                HOME
            </motion.li>
          </Link>
          <Link activeClass="active" to="about" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"
            >
                ABOUT
            </motion.li>
          </Link>
          <Link activeClass="active" to="works" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"
            >
                WORKS
            </motion.li>
          </Link>
          <Link activeClass="active" to="contact" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"
            >
                CONTACT
            </motion.li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
