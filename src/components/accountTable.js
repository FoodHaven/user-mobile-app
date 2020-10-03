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
    <tbody class="text-gray-700">
    <tr>
        <td class="w-1/3 text-left py-3 px-4">Crazy Sushi</td>
        <td class="w-1/3 text-left py-3 px-4">Sushi Place</td>
        <td class="text-left py-3 px-4">4.00</td>
    </tr>
    <tr class="bg-gray-200">
        <td class="w-1/3 text-left py-3 px-4">Sick Deal</td>
        <td class="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td class="text-left py-3 px-4">8.00</td>
    </tr>
    <tr>
        <td class="w-1/3 text-left py-3 px-4">Crazy Sushi</td>
        <td class="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td class="text-left py-3 px-4">1.00</td>
    </tr>
    <tr class="bg-gray-200">
        <td class="w-1/3 text-left py-3 px-4">Sick Deal</td>
        <td class="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td class="text-left py-3 px-4">8.00</td>
    </tr>
    <tr>
        <td class="w-1/3 text-left py-3 px-4">Crazy Sushi</td>
        <td class="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td class="text-left py-3 px-4">1.00</td>
    </tr>
    <tr class="bg-gray-200">
        <td class="w-1/3 text-left py-3 px-4">Sick Deal</td>
        <td class="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td class="text-left py-3 px-4">8.00</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
</>
)
}

export default AccountTable;