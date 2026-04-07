import { SKILLS, CERTIFICATIONS, AWARDS } from '../constants'
import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaLightbulb, FaCertificate } from 'react-icons/fa'

const awardIcons = {
  trophy: FaTrophy,
  award: FaAward,
  bulb: FaLightbulb,
}

const categoryColors = {
  'AI & ML': 'text-accent-teal border-accent-teal/30 bg-accent-teal/5',
  'Frontend': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  'Backend': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  'DevOps & DB': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
}

const barColors = {
  'AI & ML': 'bg-accent-teal',
  'Frontend': 'bg-blue-400',
  'Backend': 'bg-amber-400',
  'DevOps & DB': 'bg-purple-400',
}

const Skills = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-teal">04 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-16">
            Skills & Recognition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {Object.entries(SKILLS).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glow-card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`font-mono text-xs px-3 py-1 rounded-full border ${categoryColors[category]}`}>
                  {category}
                </span>
              </div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-text-primary font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-mid rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full ${barColors[category]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="glow-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                <FaTrophy className="text-accent-amber" size={18} />
              </div>
              <h3 className="font-display font-bold text-lg">Awards</h3>
            </div>
            <div className="space-y-4">
              {AWARDS.map((award) => {
                const Icon = awardIcons[award.icon] || FaAward
                return (
                  <div key={award.title} className="flex items-center gap-3">
                    <Icon className="text-accent-amber flex-shrink-0" size={14} />
                    <span className="text-text-secondary text-sm">{award.title}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center">
                <FaCertificate className="text-accent-teal" size={18} />
              </div>
              <h3 className="font-display font-bold text-lg">Certifications</h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-teal flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
