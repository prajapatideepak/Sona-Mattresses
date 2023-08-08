import Image from "next/image";
import myLogo from "../../public/images/map.png"
import Logo from "../../public/images/white-logo.png"
import Link from 'next/link'
import { BiChevronRight } from "react-icons/bi"
import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { MdLocationPin } from "react-icons/md"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"


export function Footer() {
  return (
    <>
      <div className='py-10 bg-[#181818] h-[450px] xl:h-[500px] flex justify-center items-center xl:px-40 relative'>
        <Image src={myLogo} alt="fess manager logo" className='w-full h-full ' />
        <div className="h-full w-full bg-black/40 absolute ">
        </div>
        <div className="grid grid-rows-1 lg:w-[500px] xl:w-full xl:grid-cols-4 gap-20 absolute top-12 sm:top-20 xl:px-20 ">
          <div className="space-y-6 xl:px-12">
            <div className='w-full flex justify-start items-center'>
              <div className="w-52">
                <Image src={Logo} alt="fess manager logo" className='' />
              </div>
            </div>
            <p className="text-gray-400 text-center lg:text-start">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
            <div className="flex items-center justify-center lg:items-start w-full space-x-5 xl:hidden">
              <div>
                <FiPhoneCall className="text-[#b19777] font-bold text-2xl" />
              </div>
              <h1 className="text-white text-2xl font-semibold lg:text-start">
                +91 8401527048
              </h1>
            </div>
            <div className="flex items-center justify-start space-x-5 pt-5">
              <a href="https://www.instagram.com/sonamattresses/">
                <AiOutlineInstagram className="text-2xl cursor-pointer text-[#b19777] hover:text-white" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094529056554">
                <AiOutlineFacebook className="text-2xl cursor-pointer text-[#b19777] hover:text-white" />
              </a>
            </div>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Explore</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  AboutUs
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  ContactUs
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Product
                </h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Mattress</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Pocket Spring Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  PU Foam Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  PU & Super Soft Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Bonded Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Bonde Latex Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                 HR Soft Memory Foam
                </h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Contact With Us</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-start space-x-3 cursor-pointer hover:text-[#b19777] duration-300 text-white">
                <div>
                  <MdLocationPin className="text-[#b19777] font-bold text-2xl" />
                </div>
                <p>
                  Shade No.1 , Survey No.1303, Village-Undrel , Ta. Daskoroi, Ahmedabad - 382443 , Gujarat , India..
                </p>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#b19777] duration-300 text-white">
                <div>
                  <FiPhoneCall className="text-[#b19777] font-bold text-xl" />
                </div>
                <h1>
                  +91 8401527048
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#b19777] duration-300 text-white">
                <div>
                  <CgMail className="text-[#b19777] font-bold text-2xl" />
                </div>
                <h1>
                  sonamattresses@gmail.com
                </h1>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
