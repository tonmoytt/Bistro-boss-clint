import React from 'react';

const Tablebooking = () => {
    return (
        <div className="p-8 bg-white min-h-screen">
      <h2 className="text-center text-yellow-500 mb-2 font-semibold">---Reservation---</h2>
      <h1 className="text-4xl font-bold text-center mb-10">BOOK A TABLE</h1>

      <div className="bg-gray-100 p-8 rounded-md max-w-5xl mx-auto shadow">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Date*</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Time*</label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Guest*</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Phone*</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-md transition"
            >
              Book A Table 🍽️
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Tablebooking;