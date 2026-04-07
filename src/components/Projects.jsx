import { useRef } from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card p-6 md:p-8 flex flex-col ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center">
          <span className="font-mono text-sm text-accent-teal font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-teal transition-colors"
        >
          <FaGithub size={20} />
        </a>
      </div>

      <h3 className="font-display font-bold text-xl mb-3 text-text-primary group-hover:text-accent-teal transition-colors">
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2.5 py-1 rounded border border-surface-border text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-accent-teal">03 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
            Projects
          </h2>
          <p className="text-text-secondary max-w-xl">
            A selection of AI/ML projects I've built, from multi-agent research systems to production-grade AI pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sri-Manikandan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-teal transition-colors font-mono text-sm"
          >
            View all repositories <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
