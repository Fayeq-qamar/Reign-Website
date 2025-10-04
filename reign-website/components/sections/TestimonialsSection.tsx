'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Sparkles, User } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Fitness Enthusiast',
    location: 'Mumbai',
    rating: 5,
    text: 'Reign transformed my daily walks into an exciting adventure. I\'ve lost 8kg in 3 months while having fun conquering my neighborhood!',
    highlight: 'Lost 8kg in 3 months'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Software Engineer',
    location: 'Bangalore',
    rating: 5,
    text: 'As someone who sits all day, Reign gave me the motivation I needed. The competitive aspect keeps me moving every single day.',
    highlight: 'Walks daily now'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'College Student',
    location: 'Delhi',
    rating: 5,
    text: 'My whole college group is addicted to Reign! We compete for territories and it\'s become our favorite weekend activity.',
    highlight: 'Entire friend group active'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow-300 rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-brand-yellow-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-brand-yellow-800">Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black mb-6">
            Building the <span className="gradient-text-yellow">Future</span> Across India
          </h2>
          <p className="text-base md:text-lg text-brand-gray-600">
            Join the movement to transform fitness into an adventure
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white border-2 border-brand-gray-200 rounded-3xl p-8 hover:border-brand-yellow-400 hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-brand-yellow-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-brand-yellow-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow-500 text-brand-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-brand-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow-50 border border-brand-yellow-200 rounded-full text-xs font-semibold text-brand-yellow-800 mb-6">
                <Sparkles className="w-3 h-3" />
                {testimonial.highlight}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow-400 to-brand-yellow-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">{testimonial.name}</h4>
                  <p className="text-sm text-brand-gray-600">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-8 bg-gradient-to-br from-brand-yellow-50 to-brand-yellow-100 rounded-3xl"
        >
          {[
            { value: 'Beta', label: 'Early Access' },
            { value: 'Join Us', label: 'Be a Founder' },
            { value: 'Your Steps', label: 'Will Count' },
            { value: 'New Era', label: 'Fitness Gaming' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-yellow mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-brand-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
