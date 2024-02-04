import MainLayout from '@/components/Layout/MainLayout';
import { Privacy } from '@/components/Privacy-policy/Privacy';
import React from 'react';

const page = () => {
  return (
    <div>
      <MainLayout>
        <Privacy />
      </MainLayout>
    </div>
  );
};

export default page;
