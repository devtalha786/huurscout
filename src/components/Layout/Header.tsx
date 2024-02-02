'use client';
import { containerMaxWidth } from '@/theme/theme';
import HeaderDrawer from '@/ui/HeaderDrawer';
import { Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'maar hoe?', href: '/', current: false },
    { name: 'REVIEWS?', href: '#', current: false },
    { name: 'over ons', href: '#', current: false },
    { name: 'vragen?', href: '#', current: false },
    { name: 'contact', href: '#', current: false },
  ];
  return (
    <>
      <HeaderDrawer opened={opened} close={close} />
      <div className="bg-[#242c3c]">
        <Container size={containerMaxWidth} className="navbar py-[21px] px-[31px]">
          <div className="flex items-center justify-between">
            <div className="title">
              <h2 className="bold-font text-[20.31px] leading-[19.5px] text-[#FF8049] font-extrabold">HUURSCOUT</h2>
            </div>
            <div className="menu-list ">
              <ul className="list-none relative hidden md:flex gap-[30px] pr-[20px]">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className={`semibold-font   text-[#FBF4EA] text-[14px] font-semibold leading-[15.4px] cursor-pointer hover:text-[#FF8049] relative transition-all duration-100`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="flex md:hidden">
                <Image src="/assets/images/burger.svg" onClick={open} height={32} width={32} alt="burger" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
