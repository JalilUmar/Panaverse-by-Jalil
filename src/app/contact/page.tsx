'use client'

import { BsFillHouseFill, BsBookHalf, BsFillQuestionOctagonFill, BsSearch, BsLink45Deg, BsFillTelephoneFill, BsYoutube, BsFacebook, BsTwitter, BsLinkedin, BsGithub, BsBook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import { AiFillCopyrightCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { GiMoneyStack } from "react-icons/gi";
import { motion } from "framer-motion"
import { RevealWrapper, RevealList } from 'next-reveal'

export default function page() {
    return (
        <>
            <div className="md:flex w-full bg-[url('/bgContact.jpg')] justify-center rounded-b-[50px] bg-cover bg-fixed  md:pt-3 pt-[40px] ">
                <motion.div className="grid place-content-center" animate={{
                    y: [-5, -40, -5]
                }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}>
                    <h1 className="md:text-9xl text-6xl text-white font-extrabold px-5 py-[200px] md:ml-[400px] flex"><BsFillTelephoneFill className="mx-2" /> Contacts</h1>

                </motion.div>
            </div>

            <div className="md:flex grid ">
                <motion.div className="md:w-1/2 my-1"
                    animate={{
                        y: [-5, -40, -5]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}>
                    <Image src='/contact.png' alt="Banner2" width={600} height={600} />
                </motion.div>

                <div className="md:w-1/2 md:pl-0 pl-7">
                    <RevealWrapper origin='left' delay={200} duration={400} distance='200px' reset={true} >
                        <h1 className="flex md:text-6xl text-4xl font-bold md:mt-[100px] mb-[70px] px-3 py-1 border-l-[11px] rounded-lg border-l-purple-400"><BsFillTelephoneFill className="mx-2 mt-1 " /> Contact us</h1>
                    </RevealWrapper>
                    <RevealWrapper origin='left' delay={400} duration={400} distance='200px' reset={true} >
                    <h3 className="flex md:text-2xl text-xl font-bold md:mt-[10px] mt-[10px] mb-10 px-3 text-black"><BsFillTelephoneFill className="mx-2 mt-1" />  +92 308 2220203</h3>
                    </RevealWrapper>
                    <RevealWrapper origin='left' delay={600} duration={400} distance='200px' reset={true} >
                    <h3 className="flex md:text-2xl text-xl font-bold md:mt-[10px] mt-[10px] mb-10 px-3 text-black"><SiGmail className="mx-2 mt-1" />  absdef@gmail.com</h3>
                    </RevealWrapper>
                    <RevealWrapper origin='left' delay={800} duration={400} distance='200px' reset={true} >
                    <h3 className="flex md:text-2xl text-xl font-bold md:mt-[10px] mt-[10px] mb-10 px-3 text-black"><BiCurrentLocation className="mx-2 mt-1" />  Karachi , Sindh , Pakistan</h3>
                    </RevealWrapper>
                </div>

            </div>
        </>
    )
}
