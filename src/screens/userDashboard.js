import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import DealContent from "../components/dealContent";
import ClipLoader from "react-spinners/ClipLoader";
import DealSearch from "../components/dealSearch";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 50% auto;
`;

class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      all_deals: [],
      deals: [],
      dealsLoaded: false,
      ordersLoaded: false,
      orders: [],
      user_id: 1,
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleUnconfirm = this.handleUnconfirm.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount(){
    fetch('http://chenyoung01.pythonanywhere.com/outputs/deals/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        all_deals: json,
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

  handleSearch(name){
    this.setState({
      deals: this.state.all_deals.filter(deal => deal.restaurant_name.toLowerCase().includes(name.toLowerCase()))
    })
  }

  handleConfirm = (deal_id) => {
    // this.handleShowModal()
    const user_id = 1

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: "http://chenyoung01.pythonanywhere.com/users/" + user_id + "/",
        deal: "http://chenyoung01.pythonanywhere.com/deals/" + deal_id + "/",
      })
    }
    
      fetch("http://chenyoung01.pythonanywhere.com/orders/", configObj)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({
          dealsLoaded: false,
        });
        this.componentDidMount()
      })
  }

  handleUnconfirm = (order_id) => {
    // this.handleShowModal()
    const user_id = 1

      fetch("http://chenyoung01.pythonanywhere.com/orders/" + order_id, {
        method: "DELETE"
      })
      .then(res => {
        this.setState({
          dealsLoaded: false,
        });
        this.componentDidMount()
      })
    
  }

  render() {


    var {ordersLoaded, dealsLoaded, deals, orders} = this.state;
    // console.log(deals)
    if (!ordersLoaded || !dealsLoaded){
      return  (
        <>
        <HeaderUser />
        <div className="sweet-loading">
          <ClipLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
      </>)
    }
    else {
      return (
        <div>
          <HeaderUser />
          <DealSearch handleSearch={this.handleSearch}/>
          <div className="grid gap-1">
            
            {
              deals.map(deal => (
                <DealContent key={deal.id} deal={deal} order={orders} handleConfirm={this.handleConfirm} handleUnconfirm={this.handleUnconfirm}/>
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
