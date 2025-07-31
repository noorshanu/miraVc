import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(14)
  const [selectedTime, setSelectedTime] = useState('')
  const [currentMonth, setCurrentMonth] = useState('July 2025')

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const calendarVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const timeSlots = [
    '10:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'
  ]

  const calendarDays = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31]
  ]

  return (
    <section id="contact" className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Left Section - Booking Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium">
                WANT TO KNOW MORE?
              </p>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight">
                BOOK<br />INTRO CALL
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                WHAT DO YOU GET ON THIS FREE MEETING?
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Q&A</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Product growth discussion</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Customized marketing suggestions and follow up with key highlights.</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">Essential guidance on the quickest way to reach point B.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Calendar Widget */}
          <motion.div variants={calendarVariants} className="lg:col-span-3">
            <div className="bg-gray-900 rounded-lg p-8 max-w-md mx-auto">
              {/* Calendar Header */}
              <div className="text-center mb-6">
                <h3 className="text-white text-xl font-semibold mb-4">Select a Day</h3>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <span className="text-white font-medium">{currentMonth}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="mb-6">
                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                    <div key={day} className="text-gray-400 text-xs text-center py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="space-y-1">
                  {calendarDays.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-cols-7 gap-1">
                      {week.map((day) => (
                        <motion.button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`w-10 h-10 rounded-full text-sm font-medium transition-colors duration-200 ${
                            selectedDate === day
                              ? 'bg-gray-700 text-white border border-white'
                              : day >= 14 && day <= 19
                              ? 'text-gray-500 cursor-not-allowed'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`}
                          whileHover={day < 14 || day > 19 ? { scale: 1.1 } : {}}
                          whileTap={day < 14 || day > 19 ? { scale: 0.9 } : {}}
                          disabled={day >= 14 && day <= 19}
                        >
                          {day}
                        </motion.button>
                      ))}
                    </div>
                  ))}
                </div>

                {/* No Times Overlay */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                  <p className="text-gray-400 text-sm text-center mb-2">No times in July</p>
                  <motion.button
                    className="text-yellow-400 text-sm flex items-center justify-center space-x-1 mx-auto"
                    whileHover={{ x: 5 }}
                  >
                    <span>View next month</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Time Zone */}
              <div className="border-t border-gray-700 pt-4">
                <label className="text-gray-400 text-sm block mb-2">Time zone</label>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Dubai Time (16:39)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact