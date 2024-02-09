import React, { useState } from 'react';
import Image from 'next/image';
import rating from '../../../public/assets/images/Group 8223.svg';
import profile from '../../../public/assets/images/Mask group.svg';
import leftArrow from '../../../public/assets/images/button.svg';
import leftRight from '../../../public/assets/images/button (1).svg';
import { useMediaQuery } from '@react-hook/media-query';

const cards = [
  {
    id: 0,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 1,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 2,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 3,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 4,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 5,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 6,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 7,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 8,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  {
    id: 9,
    review:
      '“Wow! Met Huurscout vond ik binnen 4 weken een leuke woning. Fantastisch!”',
    name: 'ERIK VAN VEEN',
    desc: 'Geschreven op',
    color: '#b8b6e7',
    source: 'Trustpilot',
  },
  // Add more cards as needed
];

export const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const isLargeScreen = useMediaQuery('(min-width: 425px)');
  const cardsPerPage = isLargeScreen ? 3 : 1;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const cp = currentPage;
  const tp = totalPages;

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const percentageComplete = ((cp - 1) / (tp - 1)) * 100;
  const barColor = `linear-gradient(90deg, #fd8047 ${percentageComplete}%, #ffe6db ${percentageComplete}%)`;

  return (
    <>
      <div className="md:my-[60px] ">
        <div className="min-h-[431px]  flex items-center  md:min-h-[571px] max-w-full bg-[#ffff] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] ">
          <div className="mx-4 md:pl-[117px] text-black">
            <div className="flex gap-[10px]">
              {currentCards.map((item) => (
                <div
                  key={item.id}
                  className="card-1 md:w-[327px] w-full h-[300px] bg-[#FBF4EA] rounded-[10px] p-[20px] flex flex-col justify-between"
                >
                  <Image
                    src={rating}
                    alt=""
                    height={10}
                    width={58.33}
                    // alt="stars"
                  />
                  <p className="text-[18px] leading-[25.2px] font-medium poppins text-[#1A1A1A] pt-[20px]">
                    {item.review}
                  </p>
                  <div className="flex gap-[20px] items-center">
                    <Image src={profile} height={50} width={50} alt="" />
                    <div className=" md:block">
                      <h2 className="text-[10px] leading-[15px] font-bold  tracking-[1.5px] text-[#001B0F] poppins  ">
                        {item.name}
                      </h2>
                      <p className="text-[12px] leading-[16.8px] font-normal poppins text-[#1A1A1A]">
                        {item.desc}{' '}
                        <span className="underline"> {item.source} </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-[432px] flex justify-between  pt-[30px] items-center">
              <div className="w-[180px] md:w-[350px] md:px-2 bg-gray-200 rounded-full h-[4px] dark:bg-[#ffe6db]">
                <div
                  className="bg-[#FF8049] h-[4px] rounded-full"
                  style={{ background: barColor }}
                ></div>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={leftArrow}
                  onClick={prevPage}
                  height={40}
                  width={40}
                  alt="arrow-left"
                />
                <Image
                  src={leftRight}
                  onClick={nextPage}
                  height={40}
                  width={40}
                  alt="arrow-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
