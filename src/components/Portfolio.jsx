import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('ALL')

  const tabs = [
    { id: 'ALL', label: 'ALL' },
    { id: 'Aptos', label: 'Aptos' },
    { id: 'TON', label: 'TON' },
    { id: 'DeFi', label: 'DeFi' },
    { id: 'Infra', label: 'Infra' }
  ]

  const projects = {
    ALL: [
      {
        id: 1,
        name: 'Ethena',
        description: 'Ethena is a synthetic dollar protocol on Ethereum.',
        icon: 'Σ',
        category: 'DeFi'
      },
      {
        id: 2,
        name: 'Aptos',
        description: 'Aptos is the layer 1 blockchain engineered to evolve.',
        icon: '⚡',
        category: 'Aptos'
      },
      {
        id: 3,
        name: 'TON',
        description: 'A decentralized and open internet, created by the community using technology.',
        icon: '🔺',
        category: 'TON'
      },
      {
        id: 4,
        name: 'Aries Markets',
        description: 'Building the best one-stop DeFi super App on Aptos',
        icon: '🔷',
        category: 'Aptos'
      },
      {
        id: 5,
        name: 'Amnis Finance',
        description: 'Pioneering liquid staking on Aptos',
        icon: '🌊',
        category: 'Aptos'
      },
      {
        id: 6,
        name: 'TONX',
        description: 'The SuperApp platform layer empowering builders to create the new Web3 economy.',
        icon: '❌',
        category: 'TON'
      },
      {
        id: 7,
        name: 'Catizen',
        description: 'Play-to-Airdrop gaming platform',
        icon: '🐱',
        category: 'Infra'
      },
      {
        id: 8,
        name: 'PlayDeck',
        description: 'A toolkit that allows to launch games on Telegram',
        icon: '🎮',
        category: 'Infra'
      }
    ],
    Aptos: [
      {
        id: 2,
        name: 'Aptos',
        description: 'Aptos is the layer 1 blockchain engineered to evolve.',
        icon: '⚡',
        category: 'Aptos'
      },
      {
        id: 4,
        name: 'Aries Markets',
        description: 'Building the best one-stop DeFi super App on Aptos',
        icon: '🔷',
        category: 'Aptos'
      },
      {
        id: 5,
        name: 'Amnis Finance',
        description: 'Pioneering liquid staking on Aptos',
        icon: '🌊',
        category: 'Aptos'
      }
    ],
    TON: [
      {
        id: 3,
        name: 'TON',
        description: 'A decentralized and open internet, created by the community using technology.',
        icon: '🔺',
        category: 'TON'
      },
      {
        id: 6,
        name: 'TONX',
        description: 'The SuperApp platform layer empowering builders to create the new Web3 economy.',
        icon: '❌',
        category: 'TON'
      }
    ],
    DeFi: [
      {
        id: 1,
        name: 'Ethena',
        description: 'Ethena is a synthetic dollar protocol on Ethereum.',
        icon: 'Σ',
        category: 'DeFi'
      }
    ],
    Infra: [
      {
        id: 7,
        name: 'Catizen',
        description: 'Play-to-Airdrop gaming platform',
        icon: '🐱',
        category: 'Infra'
      },
      {
        id: 8,
        name: 'PlayDeck',
        description: 'A toolkit that allows to launch games on Telegram',
        icon: '🎮',
        category: 'Infra'
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="portfolio" className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="t">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Portfolio
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex justify-start">
            <div className="flex space-x-8 lg:space-x-12">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative text-sm lg:text-base font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="wait">
              {projects[activeTab]?.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Project Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {project.icon}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expand Button */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.button
              className="flex items-center space-x-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span>Click to expand</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio