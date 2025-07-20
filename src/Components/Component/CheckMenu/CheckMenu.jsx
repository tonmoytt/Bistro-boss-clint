import React from 'react';
import SectionTitle from '../Shered/SectionTitle/SectionTitle';
import img from './../../../assets/menu picture/duck.jpg';
import img1 from './../../../assets/menu picture/salmon.jpg';
import img2 from './../../../assets/menu picture/s2.jpg';
import img3 from './../../../assets/menu picture/grill.jpg';
import img4 from './../../../assets/menu picture/p5.jpg';
import img5 from './../../../assets/menu picture/choumin.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Roast Duck Breast',
    price: '$15.5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: img,
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    price: '$18.0',
    description: 'Fresh salmon grilled to perfection with herbs.',
    img: img1,
  },
  {
    id: 3,
    name: 'Caesar Salad',
    price: '$12.0',
    description: 'Classic Caesar salad with homemade dressing.',
    img: img2,
  },
  {
    id: 4,
    name: 'BBQ Ribs',
    price: '$20.5',
    description: 'Juicy BBQ ribs slow-cooked and sauced.',
    img: img3,
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    price: '$14.0',
    description: 'Thin crust pizza with fresh mozzarella and basil.',
    img: img4,
  },
  {
    id: 6,
    name: 'Spaghetti Carbonara',
    price: '$16.5',
    description: 'Classic Italian pasta with creamy sauce.',
    img: img5,
  },
];

const CheckMenu = () => {
  // Split menuItems in half for 2 columns
  const half = Math.ceil(menuItems.length / 2);
  const firstHalf = menuItems.slice(0, half);
  const secondHalf = menuItems.slice(half);

  const renderMenuItems = (items) =>
    items.map(({ id, name, price, description, img }) => (
      <div key={id} className="flex items-center mb-6 last:mb-0">
        <img
          className="w-14 h-14 rounded-b-full rounded-tr-full mr-4 object-cover"
          src={img}
          alt={name}
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-yellow-500 font-semibold">{price}</p>
          </div>
          <p className="text-sm text-gray-600 leading-snug">{description}</p>
        </div>
      </div>
    ));

  return (
    <div className="mx-auto py-10 max-w-6xl px-4 md:px-0">
      <SectionTitle Subheading="Check menu" Heading="Check it out" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <div>{renderMenuItems(firstHalf)}</div>
        <div>{renderMenuItems(secondHalf)}</div>
      </div>

      <div className="mt-12 text-center">
        <button className="relative inline-block text-black font-semibold px-6 py-3 rounded-md hover:text-yellow-500 transition-colors duration-300">
          View Full Menu
          <span className="absolute left-0 bottom-0 w-full h-[3px] rounded-b-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></span>
        </button>
      </div>
    </div>
  );
};

export default CheckMenu;
