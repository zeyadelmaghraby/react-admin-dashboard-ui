import React from 'react'

const StatusBadge = ({ status }) => {
  const isActive = status === 'Active'
  
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
        isActive
          ? 'bg-success-light text-success-dark'
          : 'bg-danger-light text-danger-dark'
      }`}
    >
      {status}
    </span>
  )
}

export default StatusBadge
