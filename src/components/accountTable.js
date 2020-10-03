import React from "react";
const AccountTable = (props) => {

return (
    <>
    <div class="md:px-32 py-3 px-3 w-full">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
    <thead class="bg-gray-800 text-white">
        <tr>
        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Deal</th>
        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Restaurant</th>
        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
        </tr>
    </thead>
    <tbody class="text-gray-700 text-sm">
        {
            props.orders.map(order => (
                <tr>
                    <td class="w-1/3 text-left py-3 px-2">{order.deal_name}</td>
                    <td class="w-1/3 text-left py-3 px-1">{order.restaurant_name}</td>
                    <td class="text-left py-3 px-2">$ {order.discount_price}</td>
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