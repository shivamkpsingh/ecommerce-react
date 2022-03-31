import React,{useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Customization.css";
import BigProduct from "../../Components/ProductDetails/BigProduct";
import SmallProduct from "../../Components/ProductDetails/SmallProduct";
import CustomeInfo from "../../Components/Customization/CustomeInfo";
import Ref from "../../Components/ProductDetails/Ref";
import Buttons from "../../Components/ProductDetails/Buttons";
import CustomData from "../../Components/Customization/CustomData";
import expertData from "../../Json/expertData";
import Expert from "../../Components/Expert/Expert";
import Discription from "../../Components/ProductDetails/Discription";
import picData from "../../Json/picData";
import Pic from "../../Components/Pic/Pic";
import merchantData from "../../Json/merchantData";
import Merchant from "../../Components/Merchant/Merchant";
import specialCardData from "../../Json/specialCardData";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import smallProduct from "../../Json/smallProduct";

const Customization = () => {
  const [productImage, setProductImage] = useState(0)
  return (
    <div className="Customization">
      <Navbar />
      <div className="Customizaton__section  w-full flex flex-col sm:flex-row h-full px-2 lg:px-10  mt-10">
        <div className="custome__left w-full sm:w-1/2 ">
          <BigProduct  displayImage={smallProduct[productImage].img}/>
          <div className="flex  productDetail__middle overflow-x-scroll">
              {smallProduct.map((props,index) => {
                return (
                  <div>
                    <SmallProduct key={props.id} imgUrl={props.img} id={index} setImage={setProductImage} />
                  </div>
                );
              })}
            </div>
        </div>
        <div className="custome__right w-full sm:w-1/2 scrollbar overflow-y-scroll sm:ml-5">
          <CustomeInfo />
          <CustomData/>
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row items-center lg:px-10 px-2">
        <div className="w-full sm:w-1/2 md:w-3/4">
          <Ref />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <Buttons />
        </div>
      </div>
      <div className="home__expert mt-4 sm:mt-12 lg:px-10 px-2">
        <h1 className="text-center text-3xl">Select One Merchant</h1>
        <div className="home__expertTeam scrollbar flex  overflow-x-scroll flex-nowrap z-30 mt-2 sm:mt-5" >
          {merchantData.map((props) => {
            return <Merchant imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="px-2 sm:px-10">
        <Discription/>
      </div>
      <div className="mt-5 px-2 lg:px-10 lg:mt-10 ">
        <h1 className="text-center text-3xl">Top Pic for you</h1>
        <div className="pic_card flex  overflow-x-scroll    flex-nowrap  z-30  mt-5">
          {picData.map((props) => {
            return <Pic imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="home__expert mt-4 sm:mt-12">
        <h1 className="text-center text-3xl">Select One Merchant</h1>
        <div className="home__expertTeam flex justify-center lex-nowrap z-30 mt-2 sm:mt-5">
          {expertData.map((props) => {
            return <Expert imgUrl={props.img} key={props.id} />;
          })}
        </div>
      </div>
      <div className="px-2 mt-4 lg:px-10 md:mt-12">
        <h1 className="text-center text-3xl md:text-5xl font-normal">Swaty Specials</h1>
        <div className="pic_card mt-4 flex  overflow-x-scroll z-30 flex-nowrap  sm:mt-12">
          {specialCardData.map((props) => {
            return(
              <div>
              <SpecialCard imgUrl={props.img} key={props.id} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="home__about mt-4 md:mt-10">
        <h1 className="text-center text-4xl">About Swaty</h1>
        <div className=" px-4 xl:px-72 mt-5 sm:mt-10">
          <About />
        </div>
      </div>
      {/* Footer  */}
      <div className="home__footer">
          <Footer/>
      </div>
      
    </div>
  );
};

export default Customization;
