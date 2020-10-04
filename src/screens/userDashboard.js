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
      deals: this.state.all_deals.filter(deal => deal.restaurant_name.includes(name))
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
                <DealContent key={deal.id} deal={deal} order={orders} />
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
