import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Ourstory = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    collapsed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="our-story" className=" py-12 lg:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Our Story
            </h2>
            <p className="text-lg text-white font-medium">
              India-born. Future-obsessed. Mira Capital funds AI x Web3 pioneers.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-white leading-relaxed text-lg">
                Mira was born from a belief: the future of Web3 won't be won by protocols alone—but by experiences. We back early-stage founders building at the edge of AI x UX, designing tools that make blockchain feel intuitive, personal, and intelligent.
              </p>
              
              <p className="text-white leading-relaxed text-lg">
                From personalized agents to adaptive dApps and autonomous crypto interfaces, we invest where humans and AI merge to create seamless on-chain experiences.
              </p>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={textVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="space-y-4 pt-4 border-t border-gray-200"
                >
                  <p className="text-white leading-relaxed text-lg">
                    But we don't just invest in dreams—we've already been in the trenches.
                  </p>
                  
                  <p className="text-white leading-relaxed text-lg">
                    Mira has actively participated in multiple OTC rounds of high-potential crypto projects, giving us unique insight into real traction, token dynamics, and early market narratives. This hands-on dealflow helps us spot the patterns others miss—and back visionary builders before the crowd.
                  </p>
                  
                  <p className="text-white leading-relaxed text-lg font-semibold">
                    Mira is your lens into tomorrow's tech.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.div variants={itemVariants} className="pt-8">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-full transition-colors duration-200 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
              <span className="font-medium">
                {isExpanded ? 'Show Less' : 'Read More'}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ourstory