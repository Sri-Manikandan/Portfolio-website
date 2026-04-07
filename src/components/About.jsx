import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import { FaTrophy, FaCode, FaBriefcase } from 'react-icons/fa'

const stats = [
  { icon: FaCode, value: '8+', label: 'AI/ML Projects' },
  { icon: FaTrophy, value: '15+', label: 'Hackathons' },
  { icon: FaBriefcase, value: '3', label: 'Companies' },
]

const About = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-teal">01 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-12">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {ABOUT_TEXT}
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Python', 'Langchain', 'FastAPI', 'Next.js', 'Spring Boot', 'Docker', 'GenAI'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-surface-border text-text-secondary bg-surface-light hover:border-accent-teal/40 hover:text-accent-teal transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glow-card p-6 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="text-accent-teal" size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-3xl">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
