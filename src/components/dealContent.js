import React from "react";
import DealModal from '../components/dealModal';

const DealContent = (props) => {
    return (
      <div
      className="flex flex-col justify-center items-center max-w-lg mx-auto"
      style={{ width: "80vw", height: "400px" }}
    >
      <div className="h-64 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url('" + props.item.imgUrl + "')"}}>

      </div>
      <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{props.item.name} ($ {props.item.price})
      </div>
        <div className="flex items-center justify-between pt-2 px-3 bg-gray-400">
        <h1 className="text-gray-800 font-bold ">Time Left: {props.item.timeleft} mins</h1>
        {/* <h1 className="text-gray-800 font-bold ">Time Left: {props.item.timeleft}</h1> */}
        </div>
        <div className="flex items-center justify-between pb-2 px-3 bg-gray-400">
        <h1 className="text-gray-600 font-bold ">@{props.item.restaurant}</h1>
        <DealModal item={props.item}/>
        {/* <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Join!</button> */}
</div>
      </div>
    </div>
    );
  };
  
  export default DealContent;