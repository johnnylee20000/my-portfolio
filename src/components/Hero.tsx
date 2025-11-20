'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4 sm:px-6 relative overflow-hidden dark:bg-gray-900 bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30"></div>
      <div className="absolute inset-0 dark:bg-gradient-to-tr dark:from-transparent dark:via-blue-500/10 dark:to-purple-500/10 bg-gradient-to-tr from-transparent via-blue-200/20 to-purple-200/20"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.3),transparent_50%)]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 dark:text-white text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block sm:inline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Johnny-Lee Treavajo
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl dark:text-gray-300 text-gray-700 mb-4 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Police Officer
          </motion.p>
          <motion.p
            className="text-base sm:text-lg dark:text-gray-400 text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I love all aspects of creativity. As a dedicated police officer, I bring innovative thinking and creative problem-solving to both my professional service and personal projects. Passionate about exploring new technologies and expressing creativity through various mediums.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { icon: Github, href: 'https://github.com/johnnylee20000', delay: 0.8 },
              { icon: Linkedin, href: 'https://linkedin.com', delay: 0.85 },
              { icon: Mail, href: 'mailto:johnnylee20000@gmail.com', delay: 0.9 },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: item.delay, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 dark:bg-gray-800 bg-gray-100 rounded-full dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <IconComponent size={20} className="sm:w-6 sm:h-6 dark:text-gray-300 text-gray-700" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={32} className="dark:text-gray-400 text-gray-600" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

