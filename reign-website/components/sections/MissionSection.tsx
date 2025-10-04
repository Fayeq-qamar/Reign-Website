'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Zap, User, Castle } from 'lucide-react'

export default function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: 'Health First',
      description: 'We believe fitness should be accessible, enjoyable, and sustainable for everyone.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building connections through friendly competition and shared achievements.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Turning abstract fitness goals into concrete, achievable territories.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging gamification to make every step count towards something bigger.'
    }
  ]

  return (
    <section id="mission" className="section-spacing bg-gradient-to-br from-white via-brand-yellow-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-yellow-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-yellow-200 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - Golden Ratio Layout */}
        <div className="golden-grid items-center gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-white border border-brand-yellow-300 rounded-full">
              <span className="text-sm font-semibold text-brand-yellow-800">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black leading-tight">
              Making Fitness{' '}
              <span className="gradient-text-yellow">Fun & Meaningful</span>
            </h2>

            <div className="space-y-6 md:space-y-4 text-base md:text-lg text-brand-gray-700 leading-relaxed">
              <p>
                We started Reign with a simple question:{' '}
                <span className="font-semibold text-brand-black">
                  What if staying active felt like playing a game?
                </span>
              </p>

              <p>
                In a world where fitness apps focus on counting steps, we wanted to create something different—a platform that transforms your neighborhood into your personal playground.
              </p>

              <p>
                Every walk becomes an adventure. Every territory claimed is a victory. Every step brings you closer to your fitness goals while exploring the world around you.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-yellow-400 to-brand-yellow-600 border-2 border-white flex items-center justify-center"
                    >
                      <User className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-brand-black">Join the Founding Rulers</p>
                  <p className="text-sm text-brand-gray-600">Help Us Build Something Special</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Map with Crown Territory */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Map Background - Real map image */}
              <div className="absolute inset-0 bg-gray-100">
                <img
                  src="/images/Map-image.JPEG"
                  alt="City Map"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.8 }}
                />
              </div>

              {/* Crown Territory Shape - Centered and Symmetric */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                {/* Crown polygon filled with yellow (55% opacity) - PERFECTLY CENTERED */}
                <polygon
                  points="125,250 150,350 350,350 375,250 312,275 250,150 188,275"
                  fill="#FFD617"
                  fillOpacity="0.55"
                  stroke="#FFD617"
                  strokeWidth="5"
                  strokeOpacity="0.95"
                />

                {/* Crown Points/Markers - SYMMETRIC AND CENTERED */}
                <circle cx="125" cy="250" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="188" cy="275" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="250" cy="150" r="10" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="312" cy="275" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="375" cy="250" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="150" cy="350" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />
                <circle cx="350" cy="350" r="8" fill="#FFD617" stroke="white" strokeWidth="3.5" />

                {/* Pulsing animation on center point */}
                <circle cx="250" cy="150" r="10" fill="#FFD617" fillOpacity="0.4">
                  <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Small Badge at Bottom */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <Castle className="w-5 h-5 text-brand-yellow-600" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-black">Build Your Kingdom</h4>
                    <p className="text-xs text-brand-gray-600">2.4 km² captured</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-2xl font-bold gradient-text-yellow">Growing</div>
              <div className="text-xs text-brand-gray-600">Daily</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-2xl font-bold gradient-text-yellow">Join</div>
              <div className="text-xs text-brand-gray-600">Early</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-brand-gray-200 rounded-2xl p-6 hover:border-brand-yellow-400 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-brand-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-brand-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">{value.title}</h3>
              <p className="text-brand-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
