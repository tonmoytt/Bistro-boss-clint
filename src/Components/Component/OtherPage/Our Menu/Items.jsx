import React from 'react';
import SectionTitle from '../../Shered/SectionTitle/SectionTitle';

const Items = ({ items }) => {
    const { discount, id, image, category, price, description, name } = items
    return (
        <div>
            <div className='mx-auto py-6'>

                <div className='grid grid-cols-2 gap-4 mx-auto'>
                    <div className='mx-auto w-[500px]'>
                        {/* discount section */}
                        <h1 className='relative mb-4 text-end font-semibold  text-[14px]'> Get off  <span className='text-red-600 text-[16px]'> {discount} </span>
                        </h1>
                        <div className="flex justify-end absolute -mt-[27px] ml-[422px]">
                            <div className="border-t  w-10 mr-10 "></div>
                        </div>
                        {/* discount close */}

                        <div className='flex items-center'>
                            <div className='mr-2'>
                                <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={image} alt="" />
                            </div>

                            <div>

                                <div className="flex justify-between items-center w-full">
                                    <h1 className="text-lg font-bold">{name}</h1>
                                    <p className="text-yellow-500 text-lg font-semibold ml-60">${price}</p>
                                </div>



                                <p className='text-sm'>{description} <br /></p>
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default Items;