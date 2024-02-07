'use client'

import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        className="w-full px-10 text-neutral-600 pt-[50px] mb-[7rem]"
        id="contact"
      >
        <div className="flex justify-between max-[640px]:flex-col max-[640px]:justify-center">
          <div className=" w-[40%] helvetica flex flex-col space-y-7">
            <div className="ava flex" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <LuDot className="text-[20px] text-green-500 dot-animate" />
              <h1 className="t-ava">Available for hire</h1>
            </div>
            <div className="email flex text-[1.7rem] items-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <MdOutlineMailOutline className="mb-2 mr-[1rem]" />
              <h1 className="font-bold hover:underline">
                <a href="mailto:hi@klaw.my.id" target="_blank">
                  hi@klaw.my.id
                </a>
              </h1>
            </div>
            <div className="email flex text-[1.7rem] items-center" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <AiOutlineGithub className="mb-2 mr-[1rem]" />
              <h1 className="font-bold hover:underline">
                <a href="https://github.com/klawcodes" target="_blank">
                  klawcodes
                </a>
              </h1>
            </div>
            <div className="email flex text-[1.7rem] items-center" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
              <AiOutlineTwitter className="mb-2 mr-[1rem]" />
              <h1 className="font-bold hover:underline">
                <a href="https://twitter.com/0xKlaw" target="_blank">
                  @0xKlaw
                </a>
              </h1>
            </div>
          </div>
          <div className="w-[50%] max-[640px]:w-[100%] max-[640px]:mt-5">
            <p className="text-[4rem] text-end leading-[4rem] helvetica max-[640px]:text-[3rem] max-[640px]:leading-[3rem]" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
              I WOULD LOVE TO HEAR FROM YOU.
              <br />⁘ LETS WORK
              <p className="vivaldi italic text-[8rem] max-[640px]:text-[5rem]" data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000"> Together.</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
