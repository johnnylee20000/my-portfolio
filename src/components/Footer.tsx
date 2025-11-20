'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/johnnylee20000',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:johnnylee20000@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-pink-400',
    },
  ]

  return (
    <footer className="dark:bg-gray-900 bg-gray-50 border-t dark:border-gray-800 border-gray-200 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center items-center space-x-4 sm:space-x-6 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`dark:text-gray-500 text-gray-600 ${social.color} transition-colors duration-300`}
              >
                <IconComponent size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Copyright and Built With */}
        <div className="text-center">
          <motion.p
            className="text-sm sm:text-base dark:text-gray-400 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Johnny-Lee Treavajo. All rights reserved.
          </motion.p>
          <motion.p
            className="dark:text-gray-500 text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Built with Next.js, TypeScript, and Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

