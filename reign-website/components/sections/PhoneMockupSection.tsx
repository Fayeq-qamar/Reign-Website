'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Home, Map, Trophy, User, Target, Crown, Zap } from 'lucide-react'

export default function PhoneMockupSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      id="features"
      className="section-spacing bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="golden-grid items-center gap-12 md:gap-16">
          {/* Left - 3D Phone Mockup */}
          <motion.div
            style={{ y, opacity }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[256px] lg:max-w-[307px]">
              {/* 3D Phone Container */}
              <div className="relative phone-shadow" style={{ perspective: '1000px' }}>
                {/* Phone Frame */}
                <motion.div
                  initial={{ rotateY: -30, rotateX: 5 }}
                  whileInView={{ rotateY: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="relative bg-black rounded-[3rem] p-3 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative aspect-[9/19] bg-gradient-to-br from-brand-yellow-50 to-white rounded-[2.5rem] overflow-hidden">
                    {/* App Screenshot Placeholder */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Status Bar */}
                      <div className="h-12 flex items-center justify-between px-6 pt-2 text-xs text-brand-gray-600">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-3 border border-brand-gray-400 rounded-sm" />
                          <div className="w-1 h-3 bg-brand-gray-400 rounded-full" />
                        </div>
                      </div>

                      {/* Map View with Real Image */}
                      <div className="flex-1 relative bg-gray-200">
                        {/* Real Map Background */}
                        <img
                          src="/images/phone-mockup.jpg"
                          alt="Map"
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Animated Natural Path Trail */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 600">
                          {/* Filled Area - Distorted uneven hexagon centered, just below river */}
                          <motion.path
                            d="M 120 260
                               L 200 270
                               L 220 310
                               L 190 360
                               L 110 365
                               L 70 310
                               Z"
                            fill="#FFD617"
                            fillOpacity="0"
                            animate={{
                              fillOpacity: [0, 0, 0, 0, 0, 0.55, 0.55]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                          />

                          {/* Distorted Hexagon Trail - 6 uneven sides following roads */}
                          <motion.path
                            d="M 120 260
                               C 135 262, 170 266, 200 270
                               C 205 280, 215 295, 220 310
                               C 218 330, 205 350, 190 360
                               C 165 363, 135 364, 110 365
                               C 95 350, 75 330, 70 310
                               C 75 285, 100 265, 120 260"
                            stroke="#FFD617"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="1200"
                            strokeDashoffset="1200"
                            animate={{
                              strokeDashoffset: [1200, 0]
                            }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay: 0.8 }}
                          />

                          {/* Starting Point Marker */}
                          <motion.circle
                            cx="120"
                            cy="260"
                            r="6"
                            fill="#FFD617"
                            stroke="white"
                            strokeWidth="2.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1, 1, 1, 1, 1, 1] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                          />

                          {/* Movement Dots along trail - shows active tracking */}
                          <motion.circle
                            cx="0"
                            cy="0"
                            r="4"
                            fill="white"
                            opacity="0.8"
                            animate={{
                              offsetDistance: ['0%', '100%'],
                              opacity: [0, 0.8, 0.8, 0]
                            }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay: 0.8 }}
                            style={{
                              offsetPath: 'path("M 120 260 C 135 262, 170 266, 200 270 C 205 280, 215 295, 220 310 C 218 330, 205 350, 190 360 C 165 363, 135 364, 110 365 C 95 350, 75 330, 70 310 C 75 285, 100 265, 120 260")',
                            }}
                          />

                          {/* Connection Pulse - Big celebration when loop closes */}
                          <motion.circle
                            cx="120"
                            cy="260"
                            r="0"
                            fill="#FFD617"
                            fillOpacity="0.7"
                            animate={{
                              r: [0, 0, 0, 0, 0, 30, 0],
                              opacity: [0, 0, 0, 0, 0, 1, 0]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeOut', times: [0, 0.78, 0.82, 0.86, 0.88, 0.92, 1] }}
                          />

                          {/* Secondary pulse ring */}
                          <motion.circle
                            cx="120"
                            cy="260"
                            r="0"
                            fill="none"
                            stroke="#FFD617"
                            strokeWidth="3"
                            animate={{
                              r: [0, 0, 0, 0, 0, 40, 50],
                              opacity: [0, 0, 0, 0, 0, 1, 0]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeOut', times: [0, 0.78, 0.82, 0.86, 0.88, 0.92, 1] }}
                          />
                        </svg>

                        {/* Stats Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-brand-gray-600">Territory Size</div>
                              <div className="text-lg font-bold gradient-text-yellow">0.9 km²</div>
                            </div>
                            <div>
                              <div className="text-xs text-brand-gray-600">Points</div>
                              <div className="text-lg font-bold gradient-text-yellow">1,247</div>
                            </div>
                            <div>
                              <div className="text-xs text-brand-gray-600">Rank</div>
                              <div className="text-lg font-bold gradient-text-yellow">#89</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="h-20 bg-white border-t border-brand-gray-200 flex items-center justify-around px-8">
                        {[Home, Map, Trophy, User].map((Icon, i) => (
                          <Icon
                            key={i}
                            className={`w-6 h-6 ${i === 1 ? 'text-brand-yellow-600 opacity-100' : 'text-brand-gray-400 opacity-40'}`}
                            strokeWidth={2}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l-sm" />
                  <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l-sm" />
                </motion.div>

                {/* Floating Elements Around Phone */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-brand-yellow-400 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Crown className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-white border-2 border-brand-yellow-400 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-brand-yellow-600 fill-brand-yellow-600" strokeWidth={2} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-6 order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-brand-yellow-100 rounded-full">
              <span className="text-sm font-semibold text-brand-yellow-800">In Action</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black leading-tight">
              Your Fitness Journey,{' '}
              <span className="gradient-text-yellow">Gamified</span>
            </h2>

            <p className="text-base md:text-lg text-brand-gray-600 leading-relaxed">
              Every step you take paints your mark on the map. Create territories, compete with neighbors, and build your fitness empire.
            </p>

            <div className="space-y-5 pt-4">
              {[
                { Icon: Map, title: 'Live Territory Mapping', desc: 'See your conquered areas in real-time' },
                { Icon: Trophy, title: 'Competitive Leaderboards', desc: 'Climb the ranks in your neighborhood' },
                { Icon: Target, title: 'Daily Challenges', desc: 'New goals to keep you motivated' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow-100 rounded-xl flex items-center justify-center">
                    <feature.Icon className="w-6 h-6 text-brand-yellow-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black">{feature.title}</h3>
                    <p className="text-brand-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
