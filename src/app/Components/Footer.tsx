import { BsFillHouseFill,BsBookHalf ,BsFillQuestionOctagonFill, BsSearch ,BsLink45Deg ,BsFillTelephoneFill , BsYoutube ,BsFacebook , BsTwitter ,BsLinkedin , BsGithub, BsBook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import { AiFillCopyrightCircle } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <>
            <div className="md:flex bg-gray-300 justify-between pt-[70px] px-[40px] w-full  border-x-[10px] border-x-blue-400">
                <div className="grid  ml-5  md:w-1/4 md:pr-10">
                    <h1 className=" flex text-3xl font-extrabold mb-5 border-l-[8px] rounded-lg border-l-purple-400 pl-2 py-1 "><BsFillQuestionOctagonFill className="mx-2"/> About Us </h1>
                    <Image src='/panaverse-logo1.webp' alt="Panaverse" width={120} height={140} />
                    <p className="text-md pt-5 pb-10 ">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
                </div>
                <div className=" md:w-1/4 md:pl-10 py-5 md:py-0 ">
                    <h1 className="flex text-3xl font-extrabold border-l-[8px] rounded-lg border-l-purple-400 pl-2 py-1 mb-8"><BsSearch className="mx-2 mt-1" /> Explore</h1>
                    <div className="flex flex-col pl-5">
                        <Link href='/' className="`text-md  font-semibold my-3 flex hover:text-lg  active:mt-2" ><BsFillHouseFill className="mx-2 mt-1 " /> Home</Link>
                        <Link href='/syllabus' className="text-md my-3  font-semibold flex hover:text-lg active:mt-2"><BsBookHalf className="mx-2 mt-1" /> Syllabus</Link>
                        <Link href='/about' className="text-md my-3  font-semibold flex hover:text-lg active:mt-2"><BsFillQuestionOctagonFill className="mx-2 mt-1" /> About</Link>
                        <Link href='/contact' className="text-mt my-3 font-semibold flex hover:text-lg active:mt-2"><BsFillTelephoneFill className="mx-2 mt-1" /> Contact</Link>
                    </div>
                </div>
                <div className=" md:w-1/4 md:pl-10 py-5 md:py-0">
                    <h1 className="text-3xl font-extrabold -mr-10 border-l-[8px] rounded-lg border-l-purple-400 pl-2 py-1 mb-8 flex"> <BsLink45Deg className="mx-2 mt-1"  /> Social Media</h1>
                    <div className="flex flex-col pl-5">
                        <Link href='https://www.youtube.com/@panaverse' className="text-md hover:text-lg font-semibold my-3 flex active:mt-2" target="main" ><BsYoutube className="mx-2 mt-1" /> Youtube</Link>
                        <Link href='https://web.facebook.com/groups/piaic/?_rdc=1&_rdr' className="text-md my-3 hover:text-lg font-semibold flex  active:mt-2" target="main" ><BsFacebook className="mx-2 mt-1"/> Facebook</Link>
                        <Link href='https://twitter.com/Panaverse_edu' className="text-md my-3 hover:text-lg font-semibold flex  active:mt-2" target="main" ><BsTwitter className="mx-2 mt-1" /> Twitter</Link>
                        <Link href='https://www.linkedin.com/company/panaverse/' className="text-mt my-3 hover:text-lg font-semibold flex  active:mt-2" target="main" ><BsLinkedin className="mx-2 mt-1"/> Linkedin</Link>
                        <Link href='https://github.com/panaverse' className="text-mt my-3 hover:text-lg font-semibold flex  active:mt-2" target="main" ><BsGithub className="mx-2 mt-1" /> Github</Link>
                    </div>
                </div>
                <div className=" md:w-1/4 md:pl-10 py-5 md:py-0">
                    <h1 className="flex text-3xl font-extrabold msb-5 border-l-[8px] rounded-lg border-l-purple-400 pl-2 py-1 mb-8"><BsFillTelephoneFill className="mx-2 mt-1"  /> Contacts</h1>
                    <div className="flex flex-col pl-5">
                        <p className="text-md  font-semibold my-3 flex" ><BsFillTelephoneFill className="mx-2 mt-1"  />  +92 308 2220203</p>
                        <p className="text-md my-3  font-semibold flex"><SiGmail className="mx-2 mt-1"/>  absdef@gmail.com</p>
                        <p className="text-md my-3  font-semibold flex"><BiCurrentLocation className="mx-2 mt-1" />  Karachi , Sindh , Pakistan</p>
                    </div>
                </div>

            </div>
            <div>
                <h1 className="flex justify-center py-2">Rights reserved <AiFillCopyrightCircle className="mx-2 mt-1" /> | Muhammad Jalil Umar</h1>
            </div>
        </>
    )
}
