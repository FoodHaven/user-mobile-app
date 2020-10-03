import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import AccountTable from "../components/accountTable";
import AccountForm from "../components/accountForm"


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
  render(){

    var {userLoaded, user, orderLoaded, orders} = this.state;
    if (!userLoaded || !orderLoaded){
      return <div>
        Loading...
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

    <AccountForm user={user}/>
    <h3 className="text-xl font-semibold px-5 mt-2">Past orders</h3>

    <AccountTable orders={orders}/>
    </div>
    </div>
  );
  }
}
};

export default AccountDashboard;
