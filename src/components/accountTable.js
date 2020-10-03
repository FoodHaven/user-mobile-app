import React from "react";
const AccountTable = (props) => {

return (
    <>
    <div className="md:px-32 py-3 px-3 w-full mb-3">
    <div className="shadow overflow-hidden rounded border-gray-200">
    <table className="min-w-full bg-white">
    <thead className="bg-gray-800 text-white">
        <tr>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Deal</th>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Restaurant</th>
        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
        </tr>
    </thead>
    <tbody className="text-gray-700 text-sm">
        {
            props.orders.map(order => (
                <tr key={order.id}>
                    <td className="w-1/3 text-left py-3 px-2 text-center">{order.deal_name}</td>
                    <td className="w-1/3 text-left py-3 px-1 text-center">{order.restaurant_name}</td>
                    <td className="text-left py-3 px-2 text-center">$ {order.discount_price}</td>
                </tr>
            ))
        }
    </tbody>
    </table>
    </div>
    </div>
</>
)
}

export default AccountTable;