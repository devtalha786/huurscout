import React from 'react';
import { Drawer, Button, ModalBaseOverlayProps } from '@mantine/core';

const menuList = [
  {
    id: 1,
    name: 'maar hoe?',
  },
  {
    id: 2,
    name: 'REVIEWS?',
  },
  {
    id: 3,
    name: 'over ons',
  },
  {
    id: 4,
    name: 'vragen?',
  },
  {
    id: 5,
    name: 'contact',
  },
];
interface CustomOverlayProps extends ModalBaseOverlayProps {
  backgroundOpacity?: number;
}

interface HeaderDrawerProps {
  close: () => void;
  opened: boolean;
}

const HeaderDrawer: React.FC<HeaderDrawerProps> = ({ close, opened }) => {
  const customOverlayProps: CustomOverlayProps = {
    backgroundOpacity: 0.5,
    blur: 4,
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size="280px"
        position="right"
        overlayProps={customOverlayProps}
        sx={{
          background: '#242c3c',
        }}
      >
        <ul className="list-none relative flex flex-col gap-[50px] pr-[20px] pt-[30px]">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="medium-font text-[#FBF4EA] text-[25px] font-medium leading-[15.4px] cursor-pointer hover:text-[#FF8049] relative transition-all duration-100"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
