import React, { useEffect } from 'react'
import logo from "../assets/SM-logo.png"
import { FaLinkedin,FaGithub,FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Collapse } from 'flowbite';
import { motion } from 'framer-motion';
import { Link} from 'react-scroll';

const Navbar = () => {
	useEffect(() => {
	  const targetEl = document.getElementById('targetEl');
	  const triggerEl = document.getElementById('triggerEl');
  
	  const options = {
		onCollapse: () => {
		  console.log('element has been collapsed');
		},
		onExpand: () => {
		  console.log('element has been expanded');
		},
		onToggle: () => {
		  console.log('element has been toggled');
		},
	  };
  
	  const instanceOptions = {
		id: 'targetEl',
		override: true,
	  };
  
	  const collapse = new Collapse(targetEl, triggerEl, options, instanceOptions);
	  collapse.toggle();
	}, []);
  
	return (
		<div className='mb-10'>
			<nav className='flex items-center justify-between py-3'>
				<div className='flex flex-shrink-0 items-center'>
					<img className='mx-2 w-16 h-16' src={logo} alt='logo'/>
				</div>
				<div className='m-8 flex items-center justify-center gap-5 text-3xl'>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/sri-manikandan/'><FaLinkedin/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://github.com/Sri-Manikandan'><FaGithub/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.instagram.com/_manish._7/'><FaInstagram/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://x.com/Manish_2750'><FaSquareXTwitter/></motion.a>
					<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href='https://www.facebook.com/SriManikandanR'><FaFacebook/></motion.a>
				</div>
				<button type="button" id="triggerEl" aria-expanded="false" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>
			</nav>
			<div className="hidden w-full" id="targetEl">
				<ul className="flex flex-col font-medium rounded-lg bg-transparent text-2xl text-transparent justify-center items-center p-2 gap-1 text-center">
					<li>
					<Link to="home" smooth={true} duration={500}>
						<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="/" className="block py-2 px-3 w-full rounded bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:text-white">Home</motion.a>
					</Link>
					</li>
					<li>
					<Link to="about" smooth={true} duration={500}>
						<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="/about" className="block py-2 px-3 w-full rounded bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:text-white">About me</motion.a>
					</Link>
					</li>
					<li>
					<Link to="skills" smooth={true} duration={500}>
						<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="/skills" className="block py-2 px-3 w-full rounded bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:text-white">My Skills</motion.a>
					</Link>
					</li>
					<li>
					<Link to="projects" smooth={true} duration={500}>
						<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="/projects" className="block py-2 px-3 w-full rounded bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:text-white">Projects</motion.a>
					</Link>
					</li>
					<li>
					<Link to="contact" smooth={true} duration={500}>
						<motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="/contact" className="block py-2 px-3 w-full rounded bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text hover:text-white">Contact Me</motion.a>
					</Link>
					</li>
				</ul>
			</div>
		</div>
	);
  };
  
  export default Navbar;