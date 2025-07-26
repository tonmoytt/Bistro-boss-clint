import React, { useState } from 'react';

const UpdateManageItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
    // TODO: send data to backend
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6">UPDATE ITEM</h2>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow">
        <div className="mb-4">
          <label className="block font-medium mb-1">Recipe name*</label>
          <input
            type="text"
            name="name"
            placeholder="Recipe name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300"
            required
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium mb-1">Category*</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300"
              required
            >
              <option value="">Category</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="block font-medium mb-1">Price*</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Recipe Details*</label>
          <textarea
            name="details"
            placeholder="Recipe Details"
            value={formData.details}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded border border-gray-300"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-800 hover:to-yellow-700 text-white font-semibold py-2 px-6 rounded"
          >
            Update Recipe Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateManageItem;
