import React from 'react'
import Color from "../../Components/ProductDetails/Color";
import Floric from "../../Components/ProductDetails/Floric";
import floricData from "../../Json/floricData";
import blouseData from "../../Json/BlouseData";
import colorData from "../../Json/colorData";
import borderData from "../../Json/borderData";

const CustomData = () => {
    return (
        <div className="mt-2 sm:mt-0 lg:mt-6">
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
            <div className="mt-2 sm:mt-2 lg:mt-6">
              <h1 className="text-center text-lg font-light">Choose Border</h1>
              <div className="flex scrollbar overflow-x-scroll">
                {borderData.map((props) => {
                  return <Floric imgUrl={props.img} key={props.id} />;
                })}
              </div>
            </div>
            <div className="mt-2 sm:mt-2 lg:mt-6">
              <h1 className="text-center text-lg font-light">
                Select Back Design
              </h1>
              <div className="flex scrollbar overflow-x-scroll">
                {blouseData.map((props) => {
                  return <Floric imgUrl={props.img} key={props.id} />;
                })}
              </div>
            </div>
            <div className="mt-2 sm:mt-2 lg:mt-6">
              <h1 className="text-center text-lg font-light">
                Select Back Design
              </h1>
              <div className="flex scrollbar overflow-x-scroll">
                {blouseData.map((props) => {
                  return <Floric imgUrl={props.img} key={props.id} />;
                })}
              </div>
            </div>
          </div>
    )
}

export default CustomData
