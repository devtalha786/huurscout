'use client';

import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const Contact = () => {
  return (
    <Box>
      <div className="  min-h-[834px]     md:min-h-[650px] max-w-full  sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] py-[50px] ">
        <div className="grid  grid-cols-12 pt-[50px]">
          {/* Column 1 */}
          <div className="col-span-12 md:col-span-6  p-4">
            <div className="max-w-[316px] w-full  mx-4  ">
              <h2 className="semibold-font font-semibold text-[38px]  leading-[41.8px] text-[#242C3C]  ">
                Vragen of suggesties?
              </h2>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-12 md:col-span-6  p-4">
            <div className="mx-4 md:mx-0">
              <div className="flex flex-col gap-3">
                <h1 className="poppins font-bold text-[12px] leading-[16.8px] text-[#1A1A1A]">Kom maar op</h1>
                <p className="poppins font-medium text-[14px] leading-[19.6px] text-[#1A1A1A] max-w-[296px] w-full">
                  Kom maar door met je bericht. We reageren gewoonlijk binnen 24 uur. Kom maar door met je bericht. We
                  reageren gewoonlijk binnen 24 uur.
                </p>
                <div
                  className="card p-[20px] max-w-[327px] flex gap-5 w-full bg-white rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <Image src="/assets/images/image 257.svg" height={32} width={32} alt="whats app" />
                  <div>
                    <h2 className="poppins font-semibold text-[18px]  leading-[25.2px] text-[#242C3C] ">
                      Via Whatsapp
                    </h2>
                    <p className="poppins font-medium text-[14px] underline leading-[19.6px] text-[#0F172A] pt-1">
                      +31 6 25165 304
                    </p>
                  </div>
                </div>
                <div
                  className="card p-[20px] max-w-[327px] flex gap-5 w-full bg-white rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <Image src="/assets/images/image 258.svg" height={32} width={32} alt="whats app" />
                  <div>
                    <h2 className="poppins font-semibold text-[18px]  leading-[25.2px] text-[#242C3C] ">Via email</h2>
                    <p className="poppins font-medium text-[14px] underline leading-[19.6px] text-[#0F172A] pt-1">
                      info@huurscout.nl
                    </p>
                  </div>
                </div>
                <div
                  className="card p-[20px] max-w-[327px] flex gap-5 w-full bg-white rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <Image src="/assets/images/Google_Maps_icon_(2020) 1.svg" height={39} width={27} alt="whats app" />
                  <div>
                    <h2 className="poppins font-semibold text-[18px]  leading-[25.2px] text-[#242C3C] ">
                      Solostraat 73
                    </h2>
                    <p className="poppins font-medium text-[14px] underline leading-[19.6px] text-[#0F172A] pt-1">
                      1059 GV Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
