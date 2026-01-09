import React from 'react'
import { FiSearch } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className="md:ml-64 px-4 md:px-8 py-6 bg-white border-b">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-12 md:pt-0">
        <h2 className="text-2xl font-semibold text-dark-text">
          Hello Evano 👋
        </h2>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 bg-light-gray rounded-lg text-dark-text placeholder-light-text focus:ring-2 focus:ring-primary focus:bg-white transition-all"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-light-text" size={20} />
        </div>
      </div>
    </div>
  )
}

export default TopBar
