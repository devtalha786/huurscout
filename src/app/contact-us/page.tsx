import { Contact } from '@/components/Contact-us/ContactComponent';
import MainLayout from '@/components/Layout/MainLayout';
import React from 'react';

const page = () => {
  return (
    <div>
      <MainLayout>
        <Contact />
      </MainLayout>
    </div>
  );
};

export default page;
