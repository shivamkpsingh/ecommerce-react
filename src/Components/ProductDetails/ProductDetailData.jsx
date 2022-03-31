import React from "react";
import colorData from "../../Json/colorData";
import Color from '../ProductDetails/Color'
import floricData from "../../Json/floricData";
import Floric from '../ProductDetails/Floric'

const ProductDetailData = () => {
  return (
    <div className="mt-2 sm:mt-0 lg:mt-16">
      <div className="">
        <h1 className="text-center text-lg  font-light">Choose Color</h1>
        <div className="flex scrollbar overflow-x-scroll">
          {colorData.map((props) => {
            return <Color imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="mt-2 sm:mt-2 lg:mt-6">
        <h1 className="text-center text-lg font-light">Choose Floric</h1>
        <div className="flex scrollbar overflow-x-scroll">
          {floricData.map((props) => {
            return <Floric imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailData;
