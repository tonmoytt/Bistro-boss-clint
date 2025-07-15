import React from 'react';

const SectionTitle = ({ Heading, Subheading }) => {
    return (
        <div className='mx-auto text-center md:w-3/12   my-8'>
            <p className='text-yellow-500 mb-2'>{Heading}</p>
            <p className='border-y-4 uppercase text-2xl'>{Subheading}</p>
        </div>
    );
};

export default SectionTitle;