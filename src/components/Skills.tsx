'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
  { name: 'Node.js', level: 82, color: 'from-green-500 to-green-700' },
  { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
  { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 dark:bg-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="dark:bg-gray-800 bg-white rounded-lg p-4 sm:p-6"
            >
              <motion.div
                className="flex justify-between mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                <span className="text-base sm:text-lg font-semibold dark:text-white text-gray-900">{skill.name}</span>
                <motion.span
                  className="dark:text-gray-400 text-gray-600"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
              <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1 + 0.4,
                    ease: "easeOut"
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

