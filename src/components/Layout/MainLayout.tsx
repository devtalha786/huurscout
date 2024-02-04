'use client';
import React from 'react';
import { Header } from './Header';
import HeaderBar from './HeaderBar';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      {pathname == '/overons' ? '' : <HeaderBar />}
      {children}
      <Footer />
      <HeaderBar />
    </div>
  );
};

export default MainLayout;
