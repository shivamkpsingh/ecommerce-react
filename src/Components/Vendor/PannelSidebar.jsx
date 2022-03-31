import React from "react";
const PannelSidebar = () => {
  return (
    <div className="sidebar  ">
      <h1 className="sm:text-center text-xl border-b border-gray-500 sticky top-0 bg-white">Sub Category</h1>
      <div className="sidebar__category flex flex-col sm:items-center">
        <a href="/a" className="mt-4">Sub Category 1</a>
        <a href="/b" className="mt-4">Sub Category 2</a>
        <a href="/c" className="mt-4">Sub Category 3</a>
        <a href="/d" className="mt-4">Sub Category 4</a>
        <a href="/e" className="mt-4">Sub Category 5</a>
        <a href="/f" className="mt-4">Sub Category 6</a>
        <button className=" bg-gray-500 px-10 rounded-2xl py-2 mt-4">
         + Add Sub Category
        </button>
      </div>
     
    </div>
  );
};

export default PannelSidebar;
