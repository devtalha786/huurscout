'use client';

import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Progress } from '@mantine/core';
import Image from 'next/image';

export const ReviewsCarousel: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>
          <Image
            src="/assets/images/image 245.svg"
            height={100}
            width={100}
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </>
  );
};
