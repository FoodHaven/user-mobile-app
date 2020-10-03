import React, { useState, useEffect, Component } from "react";
import HeaderUser from "../components/headerUser";
import DealContent from "../components/dealContent";
// import axios from 'axios';


const sample1 = {
  name: "Crazy Sushi Deal",
  restaurant: "Michael Sushi Bar",
  imgUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  remainingSpots: 10,  //Number of spots left
  totalSpots: 40, //Total number of spots
  description: "Hand-crafted Sushi by reknowned chef Michael Chen",
  timeleft: 90,
  itemLists: [{name: "steak", price: 1, url: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg"}, {name: "apple", price: 1, url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}],
  price: 5,
};

const sample2 = {
  name: "Sick Deal",
  restaurant: "Noodle Shack",
  imgUrl: "https://0013a05e776cb3a3cacf-7d16a3f45b9fed243f74feb2d088df02.ssl.cf1.rackcdn.com/Andy-Post-Food-Photography-Ramen-Noodles.jpg",
  description: "Awe-inspiring ramen that actually makes people sick",
  remainingSpots: 20,
  totalSpots: 40,
  itemLists: [{name: "steak", price: 1, url: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg"}, {name: "apple", price: 1, url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}],
  timeleft: 4,
  price: 10,
};

class UserDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    // fetch()
  }

  render() {
  return (
    <div>
      <HeaderUser />
      <div className="grid gap-1">

        <DealContent item={sample1} />
        <DealContent item={sample2} />
        <DealContent item={sample1} />   

      </div>
    </div>
  );
  }
};

export default UserDashboard;
