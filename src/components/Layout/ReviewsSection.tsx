'use client';
import { Pagination } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
const data = [
  {
    id: 1,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 2,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
  {
    id: 3,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 4,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FF8049',
  },
  {
    id: 5,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
];

export const ReviewsSection = () => {
  return (
    <div
      className=" min-h-[1836px]  md:mt-0 bg-[#FFFFFF]  md:flex md:items-center  md:min-h-[661px]  "
      style={{
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-5 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <p className="semibold-font font-semibold text-[26px] text-center text-[#1A1A1A] leading-[25px] ]">
                Wat anderen zeggen over huurscout
              </p>
            </div>
            <div className="img  md:block py-[30px] flex justify-center">
              <Image
                src="/assets/images/808C02E0-8082-4A85-B401-480BFD71147E 2.svg"
                width={254}
                height={50}
                alt="pilot"
                className="cursor-pointer object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 p-4  ">
            <div className="flex gap-[20px] w-full flex-col md:flex-row scr overflow-x-auto">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="card-1 md:w-400 min-h-[300px]  rounded-[10px] p-[20px] flex flex-col justify-between"
                  style={{ background: item.bg }}
                >
                  <div className="md:w-[300px]">
                    <Image
                      src="/assets/images/Group 8223.svg"
                      height={10}
                      width={58.33}
                      alt="stars"
                    />
                    <p className="text-[18px] leading-[25.2px] font-medium poppins text-[#1A1A1A] pt-[20px]">
                      {item.quote}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="">
                      <h2 className="text-[10px] leading-[15px] font-bold  tracking-[1.5px] text-[#001B0F] poppins  ">
                        {item.author}
                      </h2>
                      <p className="text-[12px] leading-[16.8px] font-normal poppins text-[#1A1A1A] ">
                        {item.desc}{' '}
                        <span className="underline"> {item.source} </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-[20px]">
              <Pagination total={10} color="green" radius="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
