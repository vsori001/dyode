
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCta from "./HeroCta";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const HeroSlider = () => {
  return (
    <div className="heroSlider">
      <Swiper
        slidesPerView={1}
      >
        <SwiperSlide>
          <HeroCta 
            image ={"./images/hero/hero1.jpg"}
            title = "Shop New Arrivals"
            text = "Our coolest new items are waiting for you!"
            link = "#"
            textColor = "#10504F"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCta 
            image={"./images/hero/hero2.jpg"}
            title = "Our Fave Tees"
            text = "Shop all of our favorites."
            link = "#"
            textColor = "#ffffff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCta 
            image={"./images/hero/hero3.jpg"}
            title = "Men’s Tees"
            text = "Find the perfect shirt."
            link = "#"
            textColor = "#ffffff"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;