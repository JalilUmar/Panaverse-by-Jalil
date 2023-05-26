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

            <div className="">

                <div className="md:flex w-full bg-[url('/bgAbout.jpg')] justify-center rounded-b-[50px] bg-cover bg-fixed  md:pt-[100px] pt-[40px] ">
                    <motion.div className="grid   md:w-2/3  place-content-center"
                        animate={{
                            y: [-5, -40, -5]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}>
                        <h1 className="md:text-9xl md:flex hidden text-6xl text-white font-extrabold px-5 md:ml-[170px] pb-10 "><BsFillQuestionOctagonFill className="mx-2" /> About Us</h1>

                    </motion.div>

                    <div className="md:w-1/3 md:ml-[100px] ">
                        <RevealWrapper origin='left' delay={200} duration={400} distance='100px' reset={true} >
                            <Image className="md:-mr-[50px] ml-[50px] " src='/president1.png' alt="banner" width={300} height={502} />
                        </RevealWrapper>
                    </div>


                </div>

                <div>
                    <h1 className="flex justify-center md:text-7xl text-4xl font-extrabold md:mb-[50px] pl-5 md:pl-0 mb-[10px] md:mt-[100px] mt-[30px]">Panaverse DAO <BsFillQuestionOctagonFill className="mx-2 pb-1" /></h1>
                    <p className="mb-10 text-center px-5 md:px-[150px]">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
                </div>

                <div className="md:flex ">
                    <div className=" md:pl-[100px] pl-5 md:w-1/2">
                        <RevealList interval={300} delay={500} origin='left' duration={700} distance='500px' reset={true} className='flex flex-wrap items-center '>
                            <h1 className="flex md:text-5xl text-3xl font-bold md:mt-[50px] mt-[50px]  px-3 py-1 border-l-[11px] rounded-lg border-l-purple-400"><GiMoneyStack className="mx-2 mt-1 " /> Earn While You Learn</h1>
                            <h3 className="flex md:text-2xl text-xl font-bold md:mt-[10px] mt-[10px] mb-10 px-3 text-blue-500">The Program in a Nutshell: Earn While You Learn</h3>

                            <p className=" md:pl-[70px] px-5 mb md:pr-[100px] mb-7">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>
                        </RevealList>
                    </div>
                    <motion.div className="md:w-1/2 "
                        animate={{
                            y: [-5, -40, -5]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}>
                        <Image className="m-auto mt-10" src='/panaverse-logo.png' alt="Banner2" width={380} height={380} />
                    </motion.div>
                </div>

                <div>
                    <h1 className="flex justify-center md:text-7xl text-3xl font-extrabold md:mb-[50px] pl-5 md:pl-0 mb-[10px] md:mt-[100px] mt-[30px]"><BsBookHalf className="mx-2 pb-1" /> Program Of Studies</h1>
                    <p className="mb-10 text-center md:px-[250px] px-5">This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
                </div>


                <div>
                    <h1 className="flex justify-center md:text-6xl text-3xl font-extrabold md:mb-[50px] pl-5 md:pl-0 mb-[10px] md:mt-[100px] mt-[30px]">Outcome for Participants of the Program</h1>
                    <p className="mb-10 text-center md:px-[250px] px-5">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>

                </div>


            </div>
        </>
    )
}
