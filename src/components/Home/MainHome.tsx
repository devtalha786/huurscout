'use client';
import React from 'react';
import { Header } from '../Layout/Header';
import HeaderBar from '../Layout/HeaderBar';
import { HeroSection } from './HeroSection';
import { TrusPilot } from './TrusPilot';
import { Amsterdam } from './Amsterdam';
import { Reviews } from './Reviews';
import { Faq } from './Faq';
import { FooterSection } from './FooterSection';

export const MainHome = () => {
  return (
    <div>
      <Header />
      <HeaderBar />
      <HeroSection />
      <div className="bg-[#242c3c]">
        <TrusPilot />
      </div>
      <Amsterdam />
      <Reviews />
      <Faq />
      <FooterSection />
    </div>
  );
};
