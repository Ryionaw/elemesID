import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "react-bootstrap";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import MediaQuery from "react-responsive";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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
    spaceBetween: 20,
    slidesPerView: 2.3,
    loop: true,
    draggable: true,
    freeMode: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      760: {
        spaceBetween: 50,
        slidesPerView: 5.5,
      },
    },
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
      <MediaQuery minWidth={768}>
        <div className="buttonContainer">
          <div className="swiper-button-prev">
            <Button>
              <FaAngleLeft className="icons" />
              Prev
            </Button>
          </div>
          <div className="swiper-button-next">
            <Button>
              <FaAngleRight className="icons" />
              Next
            </Button>
          </div>
        </div>
      </MediaQuery>
    </Swiper>
  );
};

export default swiper;
