import Image from 'next/image';
import React from 'react';

export const FirstPage = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center justify-center bg-white">
      <div className=" text-center ">
        <h3 className="semibold-font py-[30px] font-extrabold text-[10px] leading-[14.96px] text-[#001B0F] tracking-[1.5px]">
          Een moment
        </h3>
        <Image src="/assets/images/Group (1).svg" height={126} width={271} alt="" />
        <h3 className="poppins py-[30px] font-medium text-[18px] leading-[25.2px] text-[#1A1A1A] ">
          We verifieren jouw <br /> betaling ...
        </h3>
        <h3 className="poppins py-[30px] font-normal text-[12px] leading-[26.8px] text-[#1A1A1A] ">
          Sluit deze pagina niet af.
        </h3>
      </div>
    </div>
  );
};
