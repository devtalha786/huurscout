'use client';
import { Header } from '@/components/Layout/Header';
import { FirstPage } from '@/components/Verify/FirstPage';
import { SecondPage } from '@/components/Verify/SecondPage';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />

      {!showSecondPage && <FirstPage />}

      {showSecondPage && <SecondPage />}
    </div>
  );
};

export default Page;
