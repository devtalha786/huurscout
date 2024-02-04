'use client';
import { Button } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const SecondPage = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center ">
      <div className=" text-center ">
        <h3 className="semibold-font py-[30px] font-extrabold text-[10px] leading-[14.96px] text-[#001B0F] tracking-[1.5px]">
          SUCCESS
        </h3>
        <Image src="/assets/images/Group (1).svg" height={126} width={271} alt="" />
        <h3 className="poppins py-[30px] font-medium text-[18px] leading-[25.2px] text-[#1A1A1A] ">
          Jouw betaling is <br /> geslaagd!
        </h3>
        <Button
          className="rounded-[100px] medium-font font-medium text-[14px]  mt-[40px] bg-[#51B37E] h-[52px]"
          style={{
            padding: '8px 32px 12px 32px',
          }}
        >
          Bekijk account
        </Button>
      </div>
    </div>
  );
};
