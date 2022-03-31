import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ imgUrl }) => {
  return (
    <div className="categoryCard mr-3 rounded-lg shadow">
      <img src={imgUrl} alt="" className="mr-2 h-44 w-52 categoryCard__img rounded-lg" />
    </div>
  );
};

export default CategoryCard;
