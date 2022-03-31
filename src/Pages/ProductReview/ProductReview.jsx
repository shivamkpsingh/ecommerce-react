import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BigProduct from "../../Components/ProductDetails/BigProduct";
import SmallProduct from "../../Components/ProductDetails/SmallProduct";
import CustomeInfo from "../../Components/Customization/CustomeInfo";
// import CustomData from "../../Components/Customization/CustomData";
import merchantData from "../../Json/merchantData";
import Merchant from "../../Components/Merchant/Merchant";
import "./ProductReview.css";
import Discription from "../../Components/ProductDetails/Discription";
import ProductReviewCard from "../../Components/ProductReviewCard/ProductReviewCard";
import ButtonGroup from "../../Components/ProductDetails/ButtonGroup";
import reviewData from "../../Json/reviewData";
import expertData from "../../Json/expertData";
import Expert from "../../Components/Expert/Expert";
import picData from "../../Json/picData";
import Pic from "../../Components/Pic/Pic";
import specialCardData from "../../Json/specialCardData";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import ProductForm from "../../Components/ProductDetails/ProductForm";
import ProductDetailData from "../../Components/ProductDetails/ProductDetailData";

const ProductReview = () => {
  return (
    <div className="productReview">
      <Navbar />
      <div className="Customizaton__section  w-full flex flex-col sm:flex-row h-full px-2 lg:px-10  mt-10">
        <div className="custome__left w-full sm:w-1/2 ">
          <BigProduct />
          <SmallProduct />
        </div>
        <div className="custome__right w-full sm:w-1/2 scrollbar overflow-y-scroll sm:ml-5">
          <CustomeInfo />
          <div className="mt-10">
          <ProductForm/>
          </div>
          <ProductDetailData/>
        </div>
        <div className="CategoryRight  md:block sm:overflow-y-scroll w-full sm:ml-10  sm:w-1/6">
          <h1 className="text-center sticky top-0 z-10 bg-white">
            Our Top merchant
          </h1>
          <div className="merchant  flex  flex-nowrap sm:items-center sm:justify-center sm:flex-col  overflow-x-scroll  z-100  ">
            {merchantData.map((props) => {
              return <Merchant imgUrl={props.img} key={props.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-10  mt-10">
        <ButtonGroup />
      </div>
      <div className=" w-full review flex flex-col md:flex-row h-full px-2 lg:px-10  mt-10">
        <div className="w-full md:w-1/2 overflow-y-scroll des ">
          <Discription />
        </div>
        <div className=" w-full md:w-1/2 review__card bg-yellow-100 px-2 sm:px-10 pt-5 overflow-y-scroll">
          {reviewData.map((props) => {
            return (
              <ProductReviewCard
                key={props.id}
                imgUrl={props.img}
                data={props.data}
              />
            );
          })}
        </div>
      </div>
      <div className="home__expert mt-4 sm:mt-12">
        <h1 className="text-center text-3xl">Talk to our Experts</h1>
        <div className="home__expertTeam flex justify-center lex-nowrap z-30 mt-2 sm:mt-5">
          {expertData.map((props) => {
            return <Expert imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="mt-5 px-2 lg:px-10 lg:mt-10 ">
        <h1 className="text-center text-3xl">Our Pic for you</h1>
        <div className="pic_card flex  overflow-x-scroll    flex-nowrap  z-30  mt-5">
          {picData.map((props) => {
            return <Pic imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="px-2 mt-4 lg:px-10 md:mt-12">
        <h1 className="text-center text-3xl md:text-5xl font-normal">
          Swaty Specials
        </h1>
        <div className="pic_card mt-4 flex  overflow-x-scroll z-30 flex-nowrap  sm:mt-12">
          {specialCardData.map((props) => {
            return (
              <div>
                <SpecialCard imgUrl={props.img} key={props.id} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="home__about mt-4 md:mt-10">
        <h1 className="text-center text-4xl">About Swaty</h1>
        <div className=" px-4 xl:px-72 mt-5 sm:mt-10">
          <About />
        </div>
      </div>
      <div className="home__footer">
          <Footer/>
      </div>

    </div>
  );
};

export default ProductReview;
