// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxBadge,
  RxArrowTopRight,
  RxBarChart,
  RxPieChart,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Backend Developer',
    company: '2022 - Yayasan Sekoah Ekspor',
    description: 'Designed and optimized a relational database schema for a directory export website, collaborating on its development using the Laravel framework.',
  },
  {
    icon: <RxBarChart />,
    title: 'IT Staff Analyst',
    company: '2021 - SDS Nurul Huda Gayungan',
    description: 'Used clustering to group students by ability and developed a professional profile website for SD Nurul Huda Elementary School',
  },
  {
    icon: <RxPieChart />,
    title: 'Technical Asistant',
    company: 'Workshop Artificial Intelligence',
    description: 'Supported 50 international DILI university students in ETL, data processing, and Tableau dashboard creation to enhance data presentation skills.',
  },
  {
    icon: <RxBadge/>,
    title: 'Volunteer',
    company: 'FIFA World Cup U-17 2023 Indonesia ',
    description: 'Supported transportation operations at venues, load zone control, and designing a one-way traffic flow blueprint within the venue area',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper/core'; // Make sure to import SwiperCore and Pagination

SwiperCore.use([Pagination]); // Make sure to use Pagination

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }} // Make sure pagination is set correctly
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <div className="mb-2 text-lg font-light">{item.company}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
              
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

