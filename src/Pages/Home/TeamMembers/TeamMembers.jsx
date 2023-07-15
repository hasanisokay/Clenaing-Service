import React from 'react';
import m1 from "../../../assets/img/m1.png"
import m2 from "../../../assets/img/m2.png"
import m3 from "../../../assets/img/m3.png"
import m4 from "../../../assets/img/m4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaArrowRight, FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaShare, FaShareAlt, FaShareAltSquare, FaTwitter } from "react-icons/fa"
const TeamMembers = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='pb-[100px]'>
            
            <Fade duration={5000}> 
            <div className='text-center min-w-[calc(100vw-1200px)] pt-[112px] pb-[72px] mx-auto '>
                <h1 className={`font-bold text-[#FFAB00] text-xl `}>Our Team Members</h1>
                <p className={`text-[#0066B3] font-bold lg         :text-4xl md:text-3xl text-2xl `}>
                    Looking For A World First-Class <br />Clean Expert</p>
            </div>
            </Fade> 
            <div className='flex lg:flex-row items-center justify-center gap-4 flex-col'
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="500"
            >
                <div className={` relative border-b-[#0066B3] text-[#0066B3] duration-500 hover:text-[#FFAB00] hover:border-b-[#FFAB00] border-t-0 mt-[25px] min-h-[270px] min-w-[270px]  mb-[32px] border-b-4 border rounded-xl flex flex-col items-center gap-[20px] justify-center`}
                >
                    <div>
                        <img src={m1} className='w-full h-full' alt="" /></div>
                    <h3 className=' text-3xl font-bold'>Michael X. Daniel</h3>
                    <p className='font-semibold text-black'>Office Cleaner</p>
                    <div className='absolute top-4 left-[16px]'><FaShareAltSquare className='w-8 h-8 ' /> </div>
                    <div className='absolute bg-gradient-to-r from-gray-400 w-[270px] h-[270px] top-0 from-0% to-white to-100% hover:opacity-70  opacity-0'>
                        <div className='my-4 ml-4 flex flex-col gap-2 hover:bg-transparent'>
                            <FaShareAlt className='w-8 p-2 h-8 bg-[#FFAB00] text-white' />
                            <FaFacebookF className='bg-blue-700 text-white p-1 w-8 h-8' />
                            <FaTwitter className='bg-[#00AEEF] p-1 text-white w-8 h-8' />
                            <FaLinkedin className='bg-[#0066B3] p-1 text-white w-8 h-8' />
                            <FaInstagram className='bg-[#D2254D] p-1 text-white w-8 h-8' />


                        </div>
                    </div>
                </div>
                <div className={` relative border-b-[#0066B3] text-[#0066B3] duration-500 hover:text-[#FFAB00] hover:border-b-[#FFAB00] border-t-0 mt-[25px] min-h-[270px] min-w-[270px]  mb-[32px] border-b-4 border rounded-xl flex flex-col items-center gap-[20px] justify-center`}

                >
                    <div>
                        <img src={m2} className='w-full h-full' alt="" /></div>
                    <h3 className=' text-3xl font-bold'>Melanie B. Shove</h3>
                    <p className='font-semibold text-black'>Home Cleaner</p>
                    <div className='absolute top-4 left-[16px]'><FaShareAltSquare className='w-8 h-8 ' /> </div>
                    <div className='absolute bg-gradient-to-r from-gray-400 w-[270px] h-[270px] top-0 from-0% to-white to-100% hover:opacity-70  opacity-0'>
                        <div className='my-4 ml-4 flex flex-col gap-2 hover:bg-transparent'>
                            <FaShareAlt className='w-8 p-2 h-8 bg-[#FFAB00] text-white' />
                            <FaFacebookF className='bg-blue-700 text-white p-1 w-8 h-8' />
                            <FaTwitter className='bg-[#00AEEF] p-1 text-white w-8 h-8' />
                            <FaLinkedin className='bg-[#0066B3] p-1 text-white w-8 h-8' />
                            <FaInstagram className='bg-[#D2254D] p-1 text-white w-8 h-8' />


                        </div>
                    </div>
                </div>
                <div className={` relative border-b-[#0066B3] text-[#0066B3] duration-500 hover:text-[#FFAB00] hover:border-b-[#FFAB00] border-t-0 mt-[25px] min-h-[270px] min-w-[270px]  mb-[32px] border-b-4 border rounded-xl flex flex-col items-center gap-[20px] justify-center`}

                >
                    <div>
                        <img src={m3} className='w-full h-full' alt="" /></div>
                    <h3 className=' text-3xl font-bold'>William R. Smith</h3>
                    <p className='font-semibold text-black'>Office Cleaner</p>
                    <div className='absolute top-4 left-[16px]'><FaShareAltSquare className='w-8 h-8 ' /> </div>
                    <div className='absolute bg-gradient-to-r from-gray-400 w-[270px] h-[270px] top-0 from-0% to-white to-100% hover:opacity-70  opacity-0'>
                        <div className='my-4 ml-4 flex flex-col gap-2 hover:bg-transparent'>
                            <FaShareAlt className='w-8 p-2 h-8 bg-[#FFAB00] text-white' />
                            <FaFacebookF className='bg-blue-700 text-white p-1 w-8 h-8' />
                            <FaTwitter className='bg-[#00AEEF] p-1 text-white w-8 h-8' />
                            <FaLinkedin className='bg-[#0066B3] p-1 text-white w-8 h-8' />
                            <FaInstagram className='bg-[#D2254D] p-1 text-white w-8 h-8' />


                        </div>
                    </div>
                </div>
                <div className={` relative border-b-[#0066B3] text-[#0066B3] duration-500 hover:text-[#FFAB00] hover:border-b-[#FFAB00] border-t-0 mt-[25px] min-h-[270px] min-w-[270px]  mb-[32px] border-b-4 border rounded-xl flex flex-col items-center gap-[20px] justify-center`}                >
                    <div>
                        <img src={m4} className='w-full h-full' alt="" /></div>
                    <h3 className=' text-3xl font-bold'>Michael X. David</h3>
                    <p className='font-semibold text-black'>Office Cleaner</p>
                    <div className='absolute top-4 left-[16px]'><FaShareAltSquare className='w-8 h-8 ' /> </div>
                    <div className='absolute bg-gradient-to-r from-gray-400 w-[270px] h-[270px] top-0 from-0% to-white to-100% hover:opacity-70  opacity-0'>
                        <div className='my-4 ml-4 flex flex-col gap-2 hover:bg-transparent'>
                            <FaShareAlt className='w-8 p-2 h-8 bg-[#FFAB00] text-white' />
                            <FaFacebookF className='bg-blue-700 text-white p-1 w-8 h-8' />
                            <FaTwitter className='bg-[#00AEEF] p-1 text-white w-8 h-8' />
                            <FaLinkedin className='bg-[#0066B3] p-1 text-white w-8 h-8' />
                            <FaInstagram className='bg-[#D2254D] p-1 text-white w-8 h-8' />


                        </div>
                    </div>
                </div>



            </div>
            <div className='mx-auto h-[58px] w-[220px] text-center '>
                <button className='w-full h-full bg-[#0066B3] text-center rounded-lg text-white font-semibold'>View All  Members <FaArrowRight className='w-4 h-4 inline ml-2' /> </button>
            </div>
        </div>
    );
};

export default TeamMembers;