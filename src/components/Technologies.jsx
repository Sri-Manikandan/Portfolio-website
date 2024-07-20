import React from 'react'
import { RiOpenaiFill, RiReactjsLine } from 'react-icons/ri'
import { SiDjango, SiFastapi, SiPython, SiTailwindcss } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaAws, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import { motion } from 'framer-motion'

const iconVariants = (duration) =>({
    initial: {y:-5},
    animate: {
        y: [5,-5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
  return (
    <div className='pb-24 flex flex-col items-center justify-center'>
        <motion.h1 initial={{y:-50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}} className='my-20 text-center text-4xl'>My Skills</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-3/4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className='text-7xl text-green-800'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className='text-7xl text-blue-900'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className='text-7xl text-neutral-100'/>
            </motion.div>
            <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFastapi className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiOpenaiFill className='text-7xl text-neutral-100'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" whileHover={{scale:1.1}} className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className='text-7xl text-neutral-100'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies