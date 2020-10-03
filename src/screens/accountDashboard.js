import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import AccountTable from "../components/accountTable";
import AccountForm from "../components/accountForm"
import { bindActionCreators } from "redux";
import ClipLoader from "react-spinners/ClipLoader";

class AccountDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: 1,
      user: {},
      orders: [],
      userLoaded: false,
      orderLoaded: false,
    }
  }

  componentDidMount(){
    fetch('http://chenyoung01.pythonanywhere.com/users/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        userLoaded: true,
        user: json.find(user => user.id == this.state.user_id),
      })
    });
    fetch('http://chenyoung01.pythonanywhere.com/outputs/orders/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        orderLoaded: true,
        orders: json.filter(order => order.user_id == this.state.user_id),
      })
    });
  }

  updateUser(name, phonenumber){
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phonenumber,
      })
    }
    const user_id = 1
    
      fetch("http://chenyoung01.pythonanywhere.com/users/" + user_id + "/", configObj)
      .then(res => res.json())
      .then(res => {
        // alert("updated!")
        // window.location.reload(false);
      })
    
  }

  render(){

    var {userLoaded, user, orderLoaded, orders} = this.state;
    if (!userLoaded || !orderLoaded){
      return       <div className="sweet-loading">
        <ClipLoader
        // css={}
        size={50}
        color={"#123abc"}
        loading={this.state.loading}
      />
    </div>
    }
    else {
  return (
    <div>

      <HeaderUser />
      <div
      className=" flex flex-col pt-5 items-center max-w-lg mx-auto"
      style={{ width: "80vw", height: "100vh", overflow: "hidden" }}
      >

      <h3 className="text-xl font-semibold px-5">Personal Information</h3>

    <AccountForm user={user} updateUser={this.updateUser}/>
    <h3 className="text-xl font-semibold px-5 mt-2">Past orders</h3>

    <AccountTable orders={orders}/>
    </div>
    <div style={{height: "2vh"}}>

    </div>
    </div>
  );
  }
}
};

export default AccountDashboard;
