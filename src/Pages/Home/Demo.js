import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "./PrimaryButton";

const Demo = () => {
  return (
    <div className="card lg:card-side py-10  shadow-xl">
      <figure>
        <img src={treatment} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="text-4xl font-bold">
          Exceptional Dental <br></br> care,on Your Terms
        </h2>
        <p className="content-justify">
          Click the button to listen on Spotiwhy app.With cosmetic dentistry you
          can reshape your teeth and your gum. A complete smile makeover
          procedure combines veneers, crowns, implants, teeth whitening and gum
          reshaping treatments to create a perfect smile.
        </p>
        <PrimaryButton>Listen</PrimaryButton>
      </div>
    </div>
  );
};

export default Demo;
