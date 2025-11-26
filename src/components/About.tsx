'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [logoError, setLogoError] = useState(false)
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 dark:bg-gray-900 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Trinidad and Tobago Police Service Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 w-full max-w-xs flex justify-center md:justify-start"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-4 flex items-center justify-center border-2 border-red-500/20 dark:border-red-400/30">
                {!logoError ? (
                  <Image
                    src="/images/ttps-logo.png"
                    alt="Trinidad and Tobago Police Service Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <div className="text-center p-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">TTPS Logo</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Add logo image to<br />
                      <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1 inline-block">
                        /public/images/ttps-logo.png
                      </code>
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                      (or .jpg, .svg, .webp)
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* About Image - Optional: Add your image to public/images/about.jpg */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 w-full max-w-sm"
            >
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/johnnylee-red-white-black.jpg"
                  alt="About Johnny-Lee Treavajo"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="dark:bg-gray-800 bg-white rounded-lg p-6 sm:p-8 shadow-xl w-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 dark:text-white text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Who I Am
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base dark:text-gray-300 text-gray-700 leading-relaxed mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                I&apos;m a passionate full-stack developer with a love for creating
                innovative web solutions. With expertise in modern JavaScript
                frameworks and cloud technologies, I bring ideas to life through
                clean, efficient code.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base dark:text-gray-300 text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            {[
              { title: 'Education', color: 'text-blue-400', delay: 0.2 },
              { title: 'Experience', color: 'text-purple-400', delay: 0.3 },
              { title: 'Location', color: 'text-pink-400', delay: 0.4 },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay, ease: "easeOut" }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="dark:bg-gray-800 bg-white rounded-lg p-4 sm:p-6"
              >
                <h4 className={`text-lg sm:text-xl font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700">
                  {item.title === 'Education' && 'Pitch-Rise'}
                  {item.title === 'Experience' && 'Your Experience Details'}
                  {item.title === 'Location' && 'Trinidad and Tobago'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

