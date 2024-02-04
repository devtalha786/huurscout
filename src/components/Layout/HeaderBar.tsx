'use client';
import React from 'react';

const HeaderBar = () => {
  return (
    <div className="h-[34px] w-full bg-[#B8B6E7] flex items-center">
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', width: '100%', display: 'flex' }}>
        <p
          className="poppins leading-[18px] text-[12px] font-bold text-center text-[#001B0F] "
          style={{ letterSpacing: '1.5px', display: 'inline-block', animation: 'marquee 10s linear infinite' }}
        >
          DE HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE
          HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK •
        </p>
      </div>
    </div>
  );
};

export default HeaderBar;
