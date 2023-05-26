'use client'


import Image from "next/image";
import Link from "next/link";
import { BsBookHalf, BsMeta, BsFillHouseFill, BsFillQuestionOctagonFill, BsSearch, BsLink45Deg, BsFillTelephoneFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import { ltsCourse, coreCards } from '@/app/Components/database';
import { motion } from "framer-motion"
import { RevealWrapper, RevealList } from 'next-reveal'



export default function Banner() {
    return (
        <>
            <div className="w-full">

                <div className="md:flex w-full bg-[url('/bg3.jpg')] justify-center rounded-b-[50px] bg-cover bg-fixed  md:pt-[80px]  pt-[40px] md:pb-[15px] pb-[25px] ">

                    <div className="grid  md:w-1/2 ">
                        <RevealList interval={300} delay={500} origin='left' duration={700} distance='500px' reset={true} className='flex flex-wrap items-center '>
                            <h1 className="md:text-6xl text-4xl text-white font-extrabold md:pl-[90px] px-5 md:-mr-20 mt-10">Getting Ready for the Next Generation and Future of the Internet</h1>
                            <p className="text-md text-white md:px-[90px] px-[20px] md:pb-5 py-5 md:py-0 md:-my-10">One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
                            <Link href='https://www.panaverse.co/' target="main" className="md:px-[90px] px-[20px] ">
                                <button className="bg-teal-600 rounded-lg px-3 py-2 md:text-xl text-md text-white font-bold hover:bg-teal-700 active:mt-2">Learn More</button>
                            </Link>
                        </RevealList>
                    </div>
                    <motion.div className="py-[50px] justify-center relative"
                        animate={{
                            y: [-5, -40, -5]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}>
                        <Image className="md:-mr-[50px]" src='/chm1.png' alt="banner" width={1100} height={1100} />
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
                        <Image src='/Study.png' alt="Banner2" width={600} height={600} />
                    </motion.div>

                    <div className="md:w-1/2 ">
                        <RevealList interval={300} delay={500} origin='left' duration={700} distance='500px' reset={true} className='flex flex-wrap items-center '>
                            <h1 className="flex md:text-6xl text-4xl font-bold md:mt-[100px] mb-10 px-3 py-1 border-l-[11px] rounded-lg border-l-purple-400"><BsBookHalf className="mx-2 mt-1 " /> Program Of Studies</h1>

                            <p className=" md:pl-[70px] px-[20px] md:pr-[200px] mb-7">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>

                            <Link href='/syllabus' className="md:px-[70px] px-[20px] ">
                                <button className="bg-teal-600 rounded-lg px-3 py-2 md:text-xl text-md text-white font-bold hover:bg-teal-700 active:mt-2">Learn More</button>
                            </Link>
                        </RevealList>
                    </div>

                </div>

                <div>
                    <div>
                        <h1 className="flex justify-center md:text-7xl text-4xl font-extrabold mb-[50px] mt-[100px]"><FaSchool className="mx-2 pb-1" /> Latest Courses</h1>
                    </div>
                    <RevealList interval={300} delay={500} origin='bottom' duration={500} distance='200px' reset={true} >
                        <div className="md:flex  md:mx-[130px] text-center content-center py-10 ">

                            {ltsCourse.map((elem) => (


                                <motion.div className=" md:w-1/3 bg-white rounded-xl my-5 mx-3 py-5 shadow-lg shadow-gray-800 active:mt-2" key={elem.id}
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Link href={elem.url} >
                                        <h1 className="text-3xl justify-center font-bold pb-3 mb-2 flex">{elem.icon} {elem.title}</h1>
                                        <p className="px-7 ">{elem.description}</p>
                                    </Link>
                                </motion.div>


                            ))}
                        </div>
                    </RevealList>
                </div>

                <div className="md:flex my-10">
                    <div className=" md:pl-[100px] pl-5 md:w-1/2">
                        <RevealList interval={300} delay={500} origin='left' duration={700} distance='500px' reset={true} className='flex flex-wrap items-center '>
                            <h1 className="flex md:text-5xl text-3xl font-bold md:mt-[100px]  mb-10 py-3 border-b-[11px] rounded-lg border-b-purple-400"><BsFillQuestionOctagonFill className="mx-2 mt-1 " /> What Is Panaverse DAO?</h1>

                            <p className=" md:pl-[70px] pl-5 md:pr-[100px] mb-7">Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</p>

                            <Link href='https://www.panaverse.co/' target="main" className="md:px-[70px] pl-5 ">
                                <button className="bg-teal-600 rounded-lg px-3 py-2 text-xl text-white font-bold hover:bg-teal-700  active:mt-2">Read More</button>
                            </Link>
                        </RevealList>
                    </div>
                    <motion.div className="md:w-1/2"
                        animate={{
                            y: [-5, -40, -5]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}>
                        <Image src='/chm2.png' alt="Banner2" width={600} height={600} />
                    </motion.div>
                </div>
            </div >
        </>
    )
}
