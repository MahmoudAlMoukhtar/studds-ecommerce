import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
export default function Spinner() {
  return (
    <div className="flex justify-center my-80">
      <BeatLoader
        color={"#ca0202"}
        loading={true}
        cssOverride={""}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="text-center"
      ></BeatLoader>
    </div>
  );
}
