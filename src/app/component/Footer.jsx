'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { FaPhone,FaEnvelope } from "react-icons/fa";
import Copyright from "./Copyright";
import { fadeIn } from "../../../variants";


import Link from "next/link";
const Footer = () => {
  return (
    <footer  className=" pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto">
         {/* gird  */}
         <motion.div
           variants={fadeIn('up',0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.6}}
          className=" flex flex-col lg:flex-row lg:justify-between
          gap-x-5 gap-y-14">
          <div className=" flex flex-col flex-1 gap-y-8">
            <Link href={'home'} smooth={true} spy={true}
             className=" cursor-pointer">
            <Image src={'/icons/logo.svg'}
            width={200} height={200} alt=""/>
            </Link>
            {/* text  */}
            <div className=" text-secondary">Lorem ipsum dolor sit amet.</div>
            {/* phone and email  */}
            <div className=" flex flex-col gap-y-4 font-semibold">
              <div className=" flex items-center gap-x-[10px]">
                <FaPhone />
                <div className=" font-bold">(888) 846-484-4957</div>
              </div>
              <div className=" flex items-center gap-x-[10px]" >
                <FaEnvelope />
                <div className=" font-medium">mirajhowlader9999@gmail.com</div>
              </div>
              
            </div>

          </div>
          <div className=" flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3">Company</h3>
              <ul className=" flex flex-col gap-y-4 font-semibold">
                <li><a href="">New York</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">How we work</a></li>
              </ul>
            </div>
          </div>


          <div className=" flex-1">
            <h3 className=" h3 font-bold mb-8">Working Hours</h3>
            <div className=" flex flex-col gap-y-4">
              <div className=" flex gap-x-2">
                <div className=" text-secondary">Mon-Fri:</div>
                <div className=" font-semibold">09:00AM -  09:00PM</div>
              </div>
              <div className=" flex gap-x-2">
                <div className=" text-secondary">Sat</div>
                <div className=" font-semibold">09:00AM -  07:30PM</div>
              </div>
              <div className=" flex gap-x-2">
                <div className=" text-secondary">Sun:</div>
                <div className=" font-semibold">Clossed</div>
              </div>
            </div>
          </div>


          <div className=" flex-1">
            <h3 className=" h3 font-bold mb-8">Newsletter</h3>
            <div className=" text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            {/* form  */}
            <form className=" flex gap-x-2 h-14">
              <input
              className=" outline-none bg-white h-full border
               rounded-lg focus:border-accent mt-4"
               type="text" placeholder="Your Email" />
              <button type="submit"
               className=" mt-4 btn btn-sm btn-accent w-24">Submit</button>
            </form>
          </div>
         
         </motion.div>
      </div>
      <Copyright />
     
    </footer>
  )
}

export default Footer
