'use client'

import { GiTeacher } from "react-icons/gi";
import { coreCards, specCard, Teacher } from '@/app/Components/database';
import Image from "next/image";
import { Roboto } from 'next/font/google';
import { motion } from "framer-motion"
import { RevealWrapper, RevealList } from 'next-reveal'
import Link from "next/link";

export default function Instructors() {

    let liVar = {
        init: {
            y: '-50px',
            opacity: 0
        },
        fin: {
            y: '0px',
            opacity: 1,


        }
    }

    return (
        <>
            <div className="bg-teal-500 md:mx-[70px] mx-[20px] py-5 rounded-[50px] mb-10">
                <div>
                    <h1 className="flex justify-center md:text-7xl text-2xl font-extrabold md:mb-[40px] mt-[40px]"><GiTeacher className="mx-2 md:pb-1" /> Our Top Instructors</h1>
                </div>

                <div className="md:flex  md:mx-[130px] text-center  py-5 mx-[20px]">
                    {Teacher.map((arg) => (
                        <RevealWrapper origin='bottom' delay={200} duration={400} distance='200px' reset={true} >
                            <Link href='' >
                                <motion.div className="  bg-white rounded-xl md:px-7 mx-3 my-7 md:my-0  pt-5 pb-2 shadow-lg shadow-gray-800 " key={arg.id} whileHover={{ scale: 1.3 }} >
                                    <Image className="rounded-full mx-auto " src={arg.src} alt="teachers" width={150} height={150} />
                                    <h1 className="text-xl text-center font-bold py-4">{arg.Name}</h1>

                                </motion.div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </>
    )
}
