import React from 'react'
import { RiOpenaiFill, RiReactjsLine } from 'react-icons/ri'
import { SiDjango, SiFastapi, SiPython, SiTailwindcss } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaAws, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'

const Technologies = () => {
  return (
    <div className='pb-24 flex flex-col items-center justify-center'>
        <h1 className='my-20 text-center text-4xl'>My Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-3/4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className='text-7xl text-green-800'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className='text-7xl text-blue-900'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className='text-7xl text-blue-900'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className='text-7xl text-neutral-100'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFastapi className='text-7xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className='text-7xl text-sky-700'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className='text-7xl text-red-700'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiOpenaiFill className='text-7xl text-neutral-100'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className='text-7xl text-neutral-100'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies