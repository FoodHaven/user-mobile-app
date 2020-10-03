import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import DealContent from "../components/dealContent";


class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      deals: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('http://chenyoung01.pythonanywhere.com/outputs/deals/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        deals: json,
      })
    });
  }

  render() {


    var {isLoaded, deals} = this.state;
    console.log(deals)
    if (!isLoaded){
      return <div>
        Loading...
      </div>
    }
    else {
      return (
        <div>
          <HeaderUser />
          <div className="grid gap-1">
            
            {
              deals.map(deal => (
                <DealContent key={deal.id} deal={deal}/>
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
