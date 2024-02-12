'use client';
import Image from 'next/image';
import React from 'react';

export const FirstComponent = () => {
  return (
    <div className=" min-h-[400px]  md:mt-0 bg-[#FFFFFF]  md:flex md:items-center  md:min-h-[400px]  ">
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-5 p-4">
            <div className="mx-auto md:mx-0 w-full  md:pb-0 flex gap-3 items-start ">
              <Image
                src="/assets/images/wrong.svg"
                width={22}
                height={22}
                alt="pilot"
                className="cursor-pointer "
              />
              <p className="semibold-font max-w-[289px] md:max-w-full   font-semibold text-[26px] text-start text-[#1A1A1A] leading-[25px] ]">
                Jij hebt 100+ woningen gemist in de afgelopen 30 dagen
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 p-4  ">
            <div className=" flex gap-3 overflow-hidden overflow-x-auto scr">
              <Image
                src="/assets/images/Group 8231.svg"
                height={165}
                width={147}
                alt=""
              />
              <Image
                src="/assets/images/Group 8230.svg"
                height={165}
                width={147}
                alt=""
              />
              <Image
                src="/assets/images/Group 8229.svg"
                height={165}
                width={147}
                alt=""
              />
              <Image
                src="/assets/images/Group 8229.svg"
                height={165}
                width={147}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
