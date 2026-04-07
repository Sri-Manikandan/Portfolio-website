import { CONTACT, SOCIAL_LINKS } from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const socials = [
  { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
]

const Contact = () => {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent-teal">06 /</span>
          <h2 className="section-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Interested in working together? Let's connect and build something great.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glow-card p-8 md:p-12 text-center">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-block font-display font-bold text-lg sm:text-2xl md:text-3xl gradient-text hover:opacity-80 transition-opacity mb-8 break-all sm:break-normal"
            >
              {CONTACT.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-text-secondary text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="text-accent-teal" size={14} />
                <span>{CONTACT.phoneNo}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent-teal" size={14} />
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-surface-mid border border-surface-border flex items-center justify-center text-text-secondary hover:text-accent-teal hover:border-accent-teal/40 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 pb-8"
        >
          <p className="font-mono text-xs text-text-muted">
            Designed & Built by Sri Manikandan R
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
