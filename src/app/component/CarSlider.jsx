'use client'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Image from 'next/image';
import { FaStar,FaStarHalfAlt, FaRegStar  } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const cars = [
  {
    type:'Hatchback',
    name:"Ford Focus",
    price:67,
    stars:3.4,
    image:'images/carSlider/car01.svg',
    info:[
      {
        icons:'icons/carSlider/gearshift.svg',
        text:'Manual',
      },
      {
        icons:'icons/carSlider/seat.svg',
        text:'5 Seats',
      },
      {
        icons:'icons/carSlider/gas.svg',
        text:'Gas',
      },
      {
        icons:'icons/carSlider/engine.svg',
        text:'1600 HP',
      },
      {
        icons:'icons/carSlider/wheel.svg',
        text:'Front',
      },
    ]

  },
  {
    type:'Sedan',
    name:"Toyota Corolla",
    price:57,
    stars:2.4,
    image:'images/carSlider/car02.svg',
    info:[
      {
        icons:'icons/carSlider/gearshift.svg',
        text:'Manual',
      },
      {
        icons:'icons/carSlider/seat.svg',
        text:'5 Seats',
      },
      {
        icons:'icons/carSlider/gas.svg',
        text:'Gas',
      },
      {
        icons:'icons/carSlider/engine.svg',
        text:'1600 HP',
      },
      {
        icons:'icons/carSlider/wheel.svg',
        text:'Front',
      },
    ]

  },
  {
    type:'SUV',
    name:"Honda CR-V",
    price:57,
    stars:5.4,
    image:'images/carSlider/car03.svg',
    info:[
      {
        icons:'icons/carSlider/gearshift.svg',
        text:'Automatic',
      },
      {
        icons:'icons/carSlider/seat.svg',
        text:'5 Seats',
      },
      {
        icons:'icons/carSlider/gas.svg',
        text:'Gas',
      },
      {
        icons:'icons/carSlider/engine.svg',
        text:'1600 HP',
      },
      {
        icons:'icons/carSlider/wheel.svg',
        text:'Front',
      },
    ]

  },
  {
    type:'Convertible',
    name:"Mazada MX-5",
    price:56,
    stars:5.3,
    image:'images/carSlider/car02.svg',
    info:[
      {
        icons:'icons/carSlider/gearshift.svg',
        text:'Automatic',
      },
      {
        icons:'icons/carSlider/seat.svg',
        text:'5 Seats',
      },
      {
        icons:'icons/carSlider/gas.svg',
        text:'Gas',
      },
      {
        icons:'icons/carSlider/engine.svg',
        text:'1600 HP',
      },
      {
        icons:'icons/carSlider/wheel.svg',
        text:'Front',
      },
    ]

  }
]

const CarSlider = () => {
  return (
    <motion.div
    variants={fadeIn('up', 0.8)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.2}}
     className=' container mx-auto'>
      <Swiper breakpoints={{
        320: {slidesPerView:1, spaceBetween: 15},
        640: {slidesPerView:2, spaceBetween: 32},
        1260: {slidesPerView:3, spaceBetween: 32},
    }}>
      {cars.map((car,index)=>{
        return <SwiperSlide key={index}>
          <div className=' max-w-[385px] mx-auto sm:mx-0
           bg-gray-100 '>
            <Image src={car.image} width={380} height={284}
            alt=''/>
            <div className=' flex justify-between'>
              <div>
                <div className=' text-[13px] text-secondary
                 uppercase'>{car.type}</div>
                <h3 className=' text-lg uppercase font-bold'>{car.name}</h3>
                <h3 className=' mb-10 text-accent font-semibold
                 uppercase'>{car.price}/day</h3>
              </div>
              {/* stars  */}
              <div className=' flex gap-x-3 xl:gap-x-4
               w-max mb-10'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            {/* car info  */}
            <div className=' flex gap-x-3 xl:gap-x-4
             w-max mb-10'>
             {
              car.info.map((item,index)=>{
                return <div key={index}
                className=' flex flex-col items-center'>
                  <div className=' bg-primary w-12 h-12
                   rounded-full mb-2 flex justify-center items-center'>
                    <Image src={item.icons}
                    width={24}
                    height={24}
                    alt=''
                    />
                  </div>
                  <div className=' text-[12px] uppercase'>{item.text}</div>
                </div>
              })
             }
            </div>
            <button className=' btn btn-accent btn-lg'>See details</button>
              
          </div>
        </SwiperSlide>
      })}
      </Swiper>
      
    </motion.div>
  )
}

export default CarSlider
