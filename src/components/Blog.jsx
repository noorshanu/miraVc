import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The $250 Trillion Opportunity in Crypto",
      excerpt: "Discover the massive potential in the cryptocurrency market and how it's reshaping global finance.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      category: "Market Analysis",
      readTime: "5 min read",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Don't Buy Bitcoin in 2024 - Buy Small Fast-Growing Cryptos Instead",
      excerpt: "Why emerging cryptocurrencies might offer better returns than Bitcoin in the current market cycle.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      category: "Investment Strategy",
      readTime: "4 min read",
      date: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "The Secret Way to Double Your Bitcoin Without Buying More",
      excerpt: "Advanced strategies for maximizing your Bitcoin holdings through innovative DeFi protocols.",
      image: "https://images.unsplash.com/photo-1621416894567-8b1c5c4c0c0c?w=400&h=250&fit=crop",
      category: "DeFi",
      readTime: "6 min read",
      date: "Dec 10, 2024"
    },
    {
      id: 4,
      title: "The Big Crypto Opportunity of 2025",
      excerpt: "What to expect in the cryptocurrency market and the emerging trends that will dominate next year.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=250&fit=crop",
      category: "Market Trends",
      readTime: "7 min read",
      date: "Dec 8, 2024"
    },
    {
      id: 5,
      title: "Google CEO's Son is Mining This Crypto - It's Not Bitcoin",
      excerpt: "The surprising cryptocurrency that's attracting attention from tech industry insiders.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      category: "Industry News",
      readTime: "3 min read",
      date: "Dec 5, 2024"
    },
    {
      id: 6,
      title: "The $5 Trillion Liquidity Explosion About to Change Everything",
      excerpt: "How massive liquidity injections are set to transform the cryptocurrency landscape.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      category: "Market Analysis",
      readTime: "8 min read",
      date: "Dec 3, 2024"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="blog" className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our expert analysis and deep dives into the world of Web3 and cryptocurrency.
            </p>
          </motion.div>

          {/* Blog Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group cursor-pointer"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Date */}
                    <p className="text-gray-400 text-sm font-medium">
                      {post.date}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-white font-bold text-xl leading-tight group-hover:text-blue-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4">
                      <motion.button
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                      
                      {/* Share Icon */}
                      <motion.button
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div variants={itemVariants} className="text-center pt-12">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog