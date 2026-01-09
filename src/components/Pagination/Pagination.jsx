import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Pagination = ({ totalPages = 40, currentPage = 1, onPageChange }) => {
  const [page, setPage] = useState(currentPage)

  const handlePrevious = () => {
    if (page > 1) {
      const newPage = page - 1
      setPage(newPage)
      onPageChange?.(newPage)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1
      setPage(newPage)
      onPageChange?.(newPage)
    }
  }

  const handlePageClick = (pageNum) => {
    setPage(pageNum)
    onPageChange?.(pageNum)
  }

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1, 2, 3, 4)
      if (totalPages > 4) {
        pages.push('...')
      }
      pages.push(totalPages)
    }
    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 mt-6 md:mt-8">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className="p-2 hover:bg-light-gray rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft size={18} className="text-light-text md:w-5 md:h-5" />
      </button>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {pageNumbers.map((pageNum, index) => (
          <div key={index}>
            {pageNum === '...' ? (
              <span className="px-2 py-2 text-light-text text-sm">...</span>
            ) : (
              <button
                onClick={() => handlePageClick(pageNum)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base transition-colors ${
                  pageNum === page
                    ? 'bg-primary text-white'
                    : 'text-light-text hover:bg-light-gray'
                }`}
              >
                {pageNum}
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="p-2 hover:bg-light-gray rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronRight size={18} className="text-light-text md:w-5 md:h-5" />
      </button>
    </div>
  )
}

export default Pagination
