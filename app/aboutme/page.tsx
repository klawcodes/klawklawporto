import Image from 'next/image'

const Aboutme = () => {
  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] mb-10">
            <div className="flex">
                <div className=" w-[40%] ">
                    <h2 className="vivaldi text-[6rem]">About Me.</h2>
                    <p className="helvetica text-[20px]">I know you`re confused about what the above means,
                        so let me introduce myself.
                        <br /><br />
                        Hello, my name is Muhammad Dimas, known by many names.
                        I am a Junior Programmer and Digital Artist. passionate about
                        design, music, technology and programming.
                        <br /><br />
                        I like to give a nickname to myself in some hobby examples
                        of making 3d, design, and music. so the name
                        you see above is my nickname in some jobs.
                        <br /><br />
                        I`m interested in programming since 2020, the first time i started programming was to make a Portfolio Website for my self and now i`m learning something cool.</p>
                </div>
                <div className='pl-[100px]'>
                    <h2 className="vivaldi text-[6rem]">Skills</h2>
                        <div className='mb-7'>
                            <p className='helvetica text-[20px] pb-5'>PROGRAMMING LANGUAGES & TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem]">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width={60} height={60} alt='Javascript'/>
                            </div>
                        </div>
                        <div>
                            <p className='helvetica text-[20px] pb-5'>DESIGN TOOLS</p>
                            <div className="grid grid-cols-4 gap-x-[7rem] gap-y-[2rem]">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" width={60} height={60} alt='Javascript'/>
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" width={60} height={60} alt='Javascript'/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutme