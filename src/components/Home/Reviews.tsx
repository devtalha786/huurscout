'use client';
import Image from 'next/image';
import React, { useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  return (
    <div className="  md:my-[60px] ">
      <div className="  min-h-[431px]  flex items-center  md:min-h-[571px] max-w-full bg-[#ffff] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] ">
        <div className=" md:pl-[117px] text-black">
          <div className="flex gap-[10px]">
            {/* ...other slides */}
            {data.map((item, index) => (
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
            ))}
          </div>
          <div className="w-full md:w-[432px] md:flex justify-between hidden pt-[30px] items-center ">
            <div className="flex gap-2 items-center">
              <Image src="/assets/images/button.svg" height={40} width={40} alt="arrow-left" onClick={prevSlide} />
              <Image src="/assets/images/button (1).svg" height={40} width={40} alt="arrow-left" onClick={nextSlide} />
            </div>
            <div className="w-[327px] bg-gray-200 rounded-full h-[4px] dark:bg-[#ffe6db]">
              <div
                className="bg-[#FF8049] h-[4px] rounded-full"
                style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="w-full">
            <div className="max-w-[327px] w-full ml-[30px] flex justify-between md:hidden pt-[30px] items-center ">
              <div className="w-[101px] bg-gray-200 rounded-full h-[4px] dark:bg-[#ffe6db]">
                <div
                  className="bg-[#FF8049] h-[4px] rounded-full"
                  style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/assets/images/button.svg" height={40} width={40} alt="arrow-left" onClick={prevSlide} />
                <Image
                  src="/assets/images/button (1).svg"
                  height={40}
                  width={40}
                  alt="arrow-left"
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
