'use client';
import { Button } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const ThirdSection = () => {
  return (
    <div className=" min-h-[294px] bg-[#fff]  md:flex md:items-center  md:min-h-[661px]  md:rounded-none ">
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto ">
        <div className="w-full flex  justify-center text-center h-[150px]">
          <Button
            className="rounded-[100px]  mt-[-14px] bg-[#51B37E] h-[52px]"
            style={{
              padding: '8px 32px 12px 32px',
            }}
          >
            Activeer
          </Button>
        </div>
        <div className="w-full flex justify-center text-center pt-[60px] pb-3">
          <Image
            src="/assets/images/Secure payments powered by Mollie -- Cards, iDeal, PayPal__2x 1.svg"
            height={82}
            width={326}
            alt=""
          />
        </div>
        <div
          className="my-3 md:hidden max-w-[326px] mx-auto opacity-[50%]"
          style={{
            border: '1px solid #B8B6E7',
          }}
        ></div>
        <div className="p-4 mx-4">
          <div className="w-full   max-w-[191px] mt-[60px] pb-3 ">
            <h2 className="poppins  font-bold text-[18px] leading-[19.8px] text-[#1A1A1A]">
              Dit gaat er voor jou veranderen
            </h2>
          </div>
          <div className="w-full       pb-3">
            <p className="poppins  font-normal text-[12px] leading-[16.8px] text-[#1A1A1A]">
              Een makelaar voegt een woning toe:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="md:col-span-6 col-span-12 w-full p-4 mx-4 ">
            <div className="max-w-full md:max-w-[440px] w-full mx-auto py-[40px]  bg-white md:rounded-[15px]">
              <p className="font-bold poppins text-[12px] leading-[16.8px] text-[#1A1A1A]">
                Oude manier
              </p>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/crosss.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Jouw zoekbot checkt dag en nacht 1.400+ websites
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/crosss.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Jij checkt dagelijks elke woningsite handmatig
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/crosss.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Jij ziet een woning gemiddeld pas na 18 uur
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[15px] py-[15px] ">
                <Image
                  src="/assets/images/crosss.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Je reageert te laat op de woningen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 col-span-12 w-full p-4 mx-4  ">
            <div className="max-w-full md:max-w-[440px] w-full mx-auto py-[40px]  bg-white md:rounded-[15px]">
              <p className="font-bold poppins text-[12px] leading-[16.8px] text-[#1A1A1A]">
                Huurscout manier
              </p>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/Untitled.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Jouw zoekbot checkt dag en nacht 1.400+ websites
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/Untitled.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Je krijgt binnen 30 sec een WhatsApp of mail
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-[15px] py-[15px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image
                  src="/assets/images/Untitled.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Je reageert als eerste op de woning
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[15px] py-[15px] ">
                <Image
                  src="/assets/images/Untitled.svg"
                  width={30}
                  height={30}
                  alt="tick"
                />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Grote kans om de woning te krijgen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
