'use client'
import { BsBookHalf, BsFillHouseFill, BsFillQuestionOctagonFill, BsSearch, BsLink45Deg, BsFillTelephoneFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion"
import { RevealWrapper, RevealList } from 'next-reveal'



export default function Header() {
    return (
        <>


            <div className="flex bg-white justify-between border-b-[7px] border-b-blue-500 rounded-b-lg  pt-3 md:px-20 px-3  pb-3 items-center w-full absolute">

                <motion.div
                    animate={{
                        y: [5, -10, 5]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}>

                    <Link href='/' >
                        <Image className="" src='/panaverse-logo1.webp' alt="Panaverse" width={100} height={120} />
                    </Link>
                </motion.div>

                <div >
                    <ul className="md:flex hidden space-x-[60px] font-semibold text-xl text-blue-500 items-center">
                        <RevealWrapper origin='top' delay={200} duration={400} distance='200px' reset={true} >
                            <li className="hover:text-2xl flex active:mt-2 ">
                                <BsFillHouseFill className="mx-2 mt-1" />
                                <Link href='/' >
                                    Home
                                </Link>
                            </li>
                        </RevealWrapper>
                        <RevealWrapper origin='top' delay={400} duration={400} distance='200px' reset={true} >
                            <li className="hover:text-2xl flex active:mt-2 ">
                                <BsBookHalf className="mx-2 mt-1" />
                                <Link href='/syllabus' >
                                    Syllabus
                                </Link>
                            </li>
                        </RevealWrapper>
                        <RevealWrapper origin='top' delay={800} duration={400} distance='200px' reset={true} >
                            <li className="hover:text-2xl flex active:mt-2 ">
                                <BsFillQuestionOctagonFill className="mx-2 mt-1" />
                                <Link href='/about' >
                                    About
                                </Link>
                            </li>
                        </RevealWrapper>
                        <RevealWrapper origin='top' delay={1000} duration={400} distance='200px' reset={true} >
                            <li className="hover:text-2xl flex active:mt-2 ">
                                <BsFillTelephoneFill className="mx-2 mt-1" />
                                <Link href='/contact' >
                                    Contact
                                </Link>
                            </li>
                        </RevealWrapper>
                    </ul>
                </div>

                <div>
                    <RevealWrapper origin='top' delay={300} duration={400} distance='100px' reset={true} >
                        <Link href='/' >
                            <button className="bg-blue-600 rounded-lg px-3 py-2 md:text-lg text-md text-white font-bold hover:bg-blue-800  active:mt-2">Apply Now</button>
                        </Link>
                    </RevealWrapper>
                </div>
            </div >

        </>
    )
}
