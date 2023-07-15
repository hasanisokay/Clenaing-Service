import React from 'react';


const Banner = () => {
    return (
        <div className='bg-[#ecf8ff]'>
            <div className='text-center min-w-[calc(100vw-1200px)] pt-[112px] pb-[61px] mx-auto '>
                <h1 className={`font-bold text-[#FFAB00] text-xl `}>Our Photo Gallery</h1>
                <p className={`text-[#0066B3] font-bold lg:text-4xl md:text-3xl text-2xl `}>Look at Our Cleanta Cleaning <br /> Service Insides</p>
            </div>
        </div>
    );
};

export default Banner;