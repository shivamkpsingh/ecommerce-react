import React from "react";

const ProductReviewCard = ({imgUrl,data}) => {
  return (
    <div className="flex bg-white flex-col shadow-xl p-4 mt-2">
      <div className="flex">
        <img
          src={imgUrl}
          alt=""
          className=" w-5 h-5  md:w-7 md:h-7 rounded-full"
        />
        <p className=" text-sm text-center">
         {data}
        </p>
        <img
          src={imgUrl}
          alt=""
          className="w-5 h-5 md:w-7 md:h-7 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProductReviewCard;
