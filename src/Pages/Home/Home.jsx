import React from "react";
import BigBanner from "../../Components/BigBanner/BigBanner";
import Category from "../../Components/Category/Category";
import Navbar from "../../Components/Navbar/Navbar";
import Pic from "../../Components/Pic/Pic";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import picData from "../../Json/picData";
import trendData from "../../Json/trendData";
import specialCardData from "../../Json/specialCardData";
import "./Home.css";
import expertData from "../../Json/expertData";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Expert from "../../Components/Expert/Expert";

const Home = () => {
  return (
    <div className="">
      {/* Navbar  */}
      <Navbar />
      {/* category  */}
      <div className="homeCategory ">
        <Category />
      </div>
      {/* top pic  */}
      <div className="mt-5 px-2 lg:px-10 lg:mt-10  ">
        <h1 className="text-center text-3xl">Our Pic for you</h1>
        <div className="pic_card flex  overflow-x-scroll    flex-nowrap  z-30  mt-5">
          {picData.map((props) => {
            return <Pic imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      {/* Trending product  */}
      <div className=" px-2 mt-5 lg:px-10 md:mt-10 ">
        <h1 className="text-center text-3xl">Trending Products</h1>
        <div className="pic_card flex  overflow-x-scroll    flex-nowrap  z-30  mt-5">
          {trendData.map((props) => {
            return <Pic imgUrl={props.img} key={props.id} />;
          
          })}
        </div>
      </div>
      {/* big banner  */}
      <div className="bigBanner ">
        <BigBanner />
      </div>
      {/* special product  */}
      <div className="px-2 mt-4 lg:px-10 md:mt-12">
        <h1 className="text-center text-3xl md:text-5xl font-normal">
          Swaty Specials
        </h1>
        <div className="pic_card mt-4 flex  overflow-x-scroll z-30 flex-nowrap  sm:mt-12">
          {specialCardData.map((props) => {
            return (
              <div  key={props.id}>
                <SpecialCard imgUrl={props.img} key={props.id} />
              </div>
            );
          })}
        </div>
      </div>
      {/* talk to expert  */}
      <div className="home__expert mt-4 sm:mt-12">
        <h1 className="text-center text-3xl">Talk to our Experts</h1>
        <div className="home__expertTeam flex justify-center lex-nowrap z-30 mt-2 sm:mt-5">
          {expertData.map((props) => {
            return <Expert imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      {/* About  */}
      <div className="home__about mt-4 md:mt-10">
        <h1 className="text-center text-4xl">About Swaty</h1>
        <div className=" px-4 xl:px-72 mt-5 sm:mt-10">
          <About />
        </div>
      </div>
      {/* Footer  */}
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
