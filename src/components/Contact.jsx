import React from 'react'
import { CONTACT } from '../constants'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='m-8 items-center justify-center gap-5 text-3xl flex lg:hidden'>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/sri-manikandan/'><FaLinkedin/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://github.com/Sri-Manikandan'><FaGithub/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.instagram.com/_manish._7/'><FaInstagram/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://x.com/Manish_2750'><FaSquareXTwitter/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.facebook.com/SriManikandanR'><FaFacebook/></motion.a>
				</div>
        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact