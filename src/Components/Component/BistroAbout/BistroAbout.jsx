import React from 'react';
import img1 from '../../../assets/Home-img/images (2).jpg'
const BistroAbout = () => {
    return (
        <div className='py-6'>
            <img className='h-96 w-9/12 mx-auto relative' src={img1} alt="" />
            <div className=' -mt-60 w-6/12 absolute ml-[260px] py-4 rounded-t-md bg-base-100'>
                <p className='text-2xl text-center'>Bistro boss</p>
                <p className='   text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odio <br />quasi! Reiciendis exercitationem quae autem tenetur at recusandae facilis. Animi.</p>
            </div>
        </div>
    );
};

export default BistroAbout;