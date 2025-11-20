'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, CheckSquare, Cloud } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce solution featuring seamless payment processing with Stripe integration, comprehensive admin dashboard for inventory management, user authentication, and real-time order tracking. Built with performance and scalability in mind.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/johnnylee20000',
    demo: 'https://example.com',
    // Use imagePath for actual images, or image for gradient backgrounds
    imagePath: '/images/project1.jpg', // Optional: Add your project image here
    image: 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600', // Fallback gradient
    icon: ShoppingCart,
    features: ['Payment Integration', 'Admin Dashboard', 'User Authentication', 'Order Tracking'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time synchronization, team collaboration features, drag-and-drop functionality, and comprehensive project organization tools. Enables teams to stay productive and organized.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express'],
    github: 'https://github.com/johnnylee20000',
    demo: 'https://example.com',
    imagePath: '/images/project2.jpg', // Optional: Add your project image here
    image: 'bg-gradient-to-br from-green-500 via-teal-600 to-cyan-600', // Fallback gradient
    icon: CheckSquare,
    features: ['Real-time Updates', 'Team Collaboration', 'Drag & Drop', 'Project Organization'],
  },
  {
    title: 'Weather Dashboard',
    description: 'An elegant weather dashboard providing detailed forecasts, interactive maps, location-based weather data, and beautiful visualizations. Features include 7-day forecasts, hourly updates, and weather alerts for multiple locations.',
    tech: ['Next.js', 'Tailwind CSS', 'Weather API', 'Chart.js', 'TypeScript'],
    github: 'https://github.com/johnnylee20000',
    demo: 'https://example.com',
    imagePath: '/images/project3.jpg', // Optional: Add your project image here
    image: 'bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600', // Fallback gradient
    icon: Cloud,
    features: ['7-Day Forecast', 'Interactive Maps', 'Location Search', 'Weather Alerts'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 dark:bg-gray-900 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="dark:bg-gray-800 bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image/Header */}
                <motion.div 
                  className={`h-48 sm:h-56 ${!project.imagePath ? project.image : ''} relative overflow-hidden`}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                >
                  {/* Use actual image if imagePath is provided, otherwise use gradient */}
                  {project.imagePath ? (
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <IconComponent size={60} className="sm:w-20 sm:h-20 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                  </motion.div>
                  {/* Decorative pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                  />
                </motion.div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="dark:text-gray-300 text-gray-700 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold dark:text-gray-400 text-gray-600 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.6 + idx * 0.1, duration: 0.3 }}
                          className="text-xs dark:text-gray-400 text-gray-600 flex items-center"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.6 + idx * 0.1, duration: 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.7, duration: 0.4 }}
                  >
                    {project.tech.map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.8 + techIdx * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 dark:bg-gray-700/50 bg-gray-100 rounded-full text-xs dark:text-gray-300 text-gray-700 border dark:border-gray-600/50 border-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t dark:border-gray-700 border-gray-200">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 sm:space-x-2 dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors group/link text-xs sm:text-sm"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px] group-hover/link:scale-110 transition-transform" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 sm:space-x-2 dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors group/link text-xs sm:text-sm"
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px] group-hover/link:scale-110 transition-transform" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

