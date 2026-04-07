import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '../constants'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-surface-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl tracking-tight hover:text-accent-teal transition-colors">
          SM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-text-secondary hover:text-accent-teal transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-teal transition-colors">
            <FaGithub size={18} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface backdrop-blur-xl border-b border-surface-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-medium text-text-secondary hover:text-accent-teal transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-surface-border">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-teal transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-teal transition-colors">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
