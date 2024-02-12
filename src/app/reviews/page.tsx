import { Faq } from '@/components/Home/Faq';
import { FrameNine } from '@/components/Home/FrameNine';
import MainLayout from '@/components/Layout/MainLayout';
import { ReviewsSection } from '@/components/Layout/ReviewsSection';
import React from 'react';

const page = () => {
  return (
    <MainLayout>
      <ReviewsSection />
      <FrameNine />
      <div className="mt-[-15px] md:mt-0">
        <Faq />
      </div>
    </MainLayout>
  );
};

export default page;
