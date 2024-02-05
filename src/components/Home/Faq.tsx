'use client';

import { FaqAccordion } from '@/ui/FaqAccordion';
import { Box } from '@mantine/core';
import React from 'react';

export const Faq = () => {
  return (
    <div className="  md:my-[60px] ">
      <Box
        sx={(theme) => ({
          [theme.fn.smallerThan('md')]: {
            borderRadius: '10px 10px 0px 0px',
          },
          borderRadius: '15px',
        })}
        className="  min-h-[800px]   md:flex md:items-center  md:min-h-[803px] max-w-full bg-[#B8B6E7] sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto  "
      >
        <div className="flex flex-wrap w-full">
          {/* Column 1 */}
          <div className="md:w-5/12 w-full p-4">
            <div className="max-w-[316px] w-full md:max-w-[214px] mx-auto text-center md:text-start pt-[50px]">
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
      </Box>
    </div>
  );
};
