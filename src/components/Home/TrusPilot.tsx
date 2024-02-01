'use client';
import { containerMaxWidth2 } from '@/theme/theme';
import { Button, Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const TrusPilot = () => {
  return (
    <div className=" min-h-[294px] bg-[#FBF4EA]  md:flex md:items-center  md:min-h-[661px] rounded-[10px] md:rounded-none ">
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="flex flex-wrap">
          <div className="md:w-7/12 w-full p-4">
            <div className="img hidden md:block">
              <Image
                src="/assets/images/808C02E0-8082-4A85-B401-480BFD71147E 2.svg"
                width={254}
                height={50}
                alt="pilot"
                className="cursor-pointer object-cover"
              />
            </div>
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full pt-[30px] pb-[60px] md:pb-0 ">
              <p className="poppins font-medium text-[18px] text-[#1A1A1A] leading-[25.2px] md:text-[28px] md:leading-[39.2px] md:tracking-[-1px]">
                Ben jij ook op zoek naar een huurwoning? Ontvang het nieuwste woningaanbod van 2.300+ huizensites direct
                via WhatsApp of e-mail, zodat je als eerste kunt reageren en bezichtigen!
              </p>
            </div>
          </div>
          <div
            className=" md:hidden flex justify-center p-[20px] w-full bg-white"
            style={{
              boxShadow: '0px 5px 10px 0px #0000001A',
              borderRadius: '10px 10px 0px 0px',
            }}
          >
            <Button
              variant="filled"
              className="w-[329px] mx-auto bg-[#FF8049] rounded-[100px] medium-font text-[14px] leading-[24px] text-white "
              style={{
                padding: '8px 20px 12px 20px',
              }}
            >
              Stel Whatsapp alert in
            </Button>
          </div>
          <div className="md:w-5/12 w-full  ">
            <div className="max-w-full md:max-w-[440px] w-full mx-auto p-[40px]  bg-white md:rounded-[15px]">
              <div className="img  md:hidden flex justify-center py-[31px]">
                <Image
                  src="/assets/images/808C02E0-8082-4A85-B401-480BFD71147E 2.svg"
                  width={214}
                  height={42}
                  alt="pilot"
                  className="cursor-pointer object-cover"
                />
              </div>
              <div
                className="flex items-center gap-[15px] py-[30px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image src="/assets/images/Untitled.svg" width={30} height={30} alt="tick" />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Bespaar zeeën van tijd terwijl onze zoekbot dag en nacht ruim 2.300 woningsites afspeurt.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-[15px] py-[30px] "
                style={{
                  borderBottom: '1.25px solid #dbdbf3',
                }}
              >
                <Image src="/assets/images/Untitled.svg" width={30} height={30} alt="tick" />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Reageer als eerste en word veel vaker uitgenodigd voor een bezichtiging.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[15px] py-[30px] ">
                <Image src="/assets/images/Untitled.svg" width={30} height={30} alt="tick" />
                <div className="max-w-[234px] w-full md:max-w-[252px] ">
                  <p className="poppins text-[12px] md:text-[14px] font-normal leading-[16.8px] text-[#1A1A1A] md:leading-[19.6px]">
                    Vind samen met Huurscout woningen in heel NL (niet alleen de grote steden)
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
