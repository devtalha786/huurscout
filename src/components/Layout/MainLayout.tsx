import React from 'react';
import { Header } from './Header';
import HeaderBar from './HeaderBar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <HeaderBar />
      {children}
      <Footer />
      <HeaderBar />
    </div>
  );
};

export default MainLayout;
