import React from 'react';

const Addmenu = () => {
    return (
        <div className="p-8 bg-white min-h-screen">
            <h2 className="text-center text-xl text-yellow-500 mb-2 font-semibold">---What's new?---</h2>
            <h1 className="text-4xl font-bold text-center mb-10">ADD AN ITEM</h1>

            <div className="bg-gray-100 p-8 rounded-md max-w-4xl mx-auto shadow">
                <form>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Recipe name*</label>
                            <input
                                type="text"
                                placeholder="Recipe name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Price*</label>
                            <input
                                type="text"
                                placeholder="Price"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Category*</label>
                            <select
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option>Category</option>
                                <option>Pizza</option>
                                <option>Salad</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 text-gray-700 font-medium">Recipe Details*</label>
                        <textarea
                            rows="4"
                            placeholder="Recipe Details"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1 text-gray-700 font-medium">Choose File</label>
                        <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-yellow-400 file:rounded file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100" />
                    </div>

                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                    >
                        Add Item 🍴
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addmenu;