import React from 'react'

function Assignment() {
  return (
    <div className="bg-lime-100 h-screen flex flex-col items-center text-wrap font-serif gap-4 m-auto overflow-hidden pt-16 mt-16 md:flex-row md:flex-wrap lg:flex lg:flex-row">
        <div className="bg-red-400/60 w-[55%] h-[200px] text-center border-x-green-600 border-4 border-y-black hover:animate-bounce md:w-full lg:w-[33%]">The future belongs to those who believe in the beauty of their dreams.</div>
        <div className="bg-blue-400/70 w-[55%] h-[200px] text-center border-x-green-600 border-4 border-y-black hover:animate-bounce md:w-1/2 md:flex-1 lg:w-[33%]">Just one small positive thought in the morning can change your whole day.</div>
        <div className="bg-lime-300/90 w-[55%] h-[200px] text-center border-x-green-600 border-4 border-y-black hover:animate-bounce md:w-1/2 lg:w-[33%]">All our dreams can come true, if we have the courage to pursue them.</div>
    </div>
  )
}

export default Assignment