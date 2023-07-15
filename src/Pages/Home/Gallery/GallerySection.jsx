
import React from 'react';
import { useState } from 'react';
import Gallery from "react-photo-gallery";
import img1 from "../../../assets/img/1.png"
import img2 from "../../../assets/img/2.png"
import img3 from "../../../assets/img/3.png"
import img4 from "../../../assets/img/4.png"
import img5 from "../../../assets/img/5.png"
import img6 from "../../../assets/img/6.png"
import arrow from "../../../assets/img/up-arrow.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Gallery from 'react-grid-gallery';
const GallerySection = () => {
    
  useEffect(() => {
    AOS.init();
  }, []);
    const [active, setActive] = useState("")
    const allImages = [
        {
            src: img1,
            thumbnail: img1,
            caption: "Residential",
            height: 300,


        },
        {
            src: img2,
            thumbnail: img2,
            caption: "Commercial",
            height: 300,

        },
        {
            src: img3,
            thumbnail: img3,
            caption: "Window",
            height: 300,


        },
        {
            src: img6,
            thumbnail: img6,
            caption: "Kitchen",
            height: 300,

        },
        {
            src: img5,
            thumbnail: img5,
            caption: "Residential",
            height: 300,

        },
        {
            src: img4,
            thumbnail: img4,
            caption: "Commercial",
            height: 300,

        }
    ];

    return (
        <div className='bg-[#ecf8ff] pb-[30px]'>
            <ul className={`pb-[30px] grid lg:flex text-center items-center justify-center lg:w-full w-[90%] md:w-[90%] mx-auto lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-[20px] gap-[10px] md:gap-[15px]`} >
                <li title='Click to See All Service Photos' onClick={() => setActive("")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>View All</li>
                <li title='Click to See Residential Service Photos' onClick={() => setActive("Residential")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Residential" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Residential</li>
                <li title='Click to See Commercial Service Photos' onClick={() => setActive("Commercial")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Commercial" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Commercial</li>
                <li title='Click to See Window Service Photos' onClick={() => setActive("Window")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Window" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Window</li>
                <li title='Click to See Kitchen Service Photos' onClick={() => setActive("Kitchen")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Kitchen" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Kitchen</li>
            </ul>
            <div className='flex justify-center  items-center'
            
            data-aos="slide-left"
            data-aos-duration="900"
            data-aos-delay="500">
                <div className='max-w-[1170px] relative'>
                    <Gallery photos={active === "" ? allImages : allImages.filter(item => item.caption === active)} />;
                    <div className={`${active===""?"lg:top-[30%] lg:left-[4%] lg:right-[55%] lg:min-w-[40%] md:top-[20%] md:left-[5%] md:right-1/2 top-[6%] left-[5%] right-[5%]":"lg:top-[60%] lg:right-[40%] lg:left-[5%] md:right-[40%]  top-[20%] left-[5%]  md:top-[55%] md:left-[3%] "}  absolute  h-[100px]  bg-white px-4 py-2 rounded`}>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-2xl text-[#FFAB00] font-semibold'>Cleaning</p>
                                <p className=''>{active === "" ? "Residential" : active}</p>
                            </div>
                            <div>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mx-auto h-[58px] w-[220px]'><button className='w-full h-full bg-[#0066B3] rounded-lg text-white font-semibold'>View All Projects</button></div>
        </div>
    );
};

export default GallerySection;