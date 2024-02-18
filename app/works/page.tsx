'use client'

import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython } from "react-icons/di"
import { SiBlender, SiNextdotjs, SiElectron, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAbletonlive } from "react-icons/si";
import { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
    };

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial window width

      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] pb-[50px] max-[390px]:px-5" id="works">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <h2 className="vivaldi text-[6rem] max-[640px]:text-[5rem] max-[640px]:leading-[4.2rem]">Featured Works</h2>
                <div className='flex flex-wrap space-x-5 mb-10 max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:gap-x-5 max-[640px]:gap-y-5 max-[640px]:space-x-0 max-[640px]:text-[5px]'>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px] 
                    ${selectedCategory === 'ALL' ? 'bg-gray-700 text-white' : ''} 
                    ${windowWidth <= 640 ? 'text-[10px] px-[3.5rem] py-[0.5rem]' : ''}`}  
                    onClick={() => handleCategoryChange('ALL')}
                    style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >ALL</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${selectedCategory === 'KLAW' ? 'bg-gray-700 text-white' : ''} 
                    ${selectedCategory === 'KLAW' && 'text-gray-300'} 
                    ${windowWidth <= 640 ? 'text-[10px] px-[3.5rem] py-[0.5rem]' : ''}`} 
                    onClick={() => handleCategoryChange('KLAW')}
                    style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >KLAW</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${selectedCategory === 'RIOT REVENGER' ? 'bg-gray-700 text-white' : ''} 
                    ${selectedCategory === 'RIOT REVENGER' && 'text-gray-300'} 
                    ${windowWidth <= 640 ? 'text-[10px] px-[3.5rem] py-[0.5rem]' : ''}`} 
                    onClick={() => handleCategoryChange('RIOT REVENGER')}
                    style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >RIOT REVENGER</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${selectedCategory === 'NEON PAPER KID' ? 'bg-gray-700 text-white' : ''} 
                    ${selectedCategory === 'NEON PAPER KID' && 'text-gray-300'} 
                    ${windowWidth <= 640 ? 'text-[10px] px-[3.5rem] py-[0.5rem]' : ''}`} 
                    onClick={() => handleCategoryChange('NEON PAPER KID')}
                    style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >NEON PAPER KID</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out max-[390px]:text-[9px]
                    ${selectedCategory === 'MIDNIGHT KOALA' ? 'bg-gray-700 text-white' : ''} 
                    ${selectedCategory === 'MIDNIGHT KOALA' && 'text-gray-300'} 
                    ${windowWidth <= 640 ? 'text-[10px] px-[3.5rem] py-[0.5rem]' : ''}`} 
                    onClick={() => handleCategoryChange('MIDNIGHT KOALA')}
                    style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >MIDNIGHT KOALA</button>
                </div>
                <div className='py-5 grid grid-cols-4 gap-y-[6rem] max-[640px]:grid max-[640px]:grid-cols-1 max-[640px]:gap-y-[3rem]' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">CAPRES FACTS</h2>
                            <DiHtml5 title="HTML" className="icon mb-1"/>
                            <DiCss3 title="CSS" className="icon mb-1"/>
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/capres-facts-web" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">LARQ API</h2>
                            <DiJsBadge title="Javascript" className="icon mb-1"/>    
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/larq-api" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">HOLOLIVE ID</h2>
                            <DiReact title="Javascript" className="icon mb-1"/>
                            <DiHtml5 title="HTML" className="icon mb-1"/>
                            <DiCss3 title="CSS" className="icon mb-1"/>  
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/holoid-website" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">AWAS IMSAK!</h2>
                            <SiNextdotjs title="next js" className="icon mb-1"/>
                            <DiHtml5 title="HTML" className="icon mb-1"/>
                            <DiCss3 title="CSS" className="icon mb-1"/>  
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/awas-imsak" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">HAND SIGN DETECTOR</h2>
                            <DiPython title="Javascript" className="icon mb-1"/>
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/hand-sign-detector" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'KLAW' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">REVENGER</h2>
                            <DiReact title="Javascript" className="icon mb-1"/>
                            <DiHtml5 title="HTML" className="icon mb-1"/>
                            <DiCss3 title="CSS" className="icon mb-1"/>  
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/klawcodes/revenger.asia" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'RIOT REVENGER' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">DEMONS.</h2>
                            <SiBlender title="Javascript" className="icon mb-1"/> 
                            <SiAdobeillustrator title="Adobe Illustrator" className="icon mb-1 ml-1" />
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://www.instagram.com/p/C2E-mUryfr9/" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'RIOT REVENGER' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">BURN IN HELL.</h2>
                            <SiBlender title="Blender" className="icon mb-1"/> 
                            <SiAdobeillustrator title="Adobe Illustrator" className="icon mb-1 ml-1" />
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://www.instagram.com/p/C0Rycx-yS-K/?img_index=1" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'NEON PAPER KID' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">JIMMY BROWN</h2>
                            <SiAdobephotoshop title="Adobe Photoshop" className="icon mb-1"/> 
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://www.instagram.com/p/CgHOuMgByjE/" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'NEON PAPER KID' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">OSA</h2>
                            <SiAdobephotoshop title="Adobe Photoshop" className="icon mb-1"/>
                            <SiAdobeaftereffects title="Adobe After Effects" className="icon mb-1 ml-1" />
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://www.instagram.com/p/CyLFtL3SmIT/?img_index=1" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'MIDNIGHT KOALA' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">PLEASE? EP</h2>
                            <SiAbletonlive title="Ableton" className="icon mb-1"/>
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://open.spotify.com/album/2c0ZeoRaVQEq54gMlaLfEN?si=azcRbQFuQKur59y0n6vhYQ" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                    <div className={`${selectedCategory === 'ALL' || selectedCategory === 'MIDNIGHT KOALA' ? '' : 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h2 className="helvetica mr-2 text-[20px] font-bold">I GOT THE ENERGY</h2>
                            <SiAbletonlive title="Ableton" className="icon mb-1"/>
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://open.spotify.com/track/1OyU062FrHu3yMvs4cjVNb?si=a1161f82cdd44d5d" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Works