import React from 'react'
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'

const StatCard = ({ title, value, change, isPositive, icon: Icon, avatars }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0">
        <p className="text-light-text text-xs md:text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-2">{value}</h3>
        
        {change && (
          <div className="flex items-center gap-1">
            {isPositive ? (
              <>
                <FiTrendingUp className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-green-500 text-xs md:text-sm font-medium">↑ {change}</span>
              </>
            ) : (
              <>
                <FiTrendingDown className="text-red-500 flex-shrink-0" size={16} />
                <span className="text-red-500 text-xs md:text-sm font-medium">↓ {change}</span>
              </>
            )}
          </div>
        )}
      </div>

      {Icon && (
        <div className="w-14 h-14 md:w-16 md:h-16 bg-light-gray rounded-full flex items-center justify-center flex-shrink-0">
          <Icon size={24} className="text-primary md:w-8 md:h-8" />
        </div>
      )}

      {avatars && (
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-light-gray border-2 border-white flex items-center justify-center text-xs md:text-sm font-semibold text-dark-text flex-shrink-0"
                title={avatar}
              >
                {avatar.charAt(0).toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StatCard
