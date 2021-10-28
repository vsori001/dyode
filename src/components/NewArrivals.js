import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewArrival from "./NewArrival";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const NewArrivals = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 830px)");
    setMobile(!mediaQuery.matches);

    const updateMobile = (e) => {
      setMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", updateMobile);

    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  const slideNum = mobile ? 2 : 4;

  return (
    <div className="newArrivals">
      <h1>New Arrivals</h1>
      <Swiper slidesPerView={slideNum} navigation>
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