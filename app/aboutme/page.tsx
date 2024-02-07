'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import AOS from 'aos';
import "aos/dist/aos.css";
import styles from './styles.module.css'

const Aboutme = () => {
    

    useEffect(() =>{
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] mb-10 max-[390px]:px-5" id='about'>
            <div className="flex max-[640px]:flex-col">
                <div className=" w-[40%] max-[640px]:w-[100%]">
                    <h2 className="vivaldi text-[6rem] max-[640px]:text-[5rem]" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">About Me.</h2>
                    <p className="helvetica text-[20px]" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Hey there! I`m Muhammad Dimas, a Junior Programmer and Digital Artist who`s all about design, music, and coding cool stuff. I got into programming back in 2020 when I decided to build my own Portfolio Website, and since then, I`ve been hooked! <br /><br />

You`ll usually find me lost in the world of creativity, whether I`m crafting 3D wonders, designing eye-catching graphics, or grooving to my latest music creation. Programming isn`t just a hobby for me; it`s my passion.<br /><br />

Join me on this exciting journey where we`ll explore the digital universe together. Let`s code, design, and create awesome things, one step at a time. Ready to dive in and make some magic happen? Let`s do this!</p>
                </div>
                <div className='pl-[100px] max-[640px]:pl-0'>
                    <h2 className="vivaldi text-[6rem]" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Skills</h2>
                        <div className='mb-7' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                            <p className='helvetica text-[20px] pb-5'>PROGRAMMING LANGUAGES & TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem] max-[640px]:grid-cols-3 max-[640px]:gap-x-[3rem]">
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                                <div className='image-container w-[60px] h-auto'>
                                    <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" 
                                    alt='Javascript' 
                                    sizes="4.3vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={60}
                                    height={60}
                                    className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">
                            <p className='helvetica text-[20px] pb-5'>DESIGN TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem] max-[640px]:grid-cols-3 max-[640px]:gap-x-[3rem]">
                                <div className='image-container w-[60px] h-auto'>
                                        <Image 
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" 
                                        alt='Javascript' 
                                        sizes="4.3vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        width={60}
                                        height={60}
                                        className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                    </div>
                                    <div className='image-container w-[60px] h-auto'>
                                        <Image 
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg" 
                                        alt='Javascript' 
                                        sizes="4.3vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        width={60}
                                        height={60}
                                        className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative rounded-lg'/>
                                    </div>
                                    <div className='image-container w-[60px] h-auto'>
                                        <Image 
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" 
                                        alt='Javascript' 
                                        sizes="4.3vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        width={60}
                                        height={60}
                                        className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative rounded-lg'/>
                                    </div>
                                    <div className='image-container w-[60px] h-auto'>
                                        <Image 
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" 
                                        alt='Javascript' 
                                        sizes="4.3vw"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        width={60}
                                        height={60}
                                        className='transition duration-300 filter grayscale hover:filter-none iimage w-[60px] relative'/>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutme