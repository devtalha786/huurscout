'use client';
import React from 'react';

const BottomBar = () => {
  return (
    <div className="h-[34px] w-full bg-[#FF8049] flex items-center">
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', width: '100%' }}>
        <p
          className="poppins  text-[12px] font-bold text-center text-[#001B0F] "
          style={{
            letterSpacing: '1.5px',
            display: 'inline-block',
            animation: 'marquee 10s linear infinite',
          }}
        >
          DE HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE
          HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK • DE
          HUURWONING HACK • DE HUURWONING HACK • DE HUURWONING HACK •
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
