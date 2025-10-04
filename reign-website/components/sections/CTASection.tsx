'use client'

import { motion } from 'framer-motion'
import { Apple, Smartphone, Crown, Check } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-spacing bg-gradient-to-br from-brand-yellow-400 via-brand-yellow-500 to-brand-yellow-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-8"
          >
            {/* Crown Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <Crown className="w-16 h-16 text-brand-yellow-600" strokeWidth={2} />
              </div>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-tight">
              Ready to Start Your Reign?
            </h2>

            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
              Be part of something new - transform your fitness journey into an exciting adventure
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 md:pt-8">
              <a href="https://github.com/Fayeq-qamar/Reign" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-2xl shadow-xl transition-colors"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </motion.button>
              </a>

              <a href="https://github.com/Fayeq-qamar/Reign" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-2xl shadow-xl transition-colors"
                >
                  <Smartphone className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </motion.button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span>Free to download</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span>Start in 30 seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
