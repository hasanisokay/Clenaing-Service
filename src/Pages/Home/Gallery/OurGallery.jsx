import React, { useEffect } from 'react';
import { useState } from 'react';

const OurGallery = () => {
    const [imageData, setImageData] = useState([])
    const [active, setActive] = useState("")
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>{
            if(active===""){
                setImageData(data)
            }
            else{
                setImageData(data.filter(item=>item.tag===active))
            }
        })
    },[active])
    console.log(imageData);
    return (
        <div className='bg-[#ecf8ff] pb-[30px]'>
             <ul className={`pb-[30px] grid lg:flex text-center items-center justify-center lg:w-full w-[90%] md:w-[90%] mx-auto lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-[20px] gap-[10px] md:gap-[15px]`} >
                <li title='Click to See All Service Photos' onClick={() => setActive("")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>View All</li>
                <li title='Click to See Residential Service Photos' onClick={() => setActive("Residential")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Residential" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Residential</li>
                <li title='Click to See Commercial Service Photos' onClick={() => setActive("Commercial")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Commercial" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Commercial</li>
                <li title='Click to See Window Service Photos' onClick={() => setActive("Window")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Window" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Window</li>
                <li title='Click to See Kitchen Service Photos' onClick={() => setActive("Kitchen")} className={`cursor-pointer lg:min-w-[120px] min-w-[100px] rounded text-center font-semibold ${active === "Kitchen" ? "bg-[#FFAB00] duration-400 text-white py-[10px] md:py-[12px] lg:py-[16px]" : "bg-[white] duration-500 lg:py-[17px] md:py-[13] py-[11px] text-[#0066B3]"}`}>Kitchen</li>
            </ul>
            <div className='items-center justify-center flex pb-[30px] gap-[20px] w-[90%] mx-auto'>
                {imageData.map((data,index)=> <div className={`h-[300px] ${index===1?"":""}`} key={data.id}><img src={data.imageLink} className='h-full rounded' /></div> )}
            </div>
        </div>
    );
};

export default OurGallery;