import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import TopBar from '../components/TopBar/TopBar'
import StatCard from '../components/StatCard/StatCard'
import CustomersTable from '../components/CustomersTable/CustomersTable'
import { FiUsers } from 'react-icons/fi'
import { MdPeople } from 'react-icons/md'
import { customersData } from '../data/customers'

const Customers = () => {
  const activeUsers = ['Alex', 'Sarah', 'Mike', 'John']

  return (
    <div className="min-h-screen bg-light-gray">
      <Sidebar />
      <TopBar />

      {/* Main Content */}
      <main className="md:ml-64 px-4 md:px-8 py-4 md:py-8">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard
            title="Total Customers"
            value="5,423"
            change="16% this month"
            isPositive={true}
            icon={FiUsers}
          />
          <StatCard
            title="Members"
            value="1,893"
            change="1% this month"
            isPositive={false}
            icon={MdPeople}
          />
          <StatCard
            title="Active Now"
            value="189"
            avatars={activeUsers}
          />
        </div>

        {/* Customers Table */}
        <CustomersTable customers={customersData} />
      </main>
    </div>
  )
}

export default Customers
