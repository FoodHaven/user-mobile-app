import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import AccountTable from "../components/accountTable";
import AccountForm from "../components/accountForm"


class AccountDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('http://chenyoung01.pythonanywhere.com/users/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        users: json,
      })
    });
  }
  render(){

    var {isLoaded, users} = this.state;
    if (!isLoaded){
      return <div>
        Loading...
      </div>
    }
    else if (isLoaded){
  return (
    <div>

      <HeaderUser />
      <div
      className=" flex flex-col pt-5 items-center max-w-lg mx-auto"
      style={{ width: "80vw", height: "100vh", overflow: "hidden" }}
      >

      <h3 className="text-xl font-semibold px-5">Personal Information</h3>

    <AccountForm user={users[0]}/>
    <h3 className="text-xl font-semibold px-5 mt-2">Past orders</h3>

    <AccountTable user={users[0]}/>
    </div>
    </div>
  );
  }
}
};

export default AccountDashboard;
