'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with your backend API endpoint or email service
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulate API call (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo purposes, we'll simulate success
      // In production, handle the actual API response
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 dark:bg-gray-800 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            {[
              { icon: Mail, color: 'text-blue-400', title: 'Email', content: 'johnnylee20000@gmail.com', delay: 0.1 },
              { icon: Phone, color: 'text-purple-400', title: 'Phone', content: '1 (868) 346-1604', delay: 0.2 },
              { icon: MapPin, color: 'text-pink-400', title: 'Location', content: 'Trinidad and Tobago', delay: 0.3 },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="dark:bg-gray-800 bg-white rounded-lg p-4 sm:p-6"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay + 0.1 }}
                  >
                    <IconComponent className={`${item.color} mb-3 sm:mb-4 w-7 h-7 sm:w-8 sm:h-8`} />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 dark:text-white text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700 break-words">{item.content}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="dark:bg-gray-800 bg-white rounded-lg p-6 sm:p-8 space-y-4 sm:space-y-6"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm sm:text-base dark:text-gray-300 text-gray-700 mb-1.5 sm:mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-gray-700 bg-gray-100 rounded-lg text-sm sm:text-base dark:text-white text-gray-900 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'focus:ring-red-500 border-2 border-red-500'
                    : 'focus:ring-purple-500 border-2 border-transparent'
                }`}
                placeholder="Your Name"
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm sm:text-base dark:text-gray-300 text-gray-700 mb-1.5 sm:mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-gray-700 bg-gray-100 rounded-lg text-sm sm:text-base dark:text-white text-gray-900 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'focus:ring-red-500 border-2 border-red-500'
                    : 'focus:ring-purple-500 border-2 border-transparent'
                }`}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm sm:text-base dark:text-gray-300 text-gray-700 mb-1.5 sm:mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 dark:bg-gray-700 bg-gray-100 rounded-lg text-sm sm:text-base dark:text-white text-gray-900 focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? 'focus:ring-red-500 border-2 border-red-500'
                    : 'focus:ring-purple-500 border-2 border-transparent'
                }`}
                placeholder="Your Message"
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle size={14} />
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-sm sm:text-base text-green-400"
                >
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-sm sm:text-base text-red-400"
                >
                  <AlertCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Something went wrong. Please try again later.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="sm:w-5 sm:h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}


