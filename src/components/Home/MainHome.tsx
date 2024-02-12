'use client';
import React from 'react';
import { HeroSection } from './HeroSection';
import { TrusPilot } from './TrusPilot';
import { Amsterdam } from './Amsterdam';
import { Reviews } from './Reviews';
import { Faq } from './Faq';
import { FooterSection } from './FooterSection';
import BottomBar from '../Layout/BottomBar';
import { FrameSeven } from './FrameSeven';
import { FrameEight } from './FrameEight';
import { FrameNine } from './FrameNine';
import { FrameTen } from './FrameTen';
import MainLayout from '../Layout/MainLayout';

export const MainHome = () => {
  return (
    <div>
      <MainLayout>
        <HeroSection />
        <div className="bg-[#242c3c]">
          <TrusPilot />
        </div>
        <Amsterdam />
        <Reviews />
        <Faq />
        <FooterSection />
        <BottomBar />
        <FrameSeven />
        <div className="bg-[#242c3c]"></div>
        <FrameEight />
        <FrameNine />
        <FrameTen />
      </MainLayout>
    </div>
  );
};
