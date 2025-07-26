import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ManageAllBookings = () => {
  const bookings = [
    { id: 1, email: 'user010@gmail.com', phone: '01822299900', date: '07/11/06', time: '00:00', status: 'Pending' },
    { id: 2, email: 'user010@gmail.com', phone: '01822299900', date: '07/11/06', time: '00:00', status: 'Done' },
    { id: 3, email: 'user010@gmail.com', phone: '01822299900', date: '07/11/06', time: '00:00', status: 'Pending' },
    { id: 4, email: 'user010@gmail.com', phone: '01822299900', date: '07/11/06', time: '00:00', status: 'Done' },
  ];

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      <p className="text-center text-yellow-500 italic text-sm mb-1">--- At a Glance! ---</p>
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Manage All Bookings</h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">
            Total Bookings: <span className="text-yellow-600">{bookings.length}</span>
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-yellow-600 text-white text-left text-sm uppercase">
                <th className="px-6 py-3">User Email</th>
                <th className="px-6 py-3">Phone Number</th>
                <th className="px-6 py-3">Booking Date</th>
                <th className="px-6 py-3">Booking Time</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <tr key={item.id} className="border-t border-gray-200 hover:bg-yellow-50 transition">
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4 font-medium">
                    {item.status === 'Pending' ? (
                      <span className="text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full text-xs">Pending</span>
                    ) : (
                      <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs">Done</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-green-600 text-lg">
                    <button title="Mark as done">
                      <FaCheckCircle className="hover:text-green-800 transition" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllBookings;
