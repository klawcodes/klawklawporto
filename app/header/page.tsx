'use client'

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsList, BsX } from "react-icons/bs";


const styles= {
  navLinks: `cursor-pointer ml-10 uppercase border-b hover:border-[#5c5c5c] text-l helvetica`,
}


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <>
      <nav className="w-full h-24 shadow-xl bg-white sticky top-0 z-[998]">
        {/* desktop */}
        <div className="flex items-center justify-between h-full px-[2rem] py-4 w-full max-[390px]:px-[1rem]">
          <h2 className="logo vivaldi font-bold text-[4rem] text-neutral-600">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              offset={-50}
              smooth={true}
            >
              Klaw.
            </Link>
          </h2>
          <div className='hidden sm:flex text-neutral-600'>
            <ul className='hidden sm:flex'>
              <li className={styles.navLinks}>
                <Link 
                  to="home"
                  spy={true}
                  offset={-50}
                  smooth={true}
                >HOME</Link>
              </li>
              <li className={styles.navLinks}>
                <Link 
                  to="about"
                  spy={true}
                  offset={-50}
                  smooth={true}
                >ABOUT</Link>
              </li>
              <li className={styles.navLinks}>
                <Link 
                  to="works"
                  spy={true}
                  offset={-50}
                  smooth={true}
                >WORKS</Link>
              </li>
              <li className={styles.navLinks}>
                <Link 
                  to="contact"
                  spy={true}
                  offset={-50}
                  smooth={true}
                >CONTACT</Link>
              </li>
            </ul>
          </div> 
          {/*mobile */}
          <div onClick={toggleMenu} className='sm:hidden cursor-pointer pl-24'>
            <BsList className='h-8 w-8 text-neutral-600'/>
          </div>
        </div>
        <div className={menuOpen ? "fixed top-0 left-0 w-[50%] sm:hidden shadow-lg z-[999] h-screen bg-white p-10 ease-in-out duration-500": "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
          <div className='flex w-full items-center justify-end'>
            <div onClick={toggleMenu} className='cursor-pointer'>
              <BsX className='h-8 w-8 text-[#030303]'/>
            </div>
          </div>
          {/* menu mobiles */}
          <div className='flex-col py-4'>
            <ul>
              <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-white'>
                <Link 
                  to="home"
                  spy={true}
                  offset={-70}
                  smooth={true}
                >HOME</Link>
              </li>
              <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-white'>
                <Link 
                  to="about"
                  spy={true}
                  offset={-70}
                  smooth={true}
                >ABOUT</Link>
                </li> 
              <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-white'>
                <Link 
                  to="works"
                  spy={true}
                  offset={-70}
                  smooth={true}
                >WORKS</Link>
                </li> 
              <li onClick={() => setMenuOpen(false)} className='py-4 hover:underline hover:decoration-white'>
                <Link 
                  to="contact"
                  spy={true}
                  offset={-70}
                  smooth={true}
                >CONTACT</Link>
                </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
