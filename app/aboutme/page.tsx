import Image from 'next/image'

const Aboutme = () => {
  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] mb-10" id='about'>
            <div className="flex">
                <div className=" w-[40%] ">
                    <h2 className="vivaldi text-[6rem]">About Me.</h2>
                    <p className="helvetica text-[20px]">Hey there! I`m Muhammad Dimas, a Junior Programmer and Digital Artist who`s all about design, music, and coding cool stuff. I got into programming back in 2020 when I decided to build my own Portfolio Website, and since then, I`ve been hooked! <br /><br />

You`ll usually find me lost in the world of creativity, whether I`m crafting 3D wonders, designing eye-catching graphics, or grooving to my latest music creation. Programming isn`t just a hobby for me; it`s my passion.<br /><br />

Join me on this exciting journey where we`ll explore the digital universe together. Let`s code, design, and create awesome things, one step at a time. Ready to dive in and make some magic happen? Let`s do this!</p>
                </div>
                <div className='pl-[100px]'>
                    <h2 className="vivaldi text-[6rem]">Skills</h2>
                        <div className='mb-7'>
                            <p className='helvetica text-[20px] pb-5'>PROGRAMMING LANGUAGES & TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem]">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                            </div>
                        </div>
                        <div>
                            <p className='helvetica text-[20px] pb-5'>DESIGN TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem]">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" width={60} height={60} alt='Javascript' className='transition duration-300 filter grayscale hover:filter-none'/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutme