import React from 'react';
import CountUp from 'react-countup';
import award from "../../../assets/img/awards.svg"
import complete from "../../../assets/img/complete.svg"
import team from "../../../assets/img/team.svg"
import satisfaction from "../../../assets/img/satisfaction.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Flip } from 'react-awesome-reveal';
const Achievement = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='bg-[#0066B3] pb-[130px]'>
            
            <div className='text-center text-white min-w-[calc(100vw-1200px)] pt-[112px] pb-[50px] mx-auto '>
                
                <Flip duration={2000}><h1 className={`font-bold  text-xl `}>Our Best Achievement</h1></Flip>
                <p className={`font-bold lg:text-4xl md:text-3xl text-2xl `}>We Feel Very Proud For Our Great
                    <br />Achievement</p>
            </div>

            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] items-center justify-center w-[90%] mx-auto'>
                <div className='bg-white p-4 min-w-[270px] min-h-[320] rounded flex items-center justify-center flex-col'
                 data-aos="slide-left"
                 data-aos-duration="700"
                 data-aos-delay="500"
                
                >
                    <div>
                        <img src={complete} alt="" />
                    </div>
                    <div className='text-[#FFAB00] mt-[34px] mb-[19px] font-bold text-2xl'>
                        <CountUp
                            start={0}
                            end={3486}
                            duration={10}
                            separator=''
                            suffix='+'
                        ></CountUp>
                    </div>
                    <p className='font-semibold text-[#0066B3]'>Projects Completed</p>
                </div>
                <div className='bg-white p-4 min-w-[270px] min-h-[320] rounded flex items-center justify-center flex-col' 
                 data-aos="slide-left"
                 data-aos-duration="700"
                 data-aos-delay="500"
                >
                    <div>
                        <img src={satisfaction} alt="" />
                    </div>
                    <div className='text-[#FFAB00] mt-[34px] mb-[19px] font-bold text-2xl'>
                        <CountUp
                            start={0}
                            end={99}
                            duration={10}
                            separator=''
                            suffix='%'
                        ></CountUp>
                    </div>
                    <p className='font-semibold text-[#0066B3]'>Satisfcation Rate</p>
                </div>
                <div className='bg-white p-4 min-w-[270px] min-h-[320] rounded flex items-center justify-center flex-col'
                 data-aos="slide-right"
                 data-aos-duration="700"
                 data-aos-delay="500"
                >
                    <div>
                        <img src={team} alt="" />
                    </div>
                    <div className='text-[#FFAB00] mt-[34px] mb-[19px] font-bold text-2xl'>
                        <CountUp
                            start={0}
                            end={45}
                            duration={10}
                            separator=''
                            suffix='+'
                        ></CountUp>
                    </div>
                    <p className='font-semibold text-[#0066B3]'>Team Members</p>
                </div>
                <div className='bg-white p-4 min-w-[270px] min-h-[320] rounded flex items-center justify-center flex-col'
                 data-aos="slide-right"
                 data-aos-duration="700"
                 data-aos-delay="500"
                 >
                    <div>
                        <img src={award} alt="" />
                    </div>
                    <div className='text-[#FFAB00] mt-[34px] mb-[19px] font-bold text-2xl'>
                        <CountUp
                            start={0}
                            end={148}
                            duration={10}
                            separator=''
                            suffix='+'
                        ></CountUp>
                    </div>
                    <p className='font-semibold text-[#0066B3]'>Awards Winning</p>
                </div>
            </div>
        </div>
    );
};

export default Achievement;