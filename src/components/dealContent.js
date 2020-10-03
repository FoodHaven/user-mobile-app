import React from "react";
import DealModal from '../components/dealModal';

const DealContent = (props) => {
    return (
      <div
      className="flex flex-col justify-center items-center max-w-lg mx-auto"
      style={{ width: "80vw", height: "400px" }}
      >
      <div className="h-64 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url('" + props.deal.img_url + "')"}}>

      </div>
      <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{props.deal.title} ($ {props.deal.new_price})
      </div>
      <div className="flex items-center justify-between pt-2 px-3 bg-gray-400">
        <h1 className="text-gray-600 font-bold ">@{props.deal.restaurant_name}</h1>
      </div>
        <div className="flex items-center justify-between pt-1 pb-2 px-3 bg-gray-400">
        <h1 className="text-gray-700 font-bold ">{props.deal.final_votes - props.deal.orders.length} needed!</h1>
        <DealModal deal={props.deal}/>
      </div>
      </div>
    </div>
    );
  };
  
  export default DealContent;