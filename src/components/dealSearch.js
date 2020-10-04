import React, {Component} from "react";

export default class DealSearch extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="flex flex-col justify-center items-center max-w-lg mx-auto"
            style={{ width: "100vw"}}>
            <div className="p-8">
  <div className="bg-white flex items-center rounded-full shadow-xl">
    <input id="search_bar" className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"  type="text" placeholder="Search Restaurant" onChange={() => this.props.handleSearch(document.getElementById('search_bar').value)}/>
    
    <div className="p-4">
      <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center" 
      
      onClick={() => this.props.handleSearch(document.getElementById('search_bar').value)}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      </div>
    </div>
  </div></div>

        )
    }

}