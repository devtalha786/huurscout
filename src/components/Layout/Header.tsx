'use client';
import { containerMaxWidth } from '@/theme/theme';
import HeaderDrawer from '@/ui/HeaderDrawer';
import { Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'maar hoe?', href: '/', current: pathname === '/' },
    { name: 'REVIEWS?', href: '/reviews', current: pathname === '/reviews' },
    { name: 'over ons', href: '/overons', current: pathname === '/overons' },
    {
      name: 'vragen?',
      href: '/verify',
      current: pathname === '/verify' || pathname === '/verify-success',
    },
    {
      name: 'contact',
      href: '/contact-us',
      current: pathname === '/contact-us',
    },
  ];
  return (
    <>
      <HeaderDrawer opened={opened} close={close} />
      <div className="bg-[#242c3c] fixed w-full z-50">
        <Container size={containerMaxWidth} className="navbar py-[10px] md:py-[20px] px-[31px] sticky">
          <div className="flex items-center justify-between">
            <div className="title">
              <h2 className="bold-font text-[20.31px] leading-[19.5px] text-[#FF8049] font-extrabold">HUURSCOUT</h2>
            </div>
            <div className="menu-list ">
              <ul className="list-none relative hidden md:flex gap-[30px] pr-[20px]">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className={`semibold-font ${
                      item.current ? 'effect' : ''
                    }  text-[#FBF4EA] text-[14px] font-semibold leading-[15.4px] cursor-pointer hover:text-[#FF8049] relative transition-all duration-100`}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex md:hidden">
                <Image src="/assets/images/bur.svg" onClick={open} height={32} width={32} alt="burger" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
