'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 800) // Wait for exit animation
    }, 3000) // 3 second loading

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          {/* Crown SVG with advanced animations */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-32 h-32 md:w-48 md:h-48"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [- 180, 0, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.6, 1],
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
          >
            {/* Main Crown Body - Gradient Yellow */}
            <defs>
              <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD617" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF8C00" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Crown base */}
            <motion.path
              d="M40 100 L50 140 L150 140 L160 100 L130 110 L100 70 L70 110 Z"
              fill="url(#crownGrad)"
              stroke="#FFD617"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Crown points (gems) */}
            {[
              { cx: 40, cy: 100, delay: 0.2 },
              { cx: 70, cy: 110, delay: 0.3 },
              { cx: 100, cy: 70, delay: 0.4 },
              { cx: 130, cy: 110, delay: 0.5 },
              { cx: 160, cy: 100, delay: 0.6 },
            ].map((gem, i) => (
              <motion.circle
                key={i}
                cx={gem.cx}
                cy={gem.cy}
                r={i === 2 ? 10 : 8}
                fill="#FFD617"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{
                  duration: 0.5,
                  delay: gem.delay,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={`sparkle-${i}`}
                cx={50 + i * 20}
                cy={60 + Math.sin(i) * 30}
                r={2}
                fill="#FFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 1 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
            ))}
          </motion.svg>

          {/* Loading Text */}
          <motion.div
            className="absolute bottom-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-brand-yellow-700 font-semibold text-lg">Loading your kingdom...</p>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-brand-gray-200 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-brand-yellow-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
