// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Business Intelligence For Creative Economy Development',
          path: '/p-2.png',
          demo: "https://www.novypro.com/project/business-intelligence-in-the-strategy-for-developing-the-creative-economic-potential-of-bojonegoro-district",
        },
      ],
    },
    {
      images: [
        {
          title: 'Business Intelligence For Hospital Management performance',
          path: '/p-3.png',
          demo: "https://www.novypro.com/project/business-management-indicator-for-hospital",
        },
      ],
    },
    {
      images: [
        {
          title: 'Sentiment Analysis with web scrapping',
          path: '/osn.png',
          demo: "https://github.com/hildanutama/",
        },
      ],
    },
    {
      images: [
        {
          title: 'Risk Analytics In Banking & Financial Services',
          path: '/risk.jpg',
          demo: "https://github.com/hildanutama/",
        },
      ],
    },
    {
      images: [
        {
          title: 'Market basket Analysis using Apriori',
          path: '/mba.png',
          demo: "https://github.com/hildanutama/",
        },
      ],
    },
    {
      images: [
        {
          title: 'Data Exporation Marriege and Divorce analysis',
          path: '/map.png',
          demo: "https://public.tableau.com/app/profile/hildan.utama/vizzes",
        },
      ],
    },
    {
      images: [
        {
          title: 'Website Direktori Ekspor',
          path: '/p-1.png',
          demo: "https://www.exportdirektori.com/",
        
        },
      ],
    },
  ],
};

// icons
import {BsArrowRight} from 'react-icons/bs';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Pagination } from 'swiper';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[380px]"
    >
      {workSlider.slides.map((slide, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='grid grid-cols-1 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden'>
                    {/* image */}
                    <Image src={image.path} width={700} height={400} alt='' className='relative rounded-lg overflow-hidden flex items-center justify-center group'/>
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] 
                    opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* Title */}
                      <div className='delay-100'>{image.title}</div>
                      {/* Button */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'> 
                        <div className="justify-around">
                          {/* Button */}
                          <button className=' text-accent font-bold py-2 px-4 rounded-full '>
                            <a href={image.demo} target="_blank" rel="noopener noreferrer">
                              <BsArrowRight />
                            </a>
                          </button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;


