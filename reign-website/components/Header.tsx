'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header({ showLogo = true }: { showLogo?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'App Preview', href: '#app-preview' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Mission', href: '#mission' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-brand-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Crown Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            className="flex items-center gap-3"
          >
            {showLogo && (
              <>
                {/* Simplified Crown SVG Logo */}
                <svg
                  viewBox="0 0 50 50"
                  className="w-10 h-10 md:w-12 md:h-12"
                >
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD617" />
                      <stop offset="100%" stopColor="#FFA500" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 25 L12.5 35 L37.5 35 L40 25 L32.5 27.5 L25 17.5 L17.5 27.5 Z"
                    fill="url(#logoGrad)"
                    stroke="#FFD617"
                    strokeWidth="1"
                  />
                  <circle cx="10" cy="25" r="2" fill="#FFD617" />
                  <circle cx="17.5" cy="27.5" r="2" fill="#FFD617" />
                  <circle cx="25" cy="17.5" r="2.5" fill="#FFD617" />
                  <circle cx="32.5" cy="27.5" r="2" fill="#FFD617" />
                  <circle cx="40" cy="25" r="2" fill="#FFD617" />
                </svg>

                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold gradient-text-yellow">
                    Reign
                  </h1>
                  <p className="text-xs text-brand-gray-600 hidden sm:block">Rule Your Streets</p>
                </div>
              </>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-brand-gray-700 hover:text-brand-yellow-600 font-medium animated-underline transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.href)
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:block"
          >
            <a href="https://github.com/Fayeq-qamar/Reign" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2.5 bg-brand-yellow-500 hover:bg-brand-yellow-600 text-black font-semibold rounded-full transition-all yellow-glow hover:yellow-glow-strong">
                Download App
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-brand-gray-200"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  const element = document.querySelector(link.href)
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="block py-3 text-brand-gray-700 hover:text-brand-yellow-600 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="https://github.com/Fayeq-qamar/Reign" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full px-6 py-3.5 bg-brand-yellow-500 text-black font-semibold rounded-full mt-2">
                Download App
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
