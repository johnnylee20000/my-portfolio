'use client'

import { motion } from 'framer-motion'

export default function About() {
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
          >
            <motion.div
              className="dark:bg-gray-800 bg-white rounded-lg p-6 sm:p-8 shadow-xl"
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
                I'm a passionate full-stack developer with a love for creating
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
                When I'm not coding, you can find me exploring new technologies,
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
                  {item.title === 'Education' && 'Your Degree / Institution'}
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

