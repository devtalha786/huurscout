'use client';

import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    value: 'Amsterdam',
  },
  {
    id: 2,
    value: 'tot €3.000 /maand',
  },
  {
    id: 3,
    value: 'min. 30m2',
  },
  {
    id: 4,
    value: 'Min. 1 slaaplamer',
  },
];

export const SecondComponent = () => {
  return (
    <Box
      className="     bg-[#B8B6E7]"
      sx={(theme) => ({
        [theme.fn.smallerThan('md')]: {
          borderRadius: '10px 10px 0px 0px',
        },
        borderRadius: 'none',
      })}
    >
      <div className="  min-h-[834px]     md:min-h-[650px] max-w-full  sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto rounded-[15px] py-[50px] ">
        <div className="flex flex-wrap gap-[30px] p-4 md:justify-center mx-4 md:mx-0 ">
          {data.map((item) => (
            <div className="flex gap-2 items-center">
              <Image src="/assets/images/Untitled.svg" width={30} height={30} alt="tick" />
              <p className="poppins text-[12px] leading-[16.8px] font-normal text-[#1A1A1A]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="grid  grid-cols-12 pt-[50px]">
          {/* Column 1 */}
          <div className="col-span-12 md:col-span-6  p-4">
            <div className="max-w-[270px] w-full md:max-w-[214px] mx-4  ">
              <h2 className="semibold-font font-semibold text-[26px]  leading-[24.96px] text-[#242C3C]  ">
                Teun! Mis geen woningmatches meer.
              </h2>
              <p className="poppins font-normal text-[14px]  leading-[19.6px] text-[#0F172A] pt-[30px]">
                Kies jouw abonnement en reageer direct op woningmatches
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-12 md:col-span-6  p-4">
            <div className="mx-4 md:mx-0">
              <div className="flex flex-col gap-3">
                <div
                  className="card max-w-[327px] w-full flex bg-[#FFFFFF] rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <div
                    className="w-[60px] bg-black flex items-center justify-center p-2"
                    style={{
                      borderRadius: '10px 0px 0px 10px',
                    }}
                  >
                    <div
                      className="w-[16px] h-[16px] rounded-[50%]"
                      style={{
                        border: '3px solid #FBF4EA',
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="p-4">
                      <h1 className="poppins font-bold text-[18px] leading-[25.2px] text-[#242C3C]">3 maanden</h1>
                      <p className="poppins font-medium text-[14px] leading-[19.6px] py-2 text-[#0F172A]">
                        €16.33 /mnd.
                        <span className="text-[#51B37E]">44% korting</span>
                      </p>
                    </div>
                    <div
                      className="p-4 bg-[#f8f8fd] w-full"
                      style={{
                        borderRadius: '0px 0px 9px 0px',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Image src="/assets/images/image 255.svg" width={22} height={22} alt="whatsapp" />
                        <p className="poppins text-[10px] font-normal leading-[14px] text-[#0F172A]">
                          Inclusief gratis Whatsapp-alerts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card max-w-[327px] w-full flex bg-[#FFFFFF] rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <div
                    className="w-[60px] bg-white flex items-center justify-center p-2"
                    style={{
                      borderRadius: '10px 0px 0px 10px',
                      borderRight: '1px solid #B8B6E7',
                    }}
                  >
                    <div
                      className="w-[16px] h-[16px] rounded-[50%]"
                      style={{
                        border: '1px solid #B8B6E7',
                        boxShadow: '0px 3px 1px 0px #00000014 inset',
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="p-4">
                      <h1 className="poppins font-bold text-[18px] leading-[25.2px] text-[#242C3C]">2 maanden</h1>
                      <p className="poppins font-medium text-[14px] leading-[19.6px] py-2 text-[#0F172A]">
                        €19.50 /mnd.
                        <span className="text-[#51B37E]">32% korting</span>
                      </p>
                    </div>
                    <div
                      className="p-4 bg-[#f8f8fd] w-full"
                      style={{
                        borderRadius: '0px 0px 9px 0px',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Image src="/assets/images/image 255.svg" width={22} height={22} alt="whatsapp" />
                        <p className="poppins text-[10px] font-normal leading-[14px] text-[#0F172A]">
                          Inclusief gratis Whatsapp-alerts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card max-w-[327px] w-full flex bg-[#FFFFFF] rounded-[10px]"
                  style={{
                    border: '1px solid #B8B6E7',
                    boxShadow: '0px 2px 2px 0px #0000001A',
                  }}
                >
                  <div
                    className="w-[60px] bg-white flex items-center justify-center p-2"
                    style={{
                      borderRadius: '10px 0px 0px 10px',
                      borderRight: '1px solid #B8B6E7',
                    }}
                  >
                    <div
                      className="w-[16px] h-[16px] rounded-[50%]"
                      style={{
                        border: '1px solid #B8B6E7',
                        boxShadow: '0px 3px 1px 0px #00000014 inset',
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="p-4">
                      <h1 className="poppins font-bold text-[18px] leading-[25.2px] text-[#242C3C]">1 maanden</h1>
                      <p className="poppins font-medium text-[14px] leading-[19.6px] py-2 text-[#0F172A]">€29 /mnd.</p>
                    </div>
                    <div
                      className="p-4 bg-[#f8f8fd] w-full"
                      style={{
                        borderRadius: '0px 0px 9px 0px',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Image src="/assets/images/image 255.svg" width={22} height={22} alt="whatsapp" />
                        <p className="poppins text-[10px] font-normal leading-[14px] text-[#0F172A]">
                          Inclusief gratis Whatsapp-alerts
                        </p>
                      </div>
                    </div>
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
