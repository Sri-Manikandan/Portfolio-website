import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/photo2.jpg'
import { motion } from "framer-motion"

const container =(delay) =>({
    hidden: { x:-100, opacity: 0 },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        },
    }

});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 pl-20">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Sri Manikandan</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl tracking-tighter font-light'>{HERO_CONTENT}</motion.p>
                    <motion.a variants={container(1.2)} initial="hidden" animate="visible" whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='border-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent rounded-full px-8 py-4 mt-2' href='https://www.linkedin.com/in/sri-manikandan/'>Hire Me</motion.a>
                </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center items-center">
                    <motion.img initial={{x:100 , opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:1.2}} src={profilePic} className='w-3/4 h-1/2 rounded-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero