import React from 'react';
import { BadgeCheck, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const payments = [
  { id: 'INV-001', email: 'user1@gmail.com', method: 'Bkash', date: '2025-07-26', amount: '৳1200', status: 'Success' },
  { id: 'INV-002', email: 'user2@gmail.com', method: 'Nagad', date: '2025-07-25', amount: '৳800', status: 'Failed' },
  { id: 'INV-003', email: 'user3@gmail.com', method: 'Card', date: '2025-07-23', amount: '৳500', status: 'Success' },
];

const PaymentHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 md:p-10 min-h-screen bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Payment History
      </h2>

      <div className="max-w-6xl mx-auto shadow-xl rounded-xl bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-6 py-3 font-semibold">Invoice ID</th>
                <th className="px-6 py-3 font-semibold">User Email</th>
                <th className="px-6 py-3 font-semibold">Method</th>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-yellow-50 transition-all duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    <span
                      className={`flex items-center gap-1 font-medium ${
                        item.status === 'Success'
                          ? 'text-green-600'
                          : 'text-red-500'
                      }`}
                    >
                      {item.status === 'Success' ? (
                        <BadgeCheck size={16} />
                      ) : (
                        <XCircle size={16} />
                      )}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentHistory