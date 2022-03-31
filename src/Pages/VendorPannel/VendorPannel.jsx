import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../../Components/Vendor/Profile";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import PannelSidebar from "../../Components/Vendor/PannelSidebar";
import ProductNav from "../../Components/ProductNav/ProductNav";
import ProductListData from "../../Json/ProductListData";
import ProductList from "../../Components/ProductList/ProductList";
import specialCardData from "../../Json/specialCardData";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import picData from "../../Json/picData";
import Pic from "../../Components/Pic/Pic";
import expertData from "../../Json/expertData";
import Expert from "../../Components/Expert/Expert";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import "./VendorPannel.css";
import Upload from "../../Components/Vendor/Upload";

const VendorPannel = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Profile />
      </div>
      <div className="productPage__total flex mt-52 px-2 sm:px-0  ">
        <div className="productPage__sidebar overflow-y-scroll w-1/2 sm:w-1/4  shadow-2xl ">
          <PannelSidebar />
        </div>
        <div className="productPage__right overflow-y-scroll   w-1/2 sm:w-full">
          <ProductNav />
          <div className="ProductPage__List  flex flex-wrap justify-center">
            {ProductListData.map((props) => {
              return <ProductList imgUrl={props.img} key={props.id} />;
            })}
            <Upload/>
          </div>
         
        </div>
      </div>
      <div className="px-2 mt-4 lg:px-10 md:mt-12    ">
        <h1 className="text-center text-3xl md:text-5xl font-normal">
          Swaty Specials
        </h1>
        <div className="pic_card mt-4 flex  overflow-x-scroll    flex-nowrap  z-30  sm:mt-12">
          {specialCardData.map((props) => {
            return <SpecialCard imgUrl={props.img} key={props.id} />;
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
      <div className="home__expert mt-4 sm:mt-12">
        <h1 className="text-center text-3xl">Talk to our Experts</h1>
        <div className="home__expertTeam flex justify-center lex-nowrap z-30 mt-2 sm:mt-5">
          {expertData.map((props) => {
            return <Expert imgUrl={props.img} key={props.id} />;
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
        <Footer />
      </div>
    </div>
  );
};

export default VendorPannel;
