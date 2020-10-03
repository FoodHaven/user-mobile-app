import React, { useState, useEffect } from "react";
import HeaderUser from "../components/headerUser";
import AccountTable from "../components/accountTable";
import AccountForm from "../components/accountForm"

const user = {
    name: "Ziming",
    phone_number: 2034353725,
    
}

const AccountDashboard = () => {

  return (
    <div>

      <HeaderUser />
      <div
      className=" flex flex-col pt-5 items-center max-w-lg mx-auto"
      style={{ width: "80vw", height: "100vh", overflow: "hidden;" }}
      >
      {/* <div className="relative w-auto my-6 max-w-3xl" style={{width: "80vw"}}> */}
      <h3 className="text-xl font-semibold px-5">Personal Information</h3>
      {/* </div> */}
    <AccountForm item={user}/>
    <h3 className="text-xl font-semibold px-5 mt-2">Past orders</h3>

    <AccountTable/>
    </div>
    </div>
  );
};

export default AccountDashboard;
