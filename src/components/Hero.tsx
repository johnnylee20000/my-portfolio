'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Tropical Gradient Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-teal-900/30 dark:via-emerald-900/20 dark:to-cyan-900/30 bg-gradient-to-br from-teal-100/40 via-emerald-100/30 to-cyan-100/40"></div>
      <div className="absolute inset-0 dark:bg-gradient-to-tr dark:from-transparent dark:via-teal-500/15 dark:to-emerald-500/15 bg-gradient-to-tr from-transparent via-teal-200/25 to-emerald-200/25"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.3),transparent_50%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.2),transparent_50%)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
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
            Hi, I&apos;m{' '}
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

