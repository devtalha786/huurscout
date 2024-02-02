'use client';
import { containerMaxWidth2 } from '@/theme/theme';
import { Button, Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const FrameTen = () => {
  return (
    <div
      className=" min-h-[836px] mt-[-17px] md:mt-0 bg-[#B8B6E7]  md:flex md:items-center  md:min-h-[661px]  "
      style={{
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="grid grid-cols-12 flex-wrap py-[30px] items-center">
          <div className="col-span-12 md:col-span-5 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <p className="semibold-font max-w-full font-semibold text-[26px]  text-[#242C3C] leading-[24.96px] ">
                Waarom is een huurwoning vinden zo moeilijk
              </p>

              <p className="poppins md:max-w-full max-w-[299px] font-medium text-[14px] leading-[19.6px] text-[#1A1A1A] py-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p className="poppins md:max-w-full max-w-[299px] font-medium text-[14px] leading-[19.6px] text-[#1A1A1A] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.{' '}
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 p-4  ">
            <div>
              <Image
                src="/assets/images/image 246.svg"
                height={1000}
                width={1000}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                alt=" "
              />
              <p className="poppins md:max-w-full max-w-[243px] font-normal py-[15px] text-[12px] leading-[16.8px] text-[#1A1A1A] ">
                Met name in Amsterdam is 40% gestegen
              </p>
              <p className="poppins md:max-w-full max-w-[299px] font-medium text-[14px] leading-[19.6px] text-[#1A1A1A] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
