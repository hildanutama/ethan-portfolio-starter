
import React, {useState} from "react";

// icons

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTableau,
  SiMicrosoftsqlserver,
  SiMysql,
  SiOracle,
  SiPandas,
  SiPowerbi,
  SiPostgresql,
  SiScikitlearn,
  SiMicrosoftexcel,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Data Modelling and Analysis',
        icons: [
          <SiMysql key="mysql" />, 
          <SiMicrosoftsqlserver key="mssql" />, 
          <SiPostgresql key="postgresql" />,
          <SiMicrosoftexcel key="excel" />, 
          <SiOracle key="oracle" />
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <FaLaravel key="laravel" />,
          <FaPhp key="php" />,
        ],
      },
      {
        title: 'Data Mining',
        icons: [
          <FaPython key="python" />,
          <SiPowerbi key="powerbi" />,
          <SiPandas key="pandas" />,
          <SiTableau key="tableau" />,
          <SiScikitlearn key="scikitlearn" />,
        ],
      },
    ],
  },
  {
    title: 'Publication',
    info: [
      {
        title: 'Dashboard Strategis untuk Mengukur Ketercapaian Pengembangan Ekonomi Kreatif Kabupaten Bojonegoro',
        stage: '2023',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Information System - Dinamika University formerly STIKOM',
        stage: '2019 - 2024',
        gpa: '3.84',
      },
      {
        title: 'Science - SMAN 10 Surabaya',
        stage: '2016 - 2019',
        gpa: '89',
      },
    ],
  },
];


import Circles from '../../components/Circles';

import { motion } from "framer-motion";
import {fadeIn} from '../../variants';

import CountUp from "react-countup";
import Avatar2 from "../../components/Avatar2";


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar */}
    <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      className="hidden xl:flex absolute top-20 -left-[370px] transform transition-transform duration-500 ease-in-out"
      >
      <Avatar2/>
    </motion.div>
    <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className=" relative flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="h2"
        >
          Data <span className="text-accent">Enthusiast</span>, Fueling insights with data analysis expertise
        </motion.h2>
        <motion.p 
          variants={fadeIn('right', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className=" max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0">
        As a recent Computer Science graduate, I bring a potent blend of expertise in Business Intelligence, Data Science, and Web Development. My academic journey honed my analytical prowess and fortified my leadership and communication skills. Lets drive results together.
        </motion.p>
        {/* counters */}
        <motion.div 
          variants={fadeIn('right', 0.6)}
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="hidden md:flex md:max-w-none max-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
            after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={10}/>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                yEARS OF experience
              </div>
            </div>
             {/* projek */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
             after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={10}/>+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Project Finished
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
        variants={fadeIn('left', 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return ( 
              <div 
                key={itemIndex} 
                className= {`${
                  index === itemIndex &&
                  ' text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } cursor-pointer capitalize xl:text-lg relative after:w-8 
                after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title} 
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) =>{
            return (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) =>{
                    return (
                    <div key={itemIndex} className="text-2xl text-white">{icon} </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
