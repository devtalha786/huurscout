import { Faq } from '@/components/Home/Faq';
import { FrameEight } from '@/components/Home/FrameEight';
import { FrameNine } from '@/components/Home/FrameNine';
import MainLayout from '@/components/Layout/MainLayout';
import { FirstComponent } from '@/components/Reviews-Page/FirstComponent';
import { SecondComponent } from '@/components/Reviews-Page/SecondComponent';
import { ThirdSection } from '@/components/Reviews-Page/THirdSection';
import React from 'react';

const page = () => {
  return (
    <div>
      <MainLayout>
        <FirstComponent />
        <SecondComponent />
        <ThirdSection />
        <FrameEight />
        <FrameNine />
        <div className="mt-[-15px] md:mt-0">
          <Faq />
        </div>
      </MainLayout>
    </div>
  );
};

export default page;
