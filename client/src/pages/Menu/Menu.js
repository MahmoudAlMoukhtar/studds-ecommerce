import {React, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Rating from "../../components/Rating";
import {Slider} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import usePagination from "../../components/Pagination";
import FiltersModal from "../../components/FiltersModal";
import {useDispatch, useSelector} from "react-redux";
// const products = [
//   {
//     id: "1",
//     imageUrl: "/item01.png",
//     titleProduct: "HJC RPHA 11 Pro Carnage Helmet",
//     description:
//       "The track focused RPHA 11 offers great venting and field of view. It includes both clear and dark face shields complete with a pinlock lens.",
//     price: 80,
//   },
//   {
//     id: "2",
//     imageUrl: "/item02.png",
//     titleProduct: "HJC CS-R3 Mylo Helmet",
//     description:
//       "The HJC CS-R3 Helmet features adjustable ventilation and can it be upgraded with a variety of different face shield options down the road. Shield swap",
//     price: 90,
//   },
//   {
//     id: "3",
//     imageUrl: "/item03.png",
//     titleProduct: "HJC RPHA 11 Pro Carbon Nakri Helmet",
//     description:
//       "A carbon fiber shell makes the track focused RPHA 11 Pro an even more concentrated track day helmet compared to the fiberglass composite version",
//     price: 140,
//   },
//   {
//     id: "4",
//     imageUrl: "/item04.png",
//     titleProduct: "HJC i 70 Reden Helmet",
//     description:
//       "Putting in a lot of miles requires a full-face lid that is comfortable and lightweight. The sun shield adjusts to your face, not the other way round",
//     price: 172,
//   },
//   {
//     id: "5",
//     imageUrl: "/item05.png",
//     titleProduct: "HJC F70 Deathstroke Helmet",
//     description:
//       "Fiberglass composite helmet with an internal sun visor offers commuting and touring performance without breaking the bank.",
//     price: 319,
//   },
//   {
//     id: "6",
//     imageUrl: "/item06.png",
//     titleProduct: "Bell Moto-9 Mips Helmet - Solid",
//     description:
//       "The Bell Moto 9 MIPS Helmet features a composite Tri-Matrix shell construction that is extremely lightweight and is designed to maximize air flow and is Snell M2015 certified to the latest Snell standards to keep you protected. Safe, stylish and comfortable. The MIPS system dramatically improves rotational impact energy displacement.",
//     price: 103,
//   },
//   {
//     id: "7",
//     imageUrl: "/item07.png",
//     titleProduct: "HJC CS-MX 2 Trax Helmet",
//     description:
//       "The HJC CS-MX 2 Helmet features a very broad field of view and strategically positioned ventilation channels for forcing cool air in and hot air out",
//     price: 103,
//   },
//   {
//     id: "8",
//     imageUrl: "/item08.png",
//     titleProduct: "HJC CS-MX 2 Creeper Helmet",
//     description:
//       "The HJC CS-MX 2 Helmet features a very broad field of view and strategically positioned ventilation channels for forcing cool air in and hot air out.",
//     price: 103,
//   },
// ];

const Menu = () => {
  const {products} = useSelector(state => state.products);
  const [rangeValue, setRangeValue] = useState(0);
  const [maxRangeValue, setMaxRangeValue] = useState(500);
  const [page, setPage] = useState(1);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState("sortByHeghitPrice");
  const [colorsFilterProducts, setColorsFilterProducts] = useState([]);
  const [typeFilterProducts, setTypeFilterProducts] = useState([]);

  const productsSorted = products.sort((a, b) => {
    if (sortedProducts === "sortByHeghitPrice") {
      if (a.price >= b.price) {
        return -1;
      } else if (a.price <= b.price) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortedProducts === "sortByMinPrice") {
      if (a.price <= b.price) {
        return -1;
      } else if (a.price >= b.price) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortedProducts === "sortByNewest") {
      if (a.createdAt >= b.createdAt) {
        return -1;
      } else if (a.createdAt <= b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  /* typeFilterProducts.find(t => t === p.type) */
  const productsPriceFilter = productsSorted.filter(p => {
    if (colorsFilterProducts.length === 0) {
      return p.price <= maxRangeValue && p.price >= rangeValue;
    } else if (colorsFilterProducts.length === 0) {
    } else {
      return (
        p.price <= maxRangeValue &&
        p.price >= rangeValue &&
        colorsFilterProducts.find(c => c === p.color)
      );
    }
  });

  const PER_PAGE = 6;
  const count = Math.ceil(productsPriceFilter?.length / PER_PAGE);
  const _DATA = usePagination(productsPriceFilter, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const colorsProducts = products
    .map(p => p.color)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

  const uniqueColors = [...new Set(colorsProducts)];
  const uniqueTypes = [
    ...new Set(
      products
        .map(p => p.type)
        .sort((a, b) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else {
            return 0;
          }
        })
    ),
  ];

  return (
    <>
      {filtersModalOpen && (
        <FiltersModal
          setFiltersModalOpen={setFiltersModalOpen}
          maxRangeValue={maxRangeValue}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          setMaxRangeValue={setMaxRangeValue}
          uniqueColors={uniqueColors}
          colorsFilterProducts={colorsFilterProducts}
          setColorsFilterProducts={setColorsFilterProducts}
        />
      )}
      <div className=" flex flex-col items-start my-10 text-black rounded bg-[#d9d4ce] px-4 sm:px-10 lg:px-20 w-full">
        <div className="flex justify-between items-start gap-10 w-full py-10">
          <section className="flex flex-col gap-4 w-96 bg-black text-white p-6 hidden lg:block">
            <h4 className="text-xl font-bold">FILTERS</h4>
            <div
              id="filter_color"
              className="flex flex-col gap-6 h-60 overflow-y-scroll"
            >
              <h6 className="font-semibold">color</h6>
              <ul className="flex flex-col gap-2 border-y-[1px] border-black">
                {uniqueColors.map(c => (
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      onChange={e => {
                        if (e.target.checked) {
                          const finded = colorsFilterProducts.find(
                            color => color === c
                          );
                          if (!finded) {
                            const colorsFilterAfterAdd = [
                              ...colorsFilterProducts,
                              c,
                            ];
                            setColorsFilterProducts(colorsFilterAfterAdd);
                            //console.log(colorsFilterProducts);
                          }
                        } else {
                          const colorsAfterRemove = colorsFilterProducts.filter(
                            color => color !== c
                          );
                          setColorsFilterProducts(colorsAfterRemove);
                          //console.log(colorsFilterProducts);
                        }
                      }}
                    />
                    <p>{c}</p>
                  </div>
                ))}
              </ul>
            </div>

            <div id="filter-price" className="flex flex-col gap-6">
              <h6 className="font-semibold">Price Range</h6>
              <p>min</p>
              <input
                type="number"
                value={rangeValue}
                onChange={e => setRangeValue(e.target.value)}
                className="text-black p-2"
              />
              <p>max</p>
              <input
                type="number"
                value={maxRangeValue}
                onChange={e => setMaxRangeValue(e.target.value)}
                className="text-black p-2"
              />
            </div>
          </section>
          <motion.div
            variants={container}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-2 items-center w-full"
          >
            <div className="flex justify-between items-center w-full lg:px-16">
              <select
                className="text-black p-2 rounded cursor-pointer bg-[#d9d4ce] border-1 border-[#ca0202] shadow-lg"
                onChange={e => setSortedProducts(e.target.value)}
              >
                <option value={"sortByHeghitPrice"}>
                  sort by heghit price
                </option>
                <option value={"sortByMinPrice"}>sort by min price</option>
              </select>
              <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={() => setFiltersModalOpen(true)}
              className="w-full py-4 bg-black text-white lg:hidden"
            >
              FILTERS
            </button>
            <section className="flex justify-center items-center flex-wrap gap-10 w-full ">
              {_DATA.currentData().map(p => {
                return (
                  <motion.div
                    variants={item}
                    className="item flex flex-col justify-between items-center gap-6 w-60 h-[350px] hover:scale-105 transtion duration-200 shadow-2xl p-4 bg-[#d9d4ce] hover:bg-[#000] hover:text-white"
                  >
                    <img src={p.imageUrl} className="w-28" />
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Rating />
                      <h6 className="font-bold text-xl">{p.titleProduct}</h6>
                      <p>${p.price}</p>
                      <Link
                        to={`/products/${p._id}`}
                        className="border-2 border-[#000] py-1 px-4 rounded-2xl font-semibold bg-[#ca0202] hover:text-white text-white transtion duration-200"
                      >
                        Read more
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </section>
          </motion.div>
        </div>
        <section className="flex flex-col items-center gap-20 bg-black text-white w-full mt-20 py-40">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            BEST SALES PRODUCTS
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 px-4">
            {products
              .map(p => (
                <div className="flex flex-col items-center gap-2 hover:scale-105 transtion duration-200 text-center">
                  <Link to={`/products/${p._id}`}>
                    <img src={p.imageUrl} className="w-40 sm:w-24" alt="item" />
                  </Link>

                  <p className="text-xl sm:text-xs">{p.titleProduct}</p>
                </div>
              ))
              .slice(3)}
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;

/* 
 <div
              id="filter_type"
              className="flex flex-col gap-6 h-60 overflow-y-scroll"
            >
              <h6 className="font-semibold">Helmet Type</h6>
              <ul className="flex flex-col gap-2 border-y-[1px] border-black">
                {uniqueTypes.map(t => (
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      onChange={e => {
                        if (e.target.checked) {
                          const finded = typeFilterProducts.find(
                            type => type === t
                          );
                          if (!finded) {
                            const typeFilterAfterAdd = [
                              ...typeFilterProducts,
                              t,
                            ];
                            setTypeFilterProducts(typeFilterAfterAdd);
                          }
                        } else {
                          const typeFilter = typeFilterProducts.filter(
                            type => type !== t
                          );
                          setTypeFilterProducts(typeFilter);
                        }
                        console.log(e.target.checked);
                      }}
                    />
                    <p>{t}</p>
                  </div>
                ))}
              </ul>
            </div>

*/
