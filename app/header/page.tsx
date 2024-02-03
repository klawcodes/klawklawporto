"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between px-10 py-5 bg-white shadow-lg text-neutral-600 sticky top-0 z-50">
        <div className="vivaldi bold text-5xl text-bold">Klaw.</div>
        <ul className="flex space-x-10 pt-2">
          <Link activeClass="active" to="home" offset={-100} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer"
            >
                HOME
            </motion.li>
          </Link>
          <Link activeClass="active" to="about" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer"
            >
                ABOUT
            </motion.li>
          </Link>
          <Link activeClass="active" to="works" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer"
            >
                WORKS
            </motion.li>
          </Link>
          <Link activeClass="active" to="contact" offset={-50} spy={true} smooth={true}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
              }} className="cursor-pointer"
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
