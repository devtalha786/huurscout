'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Container } from '@mantine/core';
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

export const Header = () => {
  return (
    <>
      <div className="bg-[#242c3c]">
        <Container size={containerMaxWidth} className="navbar py-[21px] px-[31px]">
          <div className="flex items-center justify-between">
            <div className="title">
              <h2 className="bold-font text-[20.31px] leading-[19.5px] text-[#FF8049] font-extrabold">HUURSCOUT</h2>
            </div>
            <div className="menu-list ">
              <ul className="list-none relative hidden md:flex gap-[30px] pr-[20px]">
                {menuList.map((item, index) => (
                  <li
                    key={index}
                    className="semibold-font text-[#FBF4EA] text-[14px] font-semibold leading-[15.4px] cursor-pointer hover:text-[#FF8049] relative transition-all duration-100"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
