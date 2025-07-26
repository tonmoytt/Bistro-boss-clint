import React from 'react';
import { FaTrash, FaUserShield } from 'react-icons/fa';

const users = [
  { id: 1, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 2, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 3, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 4, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 5, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 6, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 7, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 8, name: 'John', email: 'john@gmail.com', role: 'user' },
  { id: 9, name: 'tonmoytafsirul9@gmail.com', email: 'tonmoytafsirul9@gmail.com', role: 'user' },
];

const AllUsers = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 uppercase">Manage All Users</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <h3 className="text-lg font-semibold px-6 py-4 border-b">Total users: <span className="font-bold">{users.length}</span></h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="bg-[#D19F54] text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className={`px-6 py-4 ${user.email.includes('tonmoytafsirul9') ? 'text-red-600 font-bold' : ''}`}>
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-[#D19F54] text-white px-2 py-2 rounded-lg hover:bg-yellow-600 transition">
                      <FaUserShield />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-red-600 text-white px-2 py-2 rounded-lg hover:bg-red-700 transition">
                      <FaTrash />
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

export default AllUsers;
