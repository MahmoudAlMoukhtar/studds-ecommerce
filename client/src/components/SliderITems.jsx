// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Link} from "react-router-dom";
import {Autoplay, Navigation} from "swiper";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {useSwiper} from "swiper/react";
import {useSelector} from "react-redux";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <AiOutlineArrowRight className="cursor-pointer" />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <AiOutlineArrowLeft className="cursor-pointer" />
    </button>
  );
};

const SliderItems = () => {
  const {products} = useSelector(state => state.products);

  return (
    <div className="w-40 flex justify-center py-20">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => console.log(swiper)}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        navigation
        className="cursor-grap"
      >
        {products.map(p => (
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex justify-center items-center gap-4">
                <div>
                  <SlidePrevButton />
                </div>
                <Link to={`/products/${p._id}`}>
                  <img src={p.imageUrl} className="w-24" alt="item" />
                </Link>
                <div>
                  <SlideNextButton />
                </div>
              </div>
              <p className="text-xs font-semibold">{p.titleProduct}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderItems;

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

/* 
<SwiperSlide className="cursor-grap opacity-[0.6]">
          <img src="/item02.png" className="w-40" />
        </SwiperSlide>
 */
