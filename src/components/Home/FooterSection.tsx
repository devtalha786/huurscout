import { containerMaxWidth2 } from '@/theme/theme';
import { Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    quote:
      ' Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.',
    author: 'Bespaar uren per dag aan zoeken en scrollen',
  },
  {
    id: 2,
    quote:
      ' Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.',
    author: 'Bespaar uren per dag aan zoeken en scrollen',
  },
  {
    id: 3,
    quote:
      ' Onze zoekbot scant iedere minuut ruim 1.400 verhuurwebsites op nieuw aanbod, terwijl jij achterover leunt.',
    author: 'Bespaar uren per dag aan zoeken en scrollen',
  },
];

export const FooterSection = () => {
  return (
    <div
      className="bg-[#fff] min-h-[859px] mt-[-17px] md:mt-0 flex items-center "
      style={{ borderRadius: '10px 10px 0px 0px' }}
    >
      <Container size={containerMaxWidth2} className="w-full">
        <div className="grid grid-cols-12 py-[40px]">
          {/* Column 1 */}
          <div className="md:col-span-5  col-span-12 p-4 text-black mx-4">
            <div className="">
              <h1 className="semibold-font font-semibold text-[26px] leading-[24.96px] md:text-[34px] md:leading-[34px] text-[#1A1A1A]">
                <span className="bg-txt2"> Drie redenen</span> <br /> waarom het
                met huurscout wel lukt!
              </h1>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-7 col-span-12 p-4">
            <div className="flex flex-col gap-[50px]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between flex-col-reverse md:flex-row"
                >
                  <div className="flex gap-[20px] items-start py-[20px] w-full">
                    <div className=" ">
                      <p className="poppins-bold h-[22px] w-[22px] rounded-[50%] flex items-center justify-center bg-[#51B37E] text-white text-[12px]">
                        {item.id}
                      </p>
                    </div>
                    <div className="md:max-w-[213px] maw-w-[191px]">
                      <h2 className="poppins font-bold text-[18px] leading-[19.8px] text-[#1A1A1A]">
                        {item.author}
                      </h2>
                      <p className="poppins font-normal text-[14px] leading-[19.8px] text-[#1A1A1A] pt-[20px]">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/assets/images/Group.svg"
                    height={1000}
                    width={1000}
                    className="max-w-full h-auto"
                    alt="1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
