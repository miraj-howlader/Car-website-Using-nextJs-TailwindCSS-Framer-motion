'use client'
import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"
import { MdHandshake,MdTrendingUp,MdKey } from "react-icons/md";
import Image from "next/image";

const Why = () => {
  return (
    <section className=' section flex items-center ' id='why'>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.6}}
         className="h2 text-center">Unmatched execllence and customer satisfaction</motion.h2>
        
        <motion.p
          variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.6}}
         className=" max-w-[680px] text-center mx-auto mb-2">
          Our decication to providing execption service sets up
          aprt from the competition. From the moment you engage
          with us, we strive to exceed your expectation in every
          intersection.
        </motion.p>
        {/* car image  */}
        <motion.div
          variants={fadeIn('up',0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.6}}
         className=" hidden md:flex justify-center mb-6 xl:mb-2">
          <Image 
          src={'/images/why/car.svg'}
          width={1060}
          height={420}
          alt=""
          />
        </motion.div>
        {/* gird items  */}
        <motion.div
         variants={fadeIn('up',0.0)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false, amount:0.4}}
         className=" flex flex-wrap justify-center xl:grid
         xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          <div className=" flex flex-col items-center text-center
           max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className=" text-[38px] text-accent mb-4"/>
            <h3 className="h3">Rent simply and quickly</h3>
            <p className=" hidden xl:flex">
              We prioritize your need and we go above and beyond to 
              ensure your experience with us is nothing short of 
              outStanding.
            </p>
          </div>

          <div className=" flex flex-col items-center text-center
           max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className=" text-[38px] text-accent mb-4"/>
            <h3 className="h3">Modern & well maintained vehicles</h3>
            <p className=" hidden xl:flex">
              We prioritize your need and we go above and beyond to 
              ensure your experience with us is nothing short of 
              outStanding.
            </p>
          </div>

          <div className=" flex flex-col items-center text-center
           max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className=" text-[38px] text-accent mb-4"/>
            <h3 className="h3">Prompt and flexible services</h3>
            <p className=" hidden xl:flex">
              We prioritize your need and we go above and beyond to 
              ensure your experience with us is nothing short of 
              outStanding.
            </p>
          </div>

        </motion.div>
      </div>
      
    </section>
  )
}

export default Why
