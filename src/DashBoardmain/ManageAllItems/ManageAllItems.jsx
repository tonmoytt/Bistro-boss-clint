import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ManageAllItems = () => {
      const items = [
    { id: 1, name: 'Roast Duck Breast', price: 14.5, image: '' },
    { id: 2, name: 'Tuna Niçoise', price: 14.5, image: '' },
    // Add more items here
  ];

    return (
         <div className="p-8 max-w-5xl mx-auto">
      <p className="text-center text-yellow-600 italic">---Hurry Up!---</p>
      <h2 className="text-center text-3xl font-semibold my-4">MANAGE ALL ITEMS</h2>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Total items: {items.length}</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Item Image</th>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 font-semibold">{index + 1}</td>
                  <td className="px-4 py-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-md" />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">
                      <FaEdit />
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
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

export default ManageAllItems;