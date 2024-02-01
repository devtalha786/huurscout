'use client';

import { FaqAccordion } from '@/ui/FaqAccordion';
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

export const Faq = () => {
  return (
    <div className="  md:my-[60px] ">
      <div className="  min-h-[855px]   md:flex md:items-center  md:min-h-[803px] max-w-full bg-[#B8B6E7] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] ">
        <div className="flex flex-wrap w-full">
          {/* Column 1 */}
          <div className="md:w-5/12 w-full p-4">
            <div className="max-w-[316px] w-full md:max-w-[214px] mx-auto text-center md:text-start">
              <h2 className="semibold-font font-semibold text-[26px] md:text-[34px] leading-[26px] text-[#1A1A1A] md:leading-[34px] ">
                Veel gestelde vragen
              </h2>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:w-7/12 w-full p-4">
            <div className="max-w-full md:max-w-[440px] w-full mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
