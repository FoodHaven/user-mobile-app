import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import DealContent from "../components/dealContent";
import ClipLoader from "react-spinners/ClipLoader";


class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      deals: [],
      dealsLoaded: false,
      ordersLoaded: false,
      orders: [],
      user_id: 1,
    }
  }

  componentDidMount(){
    fetch('http://chenyoung01.pythonanywhere.com/outputs/deals/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        dealsLoaded: true,
        deals: json,
      })
    });
    fetch('http://chenyoung01.pythonanywhere.com/outputs/orders/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        ordersLoaded: true,
        orders: json.filter(order => order.user_id == this.state.user_id),
      })
    });

  }

  render() {


    var {ordersLoaded, dealsLoaded, deals, orders} = this.state;
    // console.log(deals)
    if (!ordersLoaded || !dealsLoaded){
      return <div className="sweet-loading">
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
          <div className="grid gap-1">
            
            {
              deals.map(deal => (
                <DealContent key={deal.id} deal={deal} order={orders}/>
              )
              )
            }
          </div>
        </div>
      );
    }
  }
};

export default UserDashboard;
