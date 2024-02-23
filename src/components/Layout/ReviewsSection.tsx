'use client';
import { Pagination } from '@mantine/core';
import Image from 'next/image';
import React, { useState } from 'react';
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
    bg: '#B8B6E7',
  },
  {
    id: 6,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
  {
    id: 7,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 8,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
  {
    id: 9,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 10,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
  {
    id: 11,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 12,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 13,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
  {
    id: 14,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 15,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FF8049',
  },
  {
    id: 16,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#B8B6E7',
  },
  {
    id: 17,
    quote:
      ' “Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    author: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    source: 'Trustpilot',
    bg: '#FBF4EA',
  },
];

export const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Change this number based on how many items you want to display per page

  // Calculate the index range of the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  return (
    <div
      className=" min-h-[1000px]  md:mt-0 bg-[#FFFFFF]  md:flex md:items-center  md:min-h-[661px]  "
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
              {currentPageData.map((item, index) => (
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
              <Pagination
                total={Math.ceil(data.length / itemsPerPage)} // Calculate total number of pages based on data length and items per page
                color="green"
                radius="lg"
                value={currentPage} // Pass current page state
                onChange={handlePageChange} // Handle page change
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
