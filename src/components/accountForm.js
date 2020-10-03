import React from "react";
const AccountForm = (props) => {
return (
    <>
    
      <form className="max-w-sm mb-2 mt-2 w-full px-3">
        <div className="flex items-center py-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                User Name
            </label>
            <input id="name" className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 ml-5" type="text"  defaultValue={props.user.name}  placeholder="Your Name"/>
        </div>
        <div className="flex items-center py-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="phonenumber">
                Phone Number
            </label>
            <input id="phonenumber" className="block bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"  type="text" defaultValue={props.user.phonenumber} placeholder="Phone Number"/>
        </div>
        <div className="flex justify-center py-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => props.updateUser(document.getElementById('name').value, document.getElementById('phonenumber').value)}>
            Update
            </button>
        </div>
    </form>    
</>
)
}

export default AccountForm;