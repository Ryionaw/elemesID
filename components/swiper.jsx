import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import cupcake from "../assets/images/cupcake.png";
import pizza from "../assets/images/pizza.png";
import kebab from "../assets/images/kebab.png";
import salmon from "../assets/images/salmon.png";
import doughnut from "../assets/images/doughnut.png";

import "swiper/css";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
const swiper = () => {
  const params = {
    spaceBetween: 50,
    slidesPerView: 5.5,
    loop: true,
    draggable: true,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: true,
  };

  return (
    <Swiper {...params}>
      <SwiperSlide>
        <div className="category greenish">
          <Image width={47} height={52} src={cupcake} alt="category" />
          <br />
          <h5>Cupcake</h5>
          <p>22 Items</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="category blueish">
          <Image width={47} height={52} src={pizza} alt="category" />
          <br />
          <h5>Pizza</h5>
          <p>25 Items</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="category purplish">
          <Image width={47} height={52} src={kebab} alt="category" />
          <br />
          <h5>Kebab</h5>
          <p>12 Items</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="category pinky">
          <Image width={47} height={52} src={salmon} alt="category" />
          <br />
          <h5>Salmon</h5>
          <p>22 Items</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="category yellowish">
          <Image width={47} height={52} src={doughnut} alt="category" />
          <br />
          <h5>Doughnut</h5>
          <p>11 Items</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default swiper;
