'use client';
import { Carousel } from '@mantine/carousel';
import { Button, Container, Progress } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    quote: ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
  },
  {
    id: 2,
    quote: ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
  },
  {
    id: 3,
    quote: ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
  },
];

export const Reviews = () => {
  return (
    <div className="  md:my-[60px] ">
      <div className="  min-h-[431px]   md:flex md:items-center  md:min-h-[571px] max-w-full bg-[#ffff] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] ">
        <div className=" md:pl-[117px] text-black">
          <div className="flex gap-[10px]">
            <Carousel
              // withIndicators
              height="auto"
              slideSize="33.333333%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={2}
              nextControlIcon={<Image src="/assets/images/button (1).svg" height={40} width={40} alt="arrow-left" />}
              previousControlIcon={<Image src="/assets/images/button.svg" height={40} width={40} alt="arrow-left" />}
            >
              {/* ...other slides */}
              {data.map((item, index) => (
                <Carousel.Slide>
                  <div
                    key={index}
                    className="card-1 md:w-[327px] w-full h-[300px] bg-[#FBF4EA] rounded-[10px] p-[20px] flex flex-col justify-between"
                  >
                    <div>
                      <Image src="/assets/images/Group 8223.svg" height={10} width={58.33} alt="stars" />
                      <p className="text-[18px] leading-[25.2px] font-medium poppins text-[#1A1A1A] pt-[20px]">
                        {item.quote}
                      </p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                      <Image src="/assets/images/Mask group.svg" height={50} width={50} alt="" />
                      <div className="hidden md:block">
                        <h2 className="text-[10px] leading-[15px] font-bold  tracking-[1.5px] text-[#001B0F] poppins  ">
                          {item.author}
                        </h2>
                        <p className="text-[12px] leading-[16.8px] font-normal poppins text-[#1A1A1A] ">
                          {item.desc} <span className="underline"> {item.source} </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
          <div className="w-full md:w-[432px] md:flex justify-between hidden pt-[30px] items-center ">
            <div className="flex gap-2 items-center">
              <Image src="/assets/images/button.svg" height={40} width={40} alt="arrow-left" />
              <Image src="/assets/images/button (1).svg" height={40} width={40} alt="arrow-left" />
            </div>
            <div className="w-[327px] bg-gray-200 rounded-full h-[4px] dark:bg-[#ffe6db]">
              <div className="bg-[#FF8049] h-[4px] rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
