'use client';

import { containerMaxWidth } from '@/theme/theme';
import { Box, Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

export const Amsterdam = () => {
  return (
    <>
      <Box
        className="bg-[#242c3c] md:bg-white    md:my-[60px]"
        sx={(theme) => ({
          [theme.fn.smallerThan('md')]: {
            borderRadius: '10px 10px 0px 0px',
          },
          borderRadius: '15px',
        })}
      >
        <Container size={containerMaxWidth} className="navbar  md:px-[31px]">
          <div className="bg-[#242c3c] min-h-[390px]  md:min-h-[528px] rounded-[15px] overflow-hidden">
            <div className="max-w-full sm:px-[31px] xl:p-0 xl:max-w-[1118px] w-full mx-auto py-[40px] ">
              <div className="flex flex-wrap items-center">
                {/* Column 1 */}
                <div className="md:w-5/12 w-full p-4">
                  <div className="max-w-full md:max-w-[440px] w-full text-center md:text-start">
                    <h1 className="text-[26px] relative md:text-[34px] text-[#FBF4EA] leading-[25px] md:leading-[34px] font-semibold semibold-font">
                      Huurscout vond <span className="text-[#FF8049]">179</span>{' '}
                      huurwoningen in Amsterdam
                      <Image
                        src="/assets/images/Polygon 1.svg"
                        className="inline-block ml-2" // Add margin or adjust as needed
                        height={14}
                        width={14}
                        alt="Polygon 1"
                      />
                    </h1>

                    <div
                      className="max-w-[209px] ml-auto md:ml-0 w-full md:max-w-[327px] pt-2"
                      style={{
                        borderBottom: '2px solid #FBF4EA',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="md:w-7/12 w-full p-4">
                  <div className="max-w-full md:max-w-[563px] m-auto">
                    <div className="flex gap-[18.32px] flex-nowrap overflow-y-auto md:overflow-x-auto  md:flex-wrap">
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className="md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className=" md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className=" md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className=" md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className=" md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                      <div className="">
                        <div className="card w-[147px] h-[165px] md:w-[171px] md:h-[191px] rounded-[12px]">
                          <Image
                            src="/assets/images/image 245.svg"
                            style={{
                              borderRadius: '11.57px 11.57px 0px 0px;',
                            }}
                            className=" md:h-[159px] "
                            width={1000}
                            height={1000}
                            alt=""
                          />
                          <div
                            className="bg-[#FBF4EA] h-[28px] md:h-[32px] flex items-center justify-center"
                            style={{
                              borderRadius: ' 0px 0px 11.57px 11.57px ',
                            }}
                          >
                            <p className="heebo text-[10px] text-[#001B0F] md:text-[12px] font-extrabold tracking-[1.74px] leading-[14.69px] md:leading-[17.63px]">
                              65 m² / €1.250
                            </p>
                          </div>
                        </div>
                        <div className="pt-[18px] text-center">
                          <h2 className="text-[12px] md:text-[14px] text-[#ffff] leading-[16.8pxpx] md:leading-[19.6px] font-bold poppins">
                            Jan Luijkenstraat <br />{' '}
                            <span className="font-normal">Pararius</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
};
