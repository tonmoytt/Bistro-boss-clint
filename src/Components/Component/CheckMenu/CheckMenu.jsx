import React from 'react';
import SectionTitle from '../Shered/SectionTitle/SectionTitle';
import img from './../../../assets/Home-img/download (2).jpg'

const CheckMenu = () => {
    return (
        <div className='mx-auto py-6'>
            <SectionTitle Subheading={'Check menu'}
                Heading={' Check it out'}>

            </SectionTitle>
            <div className='grid grid-cols-2 gap-4 mx-auto'>
                <div className='mx-auto'>


                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>
                    {/* section2 */}
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>
                    {/* section3 */}
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>
                    {/* section2 */}
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>
                    {/* section3 */}
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img className='w-14 h-14 rounded-b-full rounded-tr-full ' src={img} alt="" />
                        </div>

                        <div>


                            <div className='flex'>
                                <h1 className='text-xl font-bold'>Roste Duck Breate-----  </h1>
                                <p className='text-yellow-500 ml-12'>$15.5</p>
                            </div>

                            <p className='text-sm'>Lorem ipsum dolor sit amet consect <br />consectetur adipisicing elit. amet consect <br /></p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
               <div className="relative w-max mx-auto ">
  <button className="text-black px-4 py-2  font-semibold">View full Menu</button>
  <div className="absolute left-0 bottom-0 w-full rounded-b-xl h-[3px] bg-gradient-to-b from-gray-500 to-transparent"></div>
</div>


            </div>
        </div>
    );
};

export default CheckMenu;