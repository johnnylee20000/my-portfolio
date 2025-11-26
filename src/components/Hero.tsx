'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  // Set profile picture to pic 1.jpg
  useEffect(() => {
    // Use pic 1.jpg as the profile picture
    const profilePicPath = '/images/pic 1.jpg'
    const testImage = (path: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new window.Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        // Encode spaces in URL
        const encodedPath = path.includes(' ') ? path.split('/').map(part => 
          part.includes(' ') ? encodeURIComponent(part) : part
        ).join('/') : path
        img.src = encodedPath
      })
    }
    
    const encodePath = (path: string): string => {
      if (path.includes(' ')) {
        return path.split('/').map(part => 
          part.includes(' ') ? encodeURIComponent(part) : part
        ).join('/')
      }
      return path
    }
    
    const checkImage = async () => {
      const exists = await testImage(profilePicPath)
      if (exists) {
        setImageSrc(encodePath(profilePicPath))
      } else {
        setImageSrc(null)
      }
    }
    
    checkImage()
  }, [])
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Enhanced image with filters for dramatic effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${encodeURI('/images/pic 1.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(1.1) brightness(0.9) saturate(1.2)',
        }}
      />
      
      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 z-[1]"></div>
      
      {/* Minimal gradient overlays to preserve image drama */}
      <div className="absolute inset-0 z-[2] dark:bg-gradient-to-br dark:from-blue-900/5 dark:via-purple-900/5 dark:to-pink-900/5 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-pink-100/10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-red-500/70 dark:border-red-400/80 shadow-2xl ring-4 ring-white/30 dark:ring-gray-800/50"
              style={{
                boxShadow: '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3)',
              }}
            >
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Johnny-Lee Treavajo"
                  className="w-full h-full object-cover"
                  style={{ 
                    objectFit: 'cover',
                    filter: 'contrast(1.15) brightness(0.95) saturate(1.1)',
                    transform: 'scale(1.05)',
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-500 via-white to-black flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                  JL
                </div>
              )}
              {/* Enhanced decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/40 dark:border-gray-700/40"></div>
              <div className="absolute inset-0 rounded-full border border-red-500/30 dark:border-red-400/30"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10"></div>
            </motion.div>
          </motion.div>
          
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
            onClick={(e) => handleSmoothScroll(e, '#about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown size={32} className="dark:text-gray-400 text-gray-600" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

