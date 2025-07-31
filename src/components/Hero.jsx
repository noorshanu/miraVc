import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaXTwitter, FaTelegram, FaInstagram } from 'react-icons/fa6'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      setMousePosition({ x, y })
    }

    const planetElement = document.getElementById('planet-container')
    if (planetElement) {
      planetElement.addEventListener('mousemove', handleMouseMove)
      planetElement.addEventListener('mouseenter', () => setIsHovering(true))
      planetElement.addEventListener('mouseleave', () => setIsHovering(false))
    }

    return () => {
      if (planetElement) {
        planetElement.removeEventListener('mousemove', handleMouseMove)
        planetElement.removeEventListener('mouseenter', () => setIsHovering(true))
        planetElement.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const planetVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const rocketVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial="hidden"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              delay: Math.random() * 2,
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Planet */}
          <motion.div
            variants={planetVariants}
            className="relative mb-8 lg:mb-12"
          >
            <div 
              id="planet-container"
              className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto cursor-pointer"
            >
              {/* Planet Circle with Mouse Tracking */}
              <motion.div 
                className="absolute inset-0 rounded-full shadow-2xl overflow-hidden"
                animate={{
                  scale: isHovering ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img 
                  src='/moon.png' 
                  alt="planet" 
                  className='w-full h-full object-cover'
                  style={{
                    transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                />
                {/* Planet Surface Details */}
                <div className="absolute inset-2 bg-gradient-to-br from-blue-300/30 to-blue-700/30 rounded-full"></div>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-200/40 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-300/50 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400/60 rounded-full"></div>
              </motion.div>
              
              {/* Rocket - Moved to top right */}
              <motion.div
                variants={rocketVariants}
                className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="relative">
                  {/* Rocket Body */}
                  <div className="w-12 h-20 lg:w-16 lg:h-28 bg-gradient-to-b from-white to-gray-200 rounded-t-full shadow-lg">
                    {/* Rocket Windows */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    
                    {/* Rocket Fins */}
                    <div className="absolute bottom-2 left-0 w-2 h-4 bg-red-500 rounded-l-full"></div>
                    <div className="absolute bottom-2 right-0 w-2 h-4 bg-red-500 rounded-r-full"></div>
                  </div>
                  
                  {/* Rocket Trail */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-1.5 h-6 bg-gradient-to-t from-orange-400 to-transparent"></div>
                    <div className="w-1 h-4 bg-gradient-to-t from-yellow-400 to-transparent ml-0.5"></div>
                    <div className="w-1 h-4 bg-gradient-to-t from-yellow-400 to-transparent -ml-0.5"></div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Rocket - Bottom left */}
              <motion.div
                className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="relative">
                  {/* Rocket Body */}
                  <div className="w-10 h-16 lg:w-14 lg:h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full shadow-lg">
                    {/* Rocket Windows */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                    
                    {/* Rocket Fins */}
                    <div className="absolute bottom-1 left-0 w-1.5 h-3 bg-blue-500 rounded-l-full"></div>
                    <div className="absolute bottom-1 right-0 w-1.5 h-3 bg-blue-500 rounded-r-full"></div>
                  </div>
                  
                  {/* Rocket Trail */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-4 bg-gradient-to-t from-blue-400 to-transparent"></div>
                    <div className="w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent ml-0.5"></div>
                    <div className="w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent -ml-0.5"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="relative z-20"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-4 lg:mb-6 tracking-tight"
            >
              <span className="gradient-text">
                MIRA VENTURES
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed"
            >
              India-born. Future-obsessed. Mira Capital funds AI x Web3 pioneers.
            </motion.p>
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 btn-primary text-white font-semibold rounded-lg shadow-lg"
            >
              Explore Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 btn-secondary text-blue-400 font-semibold rounded-lg"
            >
              Learn More
            </motion.button>
          </motion.div> */}

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 lg:mt-12 flex justify-center space-x-6"
          >
            <motion.a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaXTwitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero