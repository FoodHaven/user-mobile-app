import React from "react";
const AccountForm = (props) => {
return (
    <>
    
      <form className="max-w-sm mb-2 mt-2 w-full px-3">
        <div className="flex items-center py-2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text"  defaultValue={props.user.name}  placeholder="Your Name"/>
        </div>
        <div className="flex items-center py-2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" defaultValue={props.user.phonenumber} placeholder="Phone Number"/>
        </div>
    </form>    
</>
)
}

export default AccountForm;