import { Swiper, SwiperSlide } from "swiper/react";
import NewArrival from "./NewArrival";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const NewArrivals = () => {
  return (
    <div className="newArrivals">
      <h1>New Arrivals</h1>
      <Swiper
        slidesPerView={2}
        navigation
      >
        <SwiperSlide>
          <NewArrival image={"./images/newArrival.jpg"} title="Product Title" variant="Women's T-Shirt" price="$19.99" />
        </SwiperSlide>
        <SwiperSlide>
          <NewArrival image={"./images/newArrival.jpg"} title="Product Title" variant="Women's T-Shirt" price="$19.99" />
        </SwiperSlide>
        <SwiperSlide>
          <NewArrival image={"./images/newArrival.jpg"} title="Product Title" variant="Women's T-Shirt" price="$19.99" />
        </SwiperSlide>
        <SwiperSlide>
          <NewArrival image={"./images/newArrival.jpg"} title="Product Title" variant="Women's T-Shirt" price="$19.99" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewArrivals;