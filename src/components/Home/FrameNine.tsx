'use client';
import Image from 'next/image';
import React from 'react';

export const FrameNine = () => {
  return (
    <div
      className=" min-h-[836px] mt-[-17px] md:mt-0 bg-[#242C3C]  md:flex md:items-center  md:min-h-[661px]  "
      style={{
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-5 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <p className="semibold-font md:max-w-[350px] max-w-full font-semibold text-[46px]  text-[#FBF4EA] leading-[44.16px] ">
                Wij zijn pas tevreden als{' '}
                <span className="bg-txt3 text-[#FBF4EA]">jij dat </span> bent
              </p>

              <p className="poppins md:max-w-[350px] max-w-[270px] font-medium text-[14px] leading-[19.6px] text-[#FBF4EA] py-[30px]">
                Probeer HuurScout uit, zonder risico. Als je binnen 14 dagen van
                gedachten verandert, dan zeg je eenvoudig op via jouw account of
                door te mailen naar{' '}
                <span className="text-[#FF8049]"> support@huurscout.com.</span>{' '}
                Wij storten dan het aankoopbedrag terug.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 p-4  ">
            <div className="relative flex">
              <div className="img1 relative z-50">
                <Image
                  src="/assets/images/Group 8231.svg"
                  height={175}
                  width={156}
                  alt=""
                />
              </div>
              <div className="img2 absolute top-[68px] left-[93px] z-30 ">
                <Image
                  src="/assets/images/Group 8230.svg"
                  height={175}
                  width={156}
                  alt=""
                />
              </div>
              <div className="img3 absolute top-[131px] left-[177px] ">
                <Image
                  src="/assets/images/Group 8229.svg"
                  height={175}
                  width={156}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
