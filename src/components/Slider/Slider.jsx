import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./slider.scss";
import SquarePic from "../SquarePic/SquarePic";
import { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/slider");

      setSlider(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Swiper
      className={"slider-featured"}
      modules={[Navigation, Autoplay]}
      navigation
      centeredSlides={false}
      speed={1000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30}
      breakpoints={{
        1440: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        640: { slidesPerView: 1 },
        320: { slidesPerView: 1 },
      }}
    >
      {slider.map((i) => {
        return (
          <SwiperSlide key={i.id} style={{ textAlign: "center" }}>
            <SquarePic
              status={i.status}
              price={i.price}
              title={i.title}
              adress={i.adress}
              src={i.src}
              bed={i.bed}
              bath={i.bath}
              car={i.car}
              area={i.area}
              type={i.type}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
