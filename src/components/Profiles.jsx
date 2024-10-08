import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import {RxArrowTopRight} from 'react-icons/rx'
import { EffectCoverflow, Pagination, Navigation,FreeMode,Autoplay } from 'swiper/modules';
import { FaLinkedin } from "react-icons/fa";


export default function Profiles(){
    
    const ProfilesData=[
        {
                name:"Codechef",
                pic:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png",
                description:(<p>(Highest Rated : 1650)</p>),
                link:"https://www.codechef.com/users/gunavardhan27",
            },
            {
                name:"LeetCode",
                pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OLhpfd9XJnvSrvV48lTTdQmWmV82Qm3jkM8gtWbBg69a7ydQTNAewakMbQn7bK7kW6I&usqp=CAU",
                description:(<p>(Highest Rated : 1780)</p>),
                link:"https://leetcode.com/u/gunavardhan27/",
            },
        {
            name:"GeeksForGeeks",
            pic:"https://i.ytimg.com/vi/8pG8wbqPQGU/sddefault.jpg",
            description:(<p>Problems Solved : 120</p>),
            link:"https://www.geeksforgeeks.org/user/bgunavarr0eu/",
        },
        {
            name:"GitHub",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8El9ay-ffxJvETGylQQ1hG9NfRk_PwR2C9sjzmNm4Dw&s",
            description:"Repositories : 23",
            link:"https://github.com/gunavardhan27",
        },
        {
            name:"LinkedIn",
            pic:"data:image/png;base64,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",
            description:"Connections : 160",
            link:"https://www.linkedin.com/in/guna-vardhan-557a06254/",
        },
    ]
        return (

                
            
           <div className='w-full flex justify-center items-center flex-col gap-3'>
           <h1 className='flex items-center justify-center text-3xl mb-8 font-bold  dark:text-yellow-50'>MY PROFILES</h1>
            <Swiper
            breakpoints={{
                340:{
                    slidesPerView:1,
                    spaceBetween:15,
                },
                500:{
                    slidesPerView:2,
                    spaceBetween:15
                },
                800:{
                    slidesPerView:3,
                    spaceBetween:15,
                },
                
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={5000}
          modules={[FreeMode, Pagination, Autoplay]}
            className='max-w-[100%]'>
                {ProfilesData.map(data=>(
                    <SwiperSlide>

                <div className=" dark:bg-slate-600 text-black dark:text-white flex flex-col items-center justify-around mb-20 
                 group relative shadow-lg rounded-xl px-4 py-6
                 h-[300px] w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer bg-violet-200">
  
                 <img className='w-[50px] h-[35px] md:w-[80px] rounded-md md:h-[60px] lg:w-[120px] lg:h-[80px] m-[10px] sm:m-[15px] md:m-[20px]' src={data.pic} alt={data.name} />
  
                  <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 font-bold text-center'>
                  {data.name}
                 </h1>
  
                 <p className='text-sm sm:text-base md:text-lg lg:text-xl text-center'>
                  {data.description}
                 </p>
  
                 <a href={data.link} className="text-xs sm:text-sm md:text-base lg:text-lg underline">
                    View
                 </a>
  
  <RxArrowTopRight className="absolute bottom-3 left-3 w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] 
                              lg:w-[35px] lg:h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
</div>

                    </SwiperSlide>
                ))}

            </Swiper>
           </div>
    )
}