'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Map, Trophy, Crown, Users, BarChart3, Zap, Palette, Lock, Key } from 'lucide-react'

const screenshots = [
  { id: 1, title: 'Login', category: 'Get Started', image: '/images/login-page.PNG' },
  { id: 2, title: 'Kingdom', category: 'Main View', image: '/images/home-screen.PNG' },
  { id: 3, title: 'Throne', category: 'Rankings', image: '/images/leaderboard.PNG' },
  { id: 4, title: 'Reign', category: 'Track Progress', image: '/images/activity-page.PNG' },
  { id: 5, title: 'Rewards', category: 'Achievements', image: '/images/rewards-page.PNG' },
  { id: 6, title: 'Profile', category: 'Your Stats', image: '/images/profile-page.PNG' },
]

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="app-preview" className="section-spacing bg-gradient-to-br from-brand-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black mb-6">
            Experience the <span className="gradient-text-yellow">Power</span> of Reign
          </h2>
          <p className="text-base md:text-lg text-brand-gray-600">
            Explore every feature designed to make fitness fun, competitive, and rewarding
          </p>
        </motion.div>

        {/* Gallery - Golden Ratio Grid Layout */}
        <div className="golden-grid items-center gap-8 md:gap-12">
          {/* Left - Feature List with Icons (larger per golden ratio) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1.5 bg-brand-yellow-100 rounded-full mb-2">
              <span className="text-xs font-semibold text-brand-yellow-800">App Features</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-black leading-tight mb-4">
              Everything You Need to <span className="gradient-text-yellow">Conquer</span>
            </h3>

            {/* Feature List with Click to Switch */}
            <div className="space-y-2">
              {screenshots.map((screenshot, index) => {
                const icons = [Key, Map, Trophy, Crown, Users, BarChart3];
                const Icon = icons[index];
                return (
                  <motion.button
                    key={screenshot.id}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ x: 5 }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                      activeIndex === index
                        ? 'bg-brand-yellow-100 border-2 border-brand-yellow-500 shadow-lg'
                        : 'bg-white border-2 border-brand-gray-200 hover:border-brand-yellow-300'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-yellow-600" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-base ${activeIndex === index ? 'text-brand-black' : 'text-brand-gray-900'}`}>
                        {screenshot.title}
                      </h4>
                      <p className={`text-xs ${activeIndex === index ? 'text-brand-gray-700' : 'text-brand-gray-600'}`}>
                        {screenshot.category}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Phone Mockup (smaller per golden ratio) */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-[200px] lg:max-w-[240px]">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-3xl z-10" />

                {/* Screenshot - Real Image */}
                <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src={screenshots[activeIndex].image}
                    alt={screenshots[activeIndex].title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Points */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 grid md:grid-cols-3 gap-10 md:gap-8"
          >
            {[
              { Icon: Zap, title: 'Lightning Fast', desc: 'Optimized for performance' },
              { Icon: Palette, title: 'Beautiful UI', desc: 'Designed for delight' },
              { Icon: Lock, title: 'Secure & Private', desc: 'Your data is protected' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-yellow-100 rounded-2xl flex items-center justify-center">
                  <item.Icon className="w-8 h-8 text-brand-yellow-600" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
