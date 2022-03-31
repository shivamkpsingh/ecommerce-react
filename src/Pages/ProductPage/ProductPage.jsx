import React from "react";
import Expert from "../../Components/Expert/Expert";
import Navbar from "../../Components/Navbar/Navbar";
import ProductList from "../../Components/ProductList/ProductList";
import ProductNav from "../../Components/ProductNav/ProductNav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductListData from "../../Json/ProductListData";
import expertData from "../../Json/expertData";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productPage">
      <Navbar />
      <div className="productPage__total flex mt-10 px-2 sm:px-0  ">
        <div className="productPage__sidebar overflow-y-scroll w-1/2 sm:w-1/4  shadow-2xl ">
          <Sidebar />
        </div>
        <div className="productPage__right overflow-y-scroll   w-1/2 sm:w-full">
          <ProductNav />
          <div className="ProductPage__List  flex flex-wrap justify-center">
            {ProductListData.map((props) => {
              return <ProductList imgUrl={props.img} key={props.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="ProductPage__expert mt-4 sm:mt-12">
        <h1 className="text-center text-3xl">Talk to our Experts</h1>
        <div className="ProductPage__expertTeam flex justify-center lex-nowrap z-30 mt-2 sm:mt-5">
          {expertData.map((props) => {
            return <Expert imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="ProductPage__about mt-4 md:mt-10">
        <h1 className="text-center text-4xl">About Swaty</h1>
        <div className=" px-4 xl:px-72 mt-5 sm:mt-10">
          <About />
        </div>
      </div>
      {/* Footer  */}
      <div className="ProductPage__footer">
          <Footer/>
      </div>
    </div>
  );
};

export default ProductPage;
