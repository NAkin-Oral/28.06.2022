// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper';

import 'bootstrap/dist/css/bootstrap.min.css';

const Swipper = Data => {
  console.log(Data);
  const { logo, usage, year, creator } = Data;
  return (
    <div className="cube-container">
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          // shadowOffset: 20,
          // shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" bg-light text-center">
          <img src={logo} alt="Computer Language" />
        </SwiperSlide>
        <SwiperSlide className="text-center bg-info">
          <h1>
            Usage: <br /> {usage}
          </h1>
        </SwiperSlide>
        <SwiperSlide className="text-center bg-primary">
          <h1>
            Creation Year: <br /> {year}
          </h1>
        </SwiperSlide>
        <SwiperSlide className="text-center bg-success">
          <h1>
            Creator: <br />
            {creator}
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
