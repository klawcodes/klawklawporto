import Image from 'next/image'

const About = () => {
  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px]">
            <p className="text-[80px] leading-[5rem] helvetica mb-3">HELLO, THIS IS KLAW⁘. <br /> A JUNIOR PROGRAMMER & <br /> 
            <span className='relative'>
              <h2 className='mondwest italic text-[100px]'>dIgiTal ArTiSt </h2>
            </span>
            </p>
            <p className="text-[12px] leading-[1rem] helvetica">BASED IN BEKASI _ INDONESIA<br></br>WORKING WORLDWIDE</p>
            <div className='flex space-x-5 mt-20'>
              <div className="flex flex-col mb-10">
                  <a href="https://github.com/klawcodes" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/klaw.png" width={300} height={300} alt='klaw' className='rounded-3xl'/>
                  </a>
                  <hr className='h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900'/>
                  <p className='text-[12px] py-[0.9rem] helvetica'>FRONT END DEVELOPER - JUNIOR PROGRAMMER</p>
                  <h2 className='text-[19px] helvetica'>KLAW</h2>
              </div>
              <div className="flex flex-col">
                  <a href="https://github.com/klawcodasdasdes" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/riot.png" width={300} height={300} alt='klaw' className='rounded-3xl'/>
                  </a>
                  <hr className='h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900'/>
                  <p className='text-[12px] py-[0.9rem] helvetica'>3D DESIGNER - DIGITAL ARTIST</p>
                  <h2 className='text-[19px] helvetica'>RIOT REVENGER</h2>
              </div>
              <div className="flex flex-col">
                  <a href="https://github.com/klawcodasdasdes" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/npk.png" width={300} height={300} alt='klaw' className='rounded-3xl'/>
                  </a>
                  <hr className='h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900'/>
                  <p className='text-[12px] py-[0.9rem] helvetica'>GRAPHIC DESIGNER - DIGITAL ARTIST</p>
                  <h2 className='text-[19px] helvetica'>NEON PAPER KID</h2>
              </div>
              <div className="flex flex-col">
                  <a href="https://github.com/klawcodasdasdes" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/mk.png" width={300} height={300} alt='klaw' className='rounded-3xl'/>
                  </a>
                  <hr className='h-px mt-5 bg-gray-900 border-0 dark:bg-gray-900'/>
                  <p className='text-[12px] py-[0.9rem] helvetica'>MUSIC PRODUCER</p>
                  <h2 className='text-[19px] helvetica'>MIDNIGHT KOALA</h2>
              </div>
            </div>
        </div>
    </>
  )
}

export default About