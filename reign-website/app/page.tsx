'use client'

import { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import PhoneMockupSection from '@/components/sections/PhoneMockupSection'
import ScreenshotGallery from '@/components/sections/ScreenshotGallery'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import MissionSection from '@/components/sections/MissionSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Header showLogo={true} />

          <main className="relative">
            <HeroSection />
            <PhoneMockupSection />
            <ScreenshotGallery />
            <TestimonialsSection />
            <MissionSection />
            <CTASection />

            {/* Footer */}
            <footer className="bg-white border-t border-brand-gray-200 py-12 md:py-12">
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-8">
                  {/* Brand */}
                  <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                      <svg viewBox="0 0 50 50" className="w-8 h-8">
                        <defs>
                          <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD617" />
                            <stop offset="100%" stopColor="#FFA500" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M10 25 L12.5 35 L37.5 35 L40 25 L32.5 27.5 L25 17.5 L17.5 27.5 Z"
                          fill="url(#footerGrad)"
                        />
                      </svg>
                      <span className="text-xl font-display font-bold gradient-text-yellow">Reign</span>
                    </div>
                    <p className="text-sm text-brand-gray-600 mb-4">
                      Rule your streets, one step at a time
                    </p>
                    <div className="flex gap-4">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-10 h-10 rounded-full bg-brand-gray-100 hover:bg-brand-yellow-100 flex items-center justify-center transition-colors group"
                        >
                          <Icon className="w-5 h-5 text-brand-gray-600 group-hover:text-brand-yellow-600 transition-colors" strokeWidth={2} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="font-semibold text-brand-black mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-brand-gray-600">
                      <li><a href="#features" className="hover:text-brand-yellow-600">Features</a></li>
                      <li><a href="#how-it-works" className="hover:text-brand-yellow-600">How it Works</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Pricing</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">FAQ</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-black mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-brand-gray-600">
                      <li><a href="#mission" className="hover:text-brand-yellow-600">About Us</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Blog</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Careers</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Contact</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-black mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm text-brand-gray-600">
                      <li><a href="#" className="hover:text-brand-yellow-600">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Terms of Service</a></li>
                      <li><a href="#" className="hover:text-brand-yellow-600">Cookie Policy</a></li>
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-brand-gray-200 text-center text-sm text-brand-gray-600">
                  <p className="flex items-center justify-center gap-1">
                    &copy; {new Date().getFullYear()} Reign. All rights reserved. Built with
                    <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
                    in India
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </>
      )}
    </>
  )
}
