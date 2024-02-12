'use client';
import { containerMaxWidth } from '@/theme/theme';
import { Button, Container } from '@mantine/core';
import React from 'react';

export const HeroSection = () => {
  return (
    <>
      <div className="bg-[#242c3c] min-h-[390px] flex items-center justify-center md:min-h-[550px]">
        <Container size={containerMaxWidth} className="navbar  px-[31px]">
          <div className="flex items-center ">
            <div className="max-w-full md:max-w-[892px] mx-auto w-full text-center">
              <h1
                className="text-[45px] md:text-[80px] text-[#FBF4EA] leading-[44.16px] md:leading-[76.68px] font-semibold semibold-font"
                style={{
                  letterSpacing: '-1px',
                }}
              >
                Vind EN reageer als <span className="bg-txt">eerste</span> op
                EEN HUUR WONING
              </h1>
              <div className="btn hidden md:block">
                <Button
                  variant="filled"
                  className="w-[329px] bg-[#FF8049] rounded-[100px] medium-font text-[14px] leading-[24px] text-white mt-[141px]"
                  style={{
                    padding: '8px 20px 12px 20px',
                  }}
                >
                  Stel Whatsapp alert in
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
