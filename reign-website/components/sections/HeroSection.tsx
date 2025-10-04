'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Gamepad2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import ReignRunnerGame from '@/components/ReignRunnerGame'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isGameOpen, setIsGameOpen] = useState(false)
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-24 bg-gradient-to-br from-white via-brand-yellow-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-yellow-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-yellow-300 rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 md:py-6 relative z-10">
        {/* Golden Ratio Grid: 1.618fr 1fr */}
        <div className="golden-grid items-center gap-12">
          {/* Left Column - Content (larger per golden ratio) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-yellow-300 rounded-full shadow-sm"
            >
              <span className="w-2 h-2 bg-brand-yellow-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-gray-700">
                Join the Founding Rulers
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-brand-black"
            >
              Rule Your{' '}
              <span className="gradient-text-yellow">Neighborhood</span>
              <br />
              One Step at a Time
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl text-brand-gray-600 max-w-xl leading-relaxed"
            >
              Transform your daily walks into territory conquests. Build your fitness empire while exploring your city.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a href="https://github.com/Fayeq-qamar/Reign" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full group px-8 py-4 bg-brand-yellow-500 hover:bg-brand-yellow-600 text-black font-semibold rounded-full transition-all yellow-glow hover:yellow-glow-strong flex items-center justify-center gap-2">
                  Download for Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <button
                onClick={() => setIsGameOpen(true)}
                className="group px-8 py-4 bg-white hover:bg-brand-gray-50 text-brand-gray-700 font-semibold rounded-full border-2 border-brand-gray-300 hover:border-brand-yellow-500 transition-all flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-5 h-5" />
                Play Reign Runner
              </button>
            </motion.div>

            {/* Reign Runner Game Modal */}
            <ReignRunnerGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold gradient-text-yellow">Building</div>
                <div className="text-sm text-brand-gray-600">Our Community</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-brand-gray-300" />
              <div>
                <div className="text-3xl font-bold gradient-text-yellow">Growing</div>
                <div className="text-sm text-brand-gray-600">Every Day</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-brand-gray-300" />
              <div>
                <div className="text-3xl font-bold gradient-text-yellow">Join Us</div>
                <div className="text-sm text-brand-gray-600">Early Access</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Crown Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative block"
          >
            <div className="relative aspect-square max-w-[200px] lg:max-w-lg mx-auto">
              {/* Layer 1 - Background Hexagons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[10%] left-[10%] w-20 h-20 lg:w-32 lg:h-32 opacity-10"
              >
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="#FFD617" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[15%] right-[5%] w-16 h-16 lg:w-24 lg:h-24 opacity-10"
              >
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="#FFD617" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[50%] left-[5%] w-12 h-12 lg:w-20 lg:h-20 opacity-10"
              >
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="#FFD617" />
                </svg>
              </motion.div>

              {/* Layer 2 - Glowing Aura */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-40 h-40 lg:w-80 lg:h-80 rounded-full bg-gradient-radial from-brand-yellow-300/20 via-brand-yellow-200/10 to-transparent" />
              </motion.div>

              {/* Layer 3 - Particle Trail */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, -40, -60],
                    x: [0, Math.sin(i) * 10, Math.sin(i) * 20, Math.sin(i) * 30],
                    opacity: [0.6, 0.4, 0.2, 0],
                    scale: [1, 0.8, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeOut'
                  }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 lg:w-3 lg:h-3 bg-brand-yellow-400 rounded-full"
                />
              ))}

              {/* Layer 4 - Crown Character */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="cursor-pointer relative z-20"
                  style={{ pointerEvents: 'auto' }}
                >
                  <svg viewBox="0 0 200 200" className="w-32 h-32 lg:w-64 lg:h-64" style={{ pointerEvents: 'auto' }}>
                    <defs>
                      <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD617" />
                        <stop offset="100%" stopColor="#FFA500" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Crown base - 50% bigger */}
                    <path
                      d="M10 97.5 L25 157.5 L175 157.5 L190 97.5 L145 112.5 L100 52.5 L55 112.5 Z"
                      fill="url(#crownGrad)"
                      stroke="#FFF"
                      strokeWidth="4"
                      filter="url(#glow)"
                    />

                    {/* Crown points (gems) - 50% bigger */}
                    <circle cx="10" cy="97.5" r="12" fill="#FFD617" stroke="#FFF" strokeWidth="2" />
                    <circle cx="55" cy="112.5" r="12" fill="#FFD617" stroke="#FFF" strokeWidth="2" />
                    <circle cx="100" cy="52.5" r="15" fill="#FFD617" stroke="#FFF" strokeWidth="2" />
                    <circle cx="145" cy="112.5" r="12" fill="#FFD617" stroke="#FFF" strokeWidth="2" />
                    <circle cx="190" cy="97.5" r="12" fill="#FFD617" stroke="#FFF" strokeWidth="2" />

                    {/* Eyes - closer together for cuteness */}
                    <motion.g
                      animate={{
                        scaleY: [1, 0.1, 1]
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      {/* Left Eye */}
                      <circle cx="85" cy="124.5" r="8" fill="#FFF" />
                      <circle cx="86" cy="124.5" r="5" fill="#000" />
                      <circle cx="88" cy="122.5" r="2" fill="#FFF" />

                      {/* Right Eye */}
                      <circle cx="115" cy="124.5" r="8" fill="#FFF" />
                      <circle cx="116" cy="124.5" r="5" fill="#000" />
                      <circle cx="118" cy="122.5" r="2" fill="#FFF" />
                    </motion.g>

                    {/* Smile - animates between closed and open on hover */}
                    {!isHovered ? (
                      <motion.path
                        d="M87 139.5 Q100 148 113 139.5"
                        stroke="#000"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.7"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    ) : (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Open mouth with tongue */}
                        <path
                          d="M90 142 Q100 155 110 142 Q100 150 90 142 Z"
                          fill="#FF6B9D"
                          stroke="#000"
                          strokeWidth="3"
                          opacity="0.9"
                        />
                        {/* Tongue */}
                        <ellipse
                          cx="100"
                          cy="148"
                          rx="4"
                          ry="3"
                          fill="#FF3366"
                          opacity="0.8"
                        />
                      </motion.g>
                    )}

                    {/* Rosy Cheeks - same size, positioned on bigger crown */}
                    <circle cx="47.5" cy="135" r="5" fill="#FFB6C1" opacity="0.4" />
                    <circle cx="152.5" cy="135" r="5" fill="#FFB6C1" opacity="0.4" />
                  </svg>
                </motion.div>
              </div>

              {/* Layer 5 - Orbiting Badges */}
              {/* Trophy Badge */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-yellow-600" fill="currentColor">
                      <path d="M12 2L9 9H2l6 4-2 7 6-4 6 4-2-7 6-4h-7z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Star Badge */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-yellow-600" fill="currentColor">
                      <circle cx="12" cy="12" r="8"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Medal Badge */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <div className="absolute right-0 bottom-1/4 translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-yellow-600" fill="currentColor">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Cards - Layer 10 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden lg:block absolute top-10 right-10 px-4 py-2 bg-white rounded-lg shadow-lg z-10"
              >
                <div className="text-xs text-brand-gray-600">Today's Steps</div>
                <div className="text-lg font-bold gradient-text-yellow">8,432</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden lg:block absolute bottom-20 left-10 px-4 py-2 bg-white rounded-lg shadow-lg z-10"
              >
                <div className="text-xs text-brand-gray-600">Rank</div>
                <div className="text-lg font-bold gradient-text-yellow">#127</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
