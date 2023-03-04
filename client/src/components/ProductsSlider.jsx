// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Link} from "react-router-dom";
import {Autoplay} from "swiper";

const products = [
  {
    id: "1",
    imageUrl: "/redvelvetlatte.jpg",
    titleProduct: "Red Velvet Latte",
  },
  {
    id: "2",
    imageUrl: "/blackcookielatte.jpg",
    titleProduct: "Black Cookie Latte",
  },
  {
    id: "3",
    imageUrl: "/caffemocha.jpg",
    titleProduct: "Caffe Mocha",
  },
  {
    id: "4",
    imageUrl: "/caramelmacchiato.jpg",
    titleProduct: "Caramel Macchiato",
  },
  {
    id: "5",
    imageUrl: "/classicchocolate.jpg",
    titleProduct: "Classic Chocolate",
  },
  {
    id: "6",
    imageUrl: "/cookiecrumblelatte.jpg",
    titleProduct: "Cookie Crumble Latte",
  },
  {
    id: "7",
    imageUrl: "/darkchocolate.jpg",
    titleProduct: "Dark Chocolate",
  },
  {
    id: "8",
    imageUrl: "/flavoredcaffelatte.jpg",
    titleProduct: "Flavored Caffe Latte",
  },
  {
    id: "9",
    imageUrl: "/honeylemonade.jpg",
    titleProduct: "Honey Lemonade",
  },
  {
    id: "10",
    imageUrl: "/java.jpg",
    titleProduct: "Java",
  },
  {
    id: "11",
    imageUrl: "/matchalatte.jpg",
    titleProduct: "Matcha Latte",
  },
];

const ProductSlider = () => {
  return (
    <div className="w-full flex justify-center pb-20">
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={swiper => console.log(swiper)}
        slideActiveClass=" scale-110 z-40 cursor-grap border-[10px] border-y-[30px] border-[#ca0202]"
        centeredSlides={true}
        initialSlide={3}
        loop={true}
        className="cursor-grap"
      >
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677313782/videos/production_ID_5052423_rxjw6j.mp4"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677318500/videos/istockphoto-1223190553-640_adpp_is_zjdew4.mp4"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677318661/videos/istockphoto-1346244376-640_adpp_is_qvbjg2.mp4"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677319226/videos/istockphoto-653831070-640_adpp_is_cqqalv.mp4"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677323469/videos/istockphoto-540627782-640_adpp_is_gu9spm.mp4"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="cursor-grap z-50 w-60">
          <video
            className="sm:w-96 md:w-80"
            controls
            src="https://res.cloudinary.com/dihhlmkrf/video/upload/v1677319226/videos/istockphoto-653831070-640_adpp_is_cqqalv.mp4"
          ></video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;

// {products.map(p => (
//   <SwiperSlide>
//     <div className="flex flex-col items-center gap-4">
//       <Link to={`/menu/${p.id}`}>
//         <img
//           alt="product"
//           src={p.imageUrl}
//           className="w-80 cursor-pointer rounded-md"
//         />
//       </Link>
//       <p className="text-md md:text-xl lg:text-3xl">
//         {p.titleProduct}
//       </p>
//     </div>
//   </SwiperSlide>
// ))}
