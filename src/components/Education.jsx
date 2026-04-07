import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-teal">05 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-16">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glow-card p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-accent-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-text-secondary text-sm mb-1">{edu.degree}</p>
                  {edu.grade && (
                    <p className="text-accent-teal text-sm font-medium mb-2">{edu.grade}</p>
                  )}
                  <span className="font-mono text-xs text-text-muted bg-surface-mid px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
