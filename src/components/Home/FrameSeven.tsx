'use client';
import { FaqAccordion } from '@/ui/FaqAccordion';
import Image from 'next/image';
import React, { useState } from 'react';
import leftArrow from '../../../public/assets/images/button.svg';
import leftRight from '../../../public/assets/images/button (1).svg';
import { useMediaQuery } from '@react-hook/media-query';
const cards = [
  {
    heading: 'Vertel ons jouw woonwensen',
    step: ' STAP 1/3',
    desc: ' Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen',
  },
  {
    heading: 'Vertel ons jouw woonwensen',
    step: ' STAP 2/3',
    desc: ' Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen',
  },
  {
    heading: 'Vertel ons jouw woonwensen',
    step: ' STAP 3/3',
    desc: ' Plaats in één minuut jouw zoekopdracht en onze zoekbot begint direct met het vinden van huizen die passen bij jouw woonwensen',
  },
];
export const FrameSeven = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const isLargeScreen = useMediaQuery('(min-width: 2400px)');
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
    <div className="  md:my-[60px] ">
      <div className="  min-h-[693px]   md:flex md:items-center  md:min-h-[571px] max-w-full bg-[#242C3C] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto ">
        <div className="flex flex-wrap w-full py-[40px] md:py-0">
          {/* Column 1 */}
          <div className="md:w-5/12 w-full p-4">
            <div className="max-w-[316px] w-full md:max-w-[300px] mx-auto  md:text-start">
              <h2 className="semibold-font font-semibold text-[26px] md:text-[34px] leading-[26px] text-[#FBF4EA] md:leading-[34px] ">
                Hoe werkt HUURSCOUT
              </h2>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:w-7/12 w-full p-4">
            <div className=" w-full flex md:gap-[10px] justify-center  md:justify-start">
              <div className="card max-w-full w-full md:max-w-[300px] min-h-[407px] rounded-[10px] bg-[#FBF4EA] p-[20px]">
                {currentCards.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2">
                    <h2 className="poppins font-bold text-[18px] leading-[19.8px] text-[#1A1A1A]">
                      {item.heading}
                    </h2>
                    <div className="flex justify-center pt-[20px]">
                      <Image
                        src="/assets/images/Group 392.svg"
                        height={182}
                        width={235}
                        alt=""
                      />
                    </div>
                    <p className="poppins font-bold text-[10px] leading-[15px] tracking-[1.5px] text-[#1A1A1A]">
                      {item.step}
                    </p>
                    <p className="poppins font-medium text-[14px] leading-[19.6px] text-[#1A1A1A]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="card max-w-full hidden md:flex w-full md:max-w-[300px] min-h-[407px] rounded-[10px] bg-[#FBF4EA] p-[20px]">
                <div className="flex flex-col gap-2">
                  <h2 className="poppins font-bold text-[18px] leading-[19.8px] text-[#1A1A1A]">
                    Vertel ons jouw woonwensen
                  </h2>
                  <div className="flex justify-center pt-[20px]">
                    <Image
                      src="/assets/images/Group 392.svg"
                      height={182}
                      width={235}
                      alt=""
                    />
                  </div>
                  <p className="poppins font-bold text-[10px] leading-[15px] tracking-[1.5px] text-[#1A1A1A]">
                    STAP 1/3
                  </p>
                  <p className="poppins font-medium text-[14px] leading-[19.6px] text-[#1A1A1A]">
                    Plaats in één minuut jouw zoekopdracht en onze zoekbot
                    begint direct met het vinden van huizen die passen bij jouw
                    woonwensen.
                  </p>
                </div>
              </div> */}
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
    </div>
  );
};
