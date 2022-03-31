import React,{useState} from "react";
import Merchant from "../../Components/Merchant/Merchant";
import Navbar from "../../Components/Navbar/Navbar";
import BigProduct from "../../Components/ProductDetails/BigProduct";
import ProductInfo from "../../Components/ProductDetails/ProductInfo";
import SmallProduct from "../../Components/ProductDetails/SmallProduct";
import merchantData from "../../Json/merchantData";
import "./ProductDetail.css";
import Ref from "../../Components/ProductDetails/Ref";
import Discription from "../../Components/ProductDetails/Discription";
import Pic from "../../Components/Pic/Pic";
import picData from "../../Json/picData";
import Expert from "../../Components/Expert/Expert";
import expertData from "../../Json/expertData";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import specialCardData from "../../Json/specialCardData";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import ButtonGroup from "../../Components/ProductDetails/ButtonGroup";
import "./ProductDetail.css";
import ProductDetailData from "../../Components/ProductDetails/ProductDetailData";
import smallProduct from "../../Json/smallProduct";

const ProductDetail = () => {
  const [productImage, setProductImage] = useState(0)
  return (
    <div className="productDetail">
      <Navbar />
      <div className="productDetail__section  flex  md:flex-row flex-col  md:mt-6">
        <div className="productDetail__data  w-full sm:w-full  md:w-5/6 px-2  flex flex-col sm:flex-row lg:px-10">
          <div className="productDetails__dataLeft flex flex-col  w-full sm:w-1/2">
            <BigProduct displayImage={smallProduct[productImage].img}/>
            <div className="flex  productDetail__middle overflow-x-scroll">
              {smallProduct.map((props,index) => {
                return (
                  <div key={props.id}>
                    <SmallProduct key={props.id} imgUrl={props.img} id={index} setImage={setProductImage} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" ml-2 sm:ml-4  lg:ml-12 w-full sm:w-1/2 overflow-y-scroll productDetail__middle">
            <ProductInfo />
            <div className="mt-2 sm:mt-0 lg:mt-6">
              <ProductDetailData />
            </div>
          </div>
        </div>
        <div className="CategoryRight mt-5 sm:mt-5 overflow-x-scroll sm:overflow-y-scroll w-full md:ml-5 md:w-1/6">
          <h1 className="text-center sticky top-0 z-10 bg-white">
            Our Top merchant
          </h1>
          <div className="merchant flex  md:items-center md:justify-center  md:flex-col   overflow-x-scroll ">
            {merchantData.map((props) => {
              return <Merchant imgUrl={props.img} key={props.id} />;
            })}
          </div>
        </div>
      </div>
      <div className=" mt-5 px-2 lg:px-10 sm:mt-10">
        <Ref />
      </div>
      <div className="mt-5 px-2 lg:px-10 sm:mt-10">
        <ButtonGroup />
      </div>
      <div className="px-2 sm:px-10">
        <Discription />
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
      <div className="px-2 mt-4 lg:px-10 md:mt-12">
        <h1 className="text-center text-3xl md:text-5xl font-normal">
          Swaty Specials
        </h1>
        <div className="pic_card mt-4 flex  overflow-x-scroll z-30 flex-nowrap  sm:mt-12">
          {specialCardData.map((props) => {
            return (
              <div key={props.id}>
                <SpecialCard imgUrl={props.img} key={props.id} />
              </div>
            );
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

export default ProductDetail;
