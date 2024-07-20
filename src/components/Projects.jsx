import React from 'react'
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-50,opacity:0}} transition={{duration:0.7}} className='mb-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-20 flex flex-wrap lg:justify-center lg:gap-20'>
                    <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{duration:0.7}} className='w-full lg:w-1/4 flex justify-center items-center'>
                        <img src={project.image} width={300} height={300} alt={project.title}  className='mb-6 rounded-md'/>
                    </motion.div>
                    <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{duration:0.7}} className="w-full max-w-xl lgw-3/4 flex flex-wrap gap-4">
                        <h6 className='mb-2 font-semibold text-2xl w-full text-center lg:w-screen lg:text-left'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,index) => (
                            <span key={index} className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 rounded'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects