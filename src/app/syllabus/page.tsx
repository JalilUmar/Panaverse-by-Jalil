'use client'

import { BsBookHalf, BsFillHouseFill, BsFillQuestionOctagonFill, BsSearch, BsLink45Deg, BsFillTelephoneFill, BsFillArrowUpRightCircleFill, BsBookFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import { coreCards, specCard } from '@/app/Components/database';
import Instructors from "../Components/Instructors";
import { motion } from "framer-motion"
import { RevealWrapper, RevealList } from 'next-reveal'

export default function Syllabus() {
  return (
    <>
      <div>


        <div className="md:flex w-full bg-[url('/bgSyllabus.jpg')] justify-center rounded-b-[80px] bg-cover bg-fixed  md:pt-[250px] pt-[120px] md:pb-[150px] pb-[100px] ">
          <motion.h1 className="flex md:text-9xl text-5xl text-white font-extrabold justify-center  px-5 md:-mr-20 "
            animate={{
              y: [-5, -40, -5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}><BsBookHalf className="mx-2 mt-1" /> Syllabus</motion.h1>
        </div>


        <div className="md:flex ">
          <div className=" md:pl-[100px] pl-5 md:w-1/2">
            <RevealList interval={300} delay={500} origin='left' duration={700} distance='500px' reset={true} className='flex flex-wrap items-center '>
              <h1 className="flex md:text-6xl text-4xl font-bold md:mt-[50px] mt-[50px] mb-10 px-3 py-1 border-l-[11px] rounded-lg border-l-purple-400"><BsBookHalf className="mx-2 mt-1 " /> Course Syllabus</h1>

              <p className=" md:pl-[70px] pl-5 md:pr-[100px] mb-7">The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</p>

              <Link href='https://www.piaic.org/' target="main" className="md:px-[70px] pl-5 ">
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
            <Image src='/books.png' alt="Banner2" width={600} height={600} />
          </motion.div>
        </div>

        <div>
          <div>
            <h1 className="flex justify-center md:text-7xl text-4xl font-extrabold md:mb-[50px] mb-[10px] md:mt-[100px] mt-[30px]"><FaSchool className="mx-2 pb-1" /> Latest Courses</h1>
          </div>
          <RevealList interval={300} delay={500} origin='bottom' duration={500} distance='200px' reset={true} >
            <div className="md:flex  md:mx-[130px] text-center content-center py-10 mx-[20px]">
              {coreCards.map((arg) => (

                <motion.div className=" md:w-1/3 bg-white rounded-xl my-5 mx-3 py-5 shadow-lg shadow-gray-800 active:mt-2" key={arg.id} whileHover={{ scale: 1.3 }}>
                  <h1 className="text-3xl justify-center font-bold pb-3 mb-2 flex">{arg.heading}</h1>
                  <p className="px-7 ">{arg.text}</p>
                </motion.div>
              ))}
            </div>
          </RevealList>
        </div>



        <div>

          <div>
            <h1 className="flex justify-center md:text-7xl text-4xl font-extrabold md:mb-[50px] mb-[10px] md:mt-[100px] mt-[30px]"><BsSearch className="mx-2 pb-1" /> Specialization</h1>
            <p className=" md:pl-[70px] pl-5 md:pr-[100px] mb-2 text-center">After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>
          </div>

          <div className=" md:mx-[130px] text-center content-center pt-5 pb-10 ">
            {specCard.map((arg) => (
              <div key={arg.id}>
                <h1 className="flex justify-center md:text-4xl text-2xl font-extrabold mb-7 mt-[50px]">{arg.heading1}</h1>
                <p className=" md:pl-[70px] pl-5 md:pr-[100px] mb-7 text-center">{arg.text1}</p>


                <div className="md:flex justify-between">

                  <RevealWrapper origin='left' delay={200} duration={400} distance='400px' reset={true} >
                    <motion.div className=" md:w-1/2 bg-white rounded-xl my-5 md:ml-[250px] md:mr-[40px] mx-5 py-5 shadow-lg shadow-gray-800 active:mt-2" key={arg.id}  whileHover={{ scale: 1.3 }}>
                      <h1 className="text-4xl justify-center font-bold pb-3 mb-2 flex">{arg.heading2}</h1>
                      <p className="px-7 text-lg">{arg.text2}</p>
                    </motion.div>
                  </RevealWrapper>

                  <RevealWrapper origin='left' delay={200} duration={400} distance='400px' reset={true} >
                    <motion.div className=" md:w-1/2 bg-white rounded-xl my-5 md:mr-[250px] md:ml-[40px] mx-5 py-5 shadow-lg shadow-gray-800 active:mt-2" key={arg.id} whileHover={{ scale: 1.3 }}>
                      <h1 className="text-4xl justify-center font-bold pb-3 mb-2 flex">{arg.heading3}</h1>
                      <p className="px-7 text-lg">{arg.text3}</p>
                    </motion.div>
                  </RevealWrapper>
                </div>
              </div>

            ))}
          </div>

        </div>


      </div >
      <Instructors />
    </>
  )
}
