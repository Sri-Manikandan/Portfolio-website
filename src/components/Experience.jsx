import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-teal">02 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-16">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12 timeline-line">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-12 last:mb-0 relative"
            >
              <div className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full bg-surface border-2 border-accent-teal z-10" />

              <div className="glow-card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-xl text-text-primary">{exp.role}</h3>
                    {exp.website ? (
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-accent-teal font-medium hover:underline">{exp.company}</a>
                    ) : (
                      <p className="text-accent-teal font-medium">{exp.company}</p>
                    )}
                  </div>
                  <span className="font-mono text-xs text-text-muted bg-surface-mid px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                {exp.location && (
                  <p className="text-sm text-text-muted mb-2">{exp.location}</p>
                )}
                <p className="text-text-secondary leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded border border-surface-border text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
