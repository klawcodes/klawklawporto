'use client'

import { DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython } from "react-icons/di"
import { SiBlender, SiVuedotjs, SiElectron, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAbletonlive } from "react-icons/si";
import { useState } from 'react'

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] pb-[50px]">
            <div>
                <h2 className="vivaldi text-[6rem]">Featured Works</h2>
                <div className="flex space-x-5 mb-10">
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out ${selectedCategory === 'ALL' && 'bg-gray-700 text-gray-300'}`} onClick={() => handleCategoryChange('ALL')}>ALL</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out ${selectedCategory === 'KLAW' && 'bg-gray-700 text-gray-300'}`} onClick={() => handleCategoryChange('KLAW')}>KLAW</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out ${selectedCategory === 'RIOT REVENGER' && 'bg-gray-700 text-gray-300'}`} onClick={() => handleCategoryChange('RIOT REVENGER')}>RIOT REVENGER</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out ${selectedCategory === 'NEON PAPER KID' && 'bg-gray-700 text-gray-300'}`} onClick={() => handleCategoryChange('NEON PAPER KID')}>NEON PAPER KID</button>
                    <button className={`helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out ${selectedCategory === 'MIDNIGHT KOALA' && 'bg-gray-700 text-gray-300'}`} onClick={() => handleCategoryChange('MIDNIGHT KOALA')}>MIDNIGHT KOALA</button>
                </div>
                <div className="py-5 grid grid-cols-4 gap-y-[6rem]">
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
                            <h2 className="helvetica mr-2 text-[20px] font-bold">PLATFORMER GAME</h2>
                            <DiPython title="Javascript" className="icon mb-1"/>
                        </div>
                        <p className="helvetica mb-3 text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos mollitia harum voluptates, </p>
                        <a href="https://github.com/secretego/platformer-game" target="_blank"><button className="helvetica bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 py-1 px-8 text-[13px] rounded-full transition duration-300 ease-in-out">VIEW WORK</button></a>
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