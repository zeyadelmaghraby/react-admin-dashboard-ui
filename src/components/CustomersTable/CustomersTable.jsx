import React, { useState } from 'react'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import StatusBadge from '../StatusBadge/StatusBadge'
import Pagination from '../Pagination/Pagination'

const CustomersTable = ({ customers }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('Newest')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-dark-text">All Customers</h2>
          <p className="text-light-text text-sm mt-1">Active Members</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-48">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-light-gray rounded-lg text-dark-text placeholder-light-text focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-text" size={18} />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-light-gray rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-sm font-medium text-light-text">
                Sort by: <span className="text-dark-text font-semibold">{sortOrder}</span>
              </span>
              <FiChevronDown size={18} className="text-light-text flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="border-b bg-light-gray">
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Customer Name
              </th>
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Company
              </th>
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Phone Number
              </th>
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Email
              </th>
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Country
              </th>
              <th className="px-4 md:px-8 py-4 text-left text-sm font-semibold text-light-text whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-light-gray transition-colors"
              >
                <td className="px-4 md:px-8 py-4 font-semibold text-dark-text whitespace-nowrap">
                  {customer.name}
                </td>
                <td className="px-4 md:px-8 py-4 text-light-text whitespace-nowrap">
                  {customer.company}
                </td>
                <td className="px-4 md:px-8 py-4 text-light-text whitespace-nowrap">
                  {customer.phone}
                </td>
                <td className="px-4 md:px-8 py-4 text-light-text truncate">
                  {customer.email}
                </td>
                <td className="px-4 md:px-8 py-4 text-light-text whitespace-nowrap">
                  {customer.country}
                </td>
                <td className="px-4 md:px-8 py-4 whitespace-nowrap">
                  <StatusBadge status={customer.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination */}
      <div className="px-4 md:px-8 py-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-light-text text-center sm:text-left">
          Showing data 1 to 8 of 256 entries
        </p>
        <Pagination totalPages={40} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

export default CustomersTable
