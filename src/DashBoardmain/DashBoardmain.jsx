import React from 'react';
import {
  FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart
} from 'react-icons/fa';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend
} from 'recharts';
// import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
 

const barData = [
  { name: 'Dessert', count: 20 },
  { name: 'Pizza', count: 25 },
  { name: 'Salad', count: 20 },
  { name: 'Soup', count: 25 },
  { name: 'Drinks', count: 15 }
];

const pieData = [
  { name: 'Dessert', value: 20 },
  { name: 'Pizza', value: 25 },
  { name: 'Salad', value: 20 },
  { name: 'Soup', value: 25 },
  { name: 'Drinks', value: 15 }
];

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#AF19FF'];

const DashBoardmain = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Sidebar */}
      {/* <DashboardNavbar /> Using extracted sidebar */}

      {/* Main Dashboard */}
      <main className="flex-1 p-8 transition-all duration-300">
        <h1 className="text-xl font-semibold mb-6">Hi, WELCOME BACK!</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-purple-400 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <FaDollarSign size={30} />
            <h2 className="text-2xl font-bold">1000</h2>
            <p>Revenue</p>
          </div>
          <div className="bg-yellow-400 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <FaUsers size={30} />
            <h2 className="text-2xl font-bold">1500</h2>
            <p>Customers</p>
          </div>
          <div className="bg-pink-400 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <FaBoxOpen size={30} />
            <h2 className="text-2xl font-bold">103</h2>
            <p>Products</p>
          </div>
          <div className="bg-sky-400 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <FaShoppingCart size={30} />
            <h2 className="text-2xl font-bold">500</h2>
            <p>Orders</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
            <BarChart width={300} height={200} data={barData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8">
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
            <PieChart width={300} height={200}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoardmain;
