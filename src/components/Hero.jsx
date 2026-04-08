import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowDown } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block font-mono text-sm text-accent-teal border border-accent-teal/30 rounded-full px-4 py-1.5 bg-accent-teal/5">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
        >
          Sri Manikandan <span className="text-accent-teal">R</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-xl md:text-2xl text-text-secondary font-medium mb-6"
        >
          SDE | Full Stack Developer | AI/ML Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed mb-10"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1G46lfxcWWi9sRgzuN-0mfd651yje56SD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-accent-teal text-surface font-display font-semibold px-7 py-3.5 rounded-full hover:bg-accent-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
          >
            <HiOutlineDocumentText size={18} />
            Resume
          </a>
          <a
            href="https://github.com/Sri-Manikandan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border border-surface-border text-text-primary font-display font-semibold px-7 py-3.5 rounded-full hover:border-accent-teal/50 hover:text-accent-teal transition-all duration-300"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-text-muted hover:text-accent-teal transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
