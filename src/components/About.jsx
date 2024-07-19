import React from 'react'
import aboutImg from '../assets/manish-1.jpg'
import { ABOUT_TEXT } from '../constants'
import hackimg from '../assets/Manish_Photo_Bomb-portfolio.png'

const About = () => {
  return (
    <div className="pb-4">
      <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center justify-center">
            <img className='rounded-2xl w-1/2 h-1/2' src={aboutImg} />
            <h2 className='font-medium mt-40 text-3xl px-12'>Engaged in <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'>15+ Hackathons</span> Across Diverse Locales, Blending Online And Offline Formats</h2>
            <p className='max-w-xl pb-6 pt-4'>I'm seasoned in hackathons, having participated in over 15 events, both online and offline, across various states. With each competition, I've honed my problem-solving skills and fostered innovation, consistently delivering impactful solutions under pressure.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center items-center lg:justify-start flex-col">
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            <img className='rounded-2xl mt-40 w-3/2 h-3/4' src={hackimg}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About