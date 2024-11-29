'use client'
import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0, y: 20 }}

  className="bg-lime-200 w-full h-screen flex justify-center items-center font-serif mt-16">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center hover:animate-bounce border-8 border-lime-600 border-double">
      <h2 className="text-2xl font-bold underline mb-4">Zara Yousuf Khan</h2>
      <h3>00097798</h3>
      <h3>Saturday 9:00 - 12:00</h3>
    </div>
  </motion.div>
  )
}

export default About