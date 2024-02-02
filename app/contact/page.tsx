import { MdOutlineMailOutline } from "react-icons/md"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { LuDot } from "react-icons/lu";

const page = () => {
  return (
    <>
        <div className="w-full px-10 text-neutral-600 pt-[50px] mb-[7rem]">
            <div className="flex justify-between">
                <div className=" w-[40%] helvetica flex flex-col space-y-7">
                    <div className="ava flex">
                        <LuDot className="text-[20px] text-green-500"/>
                        <h1 className="t-ava">Available for hire</h1>
                    </div> 
                    <div className="email flex text-[1.7rem] items-center">
                        <MdOutlineMailOutline className="mb-2 mr-[1rem]"/>
                        <h1 className="font-bold"><a href="mailto:hi@klaw.my.id" target="_blank">hi@klaw.my.id</a></h1>
                    </div>
                    <div className="email flex text-[1.7rem] items-center">
                        <AiOutlineGithub className="mb-2 mr-[1rem]"/>
                        <h1 className="font-bold"><a href="https://github.com/klawcodes" target="_blank">klawcodes</a></h1>
                    </div>
                    <div className="email flex text-[1.7rem] items-center">
                        <AiOutlineTwitter className="mb-2 mr-[1rem]"/>
                        <h1 className="font-bold"><a href="https://twitter.com/0xKlaw" target="_blank">@0xKlaw</a></h1>
                    </div>
                </div>
                <div className='w-[50%]'>
                <p className="text-[4rem] text-end leading-[4rem] helvetica">I WOULD LOVE TO HEAR FROM YOU.<br/>⁘ LETS WORK<p className='vivaldi italic text-[8rem]'> Together.</p></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default page