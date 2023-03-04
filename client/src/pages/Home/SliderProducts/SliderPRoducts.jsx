// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const SliderProducts = () => {
  const {products} = useSelector(state => state.products);

  return (
    <motion.div
      initial={{y: "300px"}}
      whileInView={{y: 0}}
      transition={{duration: 1}}
      className="w-full flex justify-center py-20"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        onSwiper={swiper => console.log(swiper)}
        centeredSlides={true}
        initialSlide={3}
        loop={true}
        className="cursor-grap"
      >
        {products.map(p => (
          <SwiperSlide>
            <Link to={`/products/${p._id}`}>
              <div className="flex flex-col justify-between items-center gap-6 h-full">
                <img
                  src={p.imageUrl}
                  className="w-28 md:w-40"
                  alt="Product Slide"
                />
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="font-semibold text-sm sm:text-md md:text-xl">
                    ${p.price}
                  </p>
                  <h6 className="md:font-bold text-xs sm:text-md md:text-lg lg:text-2xl">
                    {p.titleProduct}
                  </h6>
                  <button className="border-2 border-[#000]  sm:py-1 sm:px-2 md:px-4 rounded-2xl md:font-semibold text-xs sm:text-sm md:text-md hover:bg-[#ca0202] hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SliderProducts;

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
