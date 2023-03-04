import React from "react";
import {Link} from "react-router-dom";

const FiltersModal = ({
  setFiltersModalOpen,
  maxRangeValue,
  rangeValue,
  setRangeValue,
  setMaxRangeValue,
  uniqueColors,
  colorsFilterProducts,
  setColorsFilterProducts,
}) => {
  return (
    <div
      id="#Modal"
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"
        onClick={() => setFiltersModalOpen(false)}
      ></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex w-[100%] min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-8 w-[100%] relative flex flex-col justify-center items-start transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all w-[500px] my-20">
            <div className="text-center sm:text-left w-full h-full ">
              <section className="flex flex-col gap-4 w-96 bg-black text-white p-6">
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
                          checked={colorsFilterProducts.find(
                            color => color === c
                          )}
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
                              const colorsAfterRemove =
                                colorsFilterProducts.filter(
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
              <button
                onClick={() => setFiltersModalOpen(false)}
                className="text-white text-xl font-bold p-2 w-full bg-[#ca0202]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
