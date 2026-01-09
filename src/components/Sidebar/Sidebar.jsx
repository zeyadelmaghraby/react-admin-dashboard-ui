import React, { useState } from 'react'
import { FiChevronDown, FiLogOut, FiMenu, FiX } from 'react-icons/fi'
import { MdDashboard, MdInventory2, MdPeople, MdAttachMoney, MdShare, MdHelp } from 'react-icons/md'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: MdDashboard },
    { id: 2, label: 'Product', icon: MdInventory2 },
    { id: 3, label: 'Customers', icon: MdPeople, active: true },
    { id: 4, label: 'Income', icon: MdAttachMoney },
    { id: 5, label: 'Promote', icon: MdShare },
    { id: 6, label: 'Help', icon: MdHelp },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-light-gray transition-colors"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`w-64 bg-white h-screen fixed left-0 top-0 shadow-lg flex flex-col transition-transform transform md:transform-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } z-40 md:z-auto`}>
        {/* Logo */}
        <div className="px-8 py-6 pt-16 md:pt-6 border-b">
          <h1 className="text-xl font-bold text-dark-text">Dashboard v0.01</h1>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-primary text-white'
                        : 'text-light-text hover:bg-light-gray'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Pro Card */}
        <div className="px-4 py-6 mb-6">
          <div className="bg-gradient-to-b from-primary to-purple-500 rounded-2xl p-4 text-white text-center">
            <p className="text-sm font-semibold mb-3">
              Upgrade to PRO to get access all Features!
            </p>
            <button className="w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Get Pro Now
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-4 py-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-light-gray rounded-full flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
              E
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-dark-text truncate">Evano</p>
              <p className="text-xs text-light-text truncate">Project Manager</p>
            </div>
            <button className="text-light-text hover:text-dark-text transition-colors flex-shrink-0">
              <FiLogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
