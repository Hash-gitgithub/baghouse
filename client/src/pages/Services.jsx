import React from 'react'
import styled from 'styled-components';

import 'swiper/swiper-bundle.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Services() {
  return (
    <Wrapper>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        // navigation
        autoplay={{ delay: 1000 }}
        style={{
          background: " rgb(131,58,180)",
          backgroundColor: "black",
          // marginTop: "0px",
          width: "100%",
          height: "177%",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          overflow: "hidden",
          listStyle: "none",
          padding: "0",
          zIndex: "1",
          display: "block"
        }}

                breakpoints={{
          // When window width is 0 to 767px (typical mobile range)
          0: {
            slidesPerView: 1, // Show 1 slide
          },
          // When window width is 768px and above (tablet and desktop)
          768: {
            slidesPerView: 2, // Show 2 slides
          },
        }}

      >
        <SwiperSlide className='slide'><img src="images/bagban2.png" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px",
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/bagban5.jpeg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/bagban6.jpeg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/bagban4.jpeg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/bagban1.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper
  = styled.section`
  @media (max-width:768px) {
     margin-top: -5%;
     width: 100%; /* Set width to 100% for mobile */
     height: auto;
}
`;

export default Services

// margin-top: -5%;
//     width: 199%;
//     height: 44%;
    // position: absolute;