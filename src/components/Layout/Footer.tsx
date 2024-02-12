'use client';
import { containerMaxWidth2 } from '@/theme/theme';
import { Button, Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const menuList = [
  {
    id: 1,
    name: 'maar hoe?',
  },
  {
    id: 2,
    name: 'REVIEWS?',
  },
  {
    id: 3,
    name: 'over ons',
  },
  {
    id: 4,
    name: 'vragen?',
  },
  {
    id: 5,
    name: 'contact',
  },
];
export const Footer = () => {
  return (
    <div
      className=" min-h-[836px] mt-[-17px] md:mt-0 bg-[#242C3C]  md:flex md:items-center  md:min-h-[661px]  "
      style={{
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto text-black">
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-6 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <p className="semibold-font md:max-w-[326px] max-w-full font-semibold text-center text-[46px]  text-[#FBF4EA] leading-[44.16px] tracking-[-1px] ">
                Vind EN reageer als <span className="bg-txt ">eerste </span> op
                EEN HUUR WONING
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 p-4  ">
            <div className="">
              <Image
                src="/assets/images/Group (1).svg"
                style={{ maxWidth: '100%', height: 'auto' }}
                height={1000}
                width={1000}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-6 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <p className="poppins  font-semibold  text-[16px]  text-[#FBF4EA] leading-[22.4px] pl-4">
                Huurscout
              </p>
              <p className="poppins  font-normal max-w-[243px]  text-[12px]  text-[#FBF4EA] pl-4 leading-[16.8px] py-[30px]">
                Ontvang nieuwe huurwoningen direct via WhatsApp of e-mail en
                wees de eerste die reageert.
              </p>
              <div
                className=" md:hidden"
                style={{
                  border: '1px solid #FBF4EA',
                }}
              ></div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 p-4  ">
            <div className=" md:max-w-[553px] max-w-[326px] mx-auto">
              <ul className="list-none pl-4 relative  flex flex-col gap-[30px] pr-[20px]">
                {menuList.map((item, index) => (
                  <li
                    key={index}
                    className="semibold-font text-[#FBF4EA] text-[22px] font-semibold leading-[15.4px] cursor-pointer hover:text-[#FF8049] relative transition-all duration-100"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 flex-wrap py-[30px]">
          <div className="col-span-12 md:col-span-6 p-4">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto md:mx-0 w-full  md:pb-0 ">
              <div className="py-[30px]">
                <Image
                  src="/assets/images/Secure payments powered by Mollie -- Cards, iDeal, PayPal__2x 2.svg"
                  height={68}
                  width={271}
                  alt=""
                />
              </div>
              <div
                className=" md:hidden"
                style={{
                  border: '1px solid #FBF4EA',
                }}
              ></div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 p-4  ">
            <div className="md:max-w-[553px] max-w-[326px] mx-auto">
              <p className="poppins  font-medium   text-[14px]  text-[#FBF4EA] leading-[15.4px] py-[30px]">
                Woningen per stad
              </p>
              <p className="poppins  font-medium   text-[12px]  text-[#FF8049] underline leading-[21.6px] ">
                Huurwoningen in Amsterdam <br />
                Huurwoningen in Rotterdam <br />
                Huurwoningen in Den Haag <br />
                Huurwoningen in Utrecht <br />
                Huurwoningen in Amsterdam <br />
                Huurwoningen in Rotterdam <br />
                Huurwoningen in Den Haag <br />
                Huurwoningen in Utrecht <br />
                Huurwoningen in Amsterdam <br />
                Huurwoningen in Rotterdam <br />
                Huurwoningen in Den Haag <br />
                Huurwoningen in Utrecht
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center py-[30px] md:max-w-[553px] max-w-[326px] mx-auto flex justify-center">
          <div>
            <div className="img mt-4 flex justify-center ">
              <Image
                src="/assets/images/808C02E0-8082-4A85-B401-480BFD71147E 2.svg"
                width={214}
                height={50}
                alt="Trustpilot"
                className="cursor-pointer object-cover"
              />
            </div>
            <div className="flex pt-[20px] gap-[20px]">
              <Link href="/privacy-policy">
                <p className="poppins  font-normal underline    text-[12px]  text-[#B8B6E7] leading-[21.6px] ">
                  Privacy policy
                </p>
              </Link>
              <p className="poppins  font-normal underline    text-[12px]  text-[#B8B6E7] leading-[21.6px] ">
                Terms & conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
