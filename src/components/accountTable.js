import React, {Component} from "react";
class AccountTable extends Component{

    constructor(props){
        super(props);
        this.state = {
          orders: [],
          isLoaded: false,
        }
      }

      componentDidMount(){
        this.props.user.orders.map(order => {
            fetch('http://chenyoung01.pythonanywhere.com/users/')
            .then(res => res.json)
            .then(json => {
                this.setState({
                    isLoaded: true,
                    orders: [...this.state.orders, json],
                })
            })
        })
      }


    render(){
        var {isLoaded, orders} = this.state;
        if (!isLoaded){
            return <div>
                Loading...
            </div>
        }
else {
return (
    <>
    <div className="md:px-32 py-3 px-3 w-full">
    <div className="shadow overflow-hidden rounded border-b border-gray-200">
    <table className="min-w-full bg-white">
    <thead className="bg-gray-800 text-white">
        <tr>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Deal</th>
        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Restaurant</th>
        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
        </tr>
    </thead>
    <tbody className="text-gray-700">
        {/* {
            orders.map(order => {
                <tr>
                    <td class="w-1/3 text-left py-3 px-4">Crazy Sushi</td>
                    <td class="w-1/3 text-left py-3 px-4">Sushi Place</td>
                    <td class="text-left py-3 px-4">4.00</td>
                </tr>
            })
        } */}
    <tr>
        <td className="w-1/3 text-left py-3 px-4">Crazy Sushi</td>
        <td className="w-1/3 text-left py-3 px-4">Sushi Place</td>
        <td className="text-left py-3 px-4">4.00</td>
    </tr>
    <tr className="bg-gray-200">
        <td className="w-1/3 text-left py-3 px-4">Sick Deal</td>
        <td className="w-1/3 text-left py-3 px-4">Noodle Shack</td>
        <td className="text-left py-3 px-4">8.00</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
</>
)
}
    }
}

export default AccountTable;