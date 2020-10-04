import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../styles/tailwind.css";

const HeaderLink = (props) => {
  return (
    <div className="float-right ml-5 cursor-pointer float-right bg-gray-700 pl-3 pr-3 pt-3 pb-3 rounded-lg hover bg-gray-400">
      <Link to={`/${props.link}`}>{props.text}</Link>
    </div>
  );
};

const HeaderUser = () => {
  return (
    <div className="flex items-center flex-row pl-5 p-8 shadow-md bg-gray-800 text-gray-100">
      <img src="/logo.png" style={{width: "45px"}}></img>
      <div className="text-xl ml-3 mr-8">Food Haven</div>
      <HeaderLink text="Deals" link="deals"/>
      <HeaderLink text="Account" link="account" />
    </div>
  );
};

export default HeaderUser;
