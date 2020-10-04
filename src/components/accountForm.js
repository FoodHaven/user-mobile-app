import React from "react";
const AccountForm = (props) => {
return (
    <>
    
      <form className="max-w-sm mb-2 mt-2 w-full px-3">
        <div className="flex items-center py-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                User Name
            </label>
            <input id="name" className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ml-5" type="text"  defaultValue={props.user.name}  placeholder="Your Name" onChange={() => {
                document.getElementById("updateButton").innerText = "Update"
                document.getElementById("updateButton").classList.remove("bg-green-500")
                document.getElementById("updateButton").classList.add("bg-blue-500")
            }}/>
        </div>
        <div className="flex items-center py-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                Phone Number
            </label>
            <input id="phonenumber" className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"  type="text" defaultValue={props.user.phonenumber} placeholder="Phone Number" onChange={() => {
                document.getElementById("updateButton").innerText = "Update"
                document.getElementById("updateButton").classList.remove("bg-green-500")
                document.getElementById("updateButton").classList.add("bg-blue-500")
            }}/>
        </div>
        <div className="flex justify-center py-2">
            <button id="updateButton" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => {
                props.updateUser(document.getElementById('name').value, document.getElementById('phonenumber').value);
                e.target.innerText = "Updated"
                e.target.classList.remove("bg-blue-500")
                e.target.classList.add("bg-green-500");
            }}>
            Update
            </button>
        </div>
    </form>    
</>
)
}

export default AccountForm;