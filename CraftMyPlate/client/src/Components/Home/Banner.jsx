import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HeroImage from "./HeroImage";

const Banner = () => {
  const images = [
    {
      imageUrl:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1960974311/photo/many-different-products-on-white-table-flat-lay-natural-sources-of-serotonin.jpg?b=1&s=612x612&w=0&k=20&c=MaKLvke0URxJct99yFMmouXkOBAKTXLnDEdrkay8A7o=",
    },
    {
      imageUrl:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg",
    },
    {
      imageUrl:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg",
    },
    {
      imageUrl:
        "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2024/12/refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1175505781/cs/fotografie/arabsk%C3%BD-a-bl%C3%ADzkov%C3%BDchodn%C3%AD-j%C3%ADdeln%C3%AD-st%C5%AFl-hummus-tabbouleh-sal%C3%A1t-fattoush-sal%C3%A1t-pita-masov%C3%BD.jpg?s=612x612&w=0&k=20&c=_f9aGPt89nP_ENWi-FmMisqmwrvBFOciEJDKYTiMoCs=",
    },
  ];

  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {images?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <HeroImage item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
