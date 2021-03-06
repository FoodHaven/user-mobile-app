import React, {Component} from "react";

export default class DealModal extends Component{
  // const [showModal, setShowModal] = React.useState(false);

  constructor(props){
    super(props)
    this.state ={
      showModal: false
    }
  }

  handleShowModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render(){
    // console.log(this.props.orders[this.props.order])
    // console.log(this.props.deal)
  return (
    <>
    { this.props.order == -1 ? (this.props.deal.final_votes - this.props.deal.orders.length > 0 ?
    (<button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded hover:bg-gray-700" style={{ transition: "all .15s ease" }} onClick={this.handleShowModal}>Join!</button>) : (<button className="bg-red-800 text-xs text-white px-2 py-1 font-semibold rounded " style={{ transition: "all .15s ease" }}>Full</button>))
    : (<button className="bg-green-800 text-xs text-white px-2 py-1 font-semibold rounded cursor-not-allowed" style={{ transition: "all .15s ease" }} onClick={this.handleShowModal} >Joined</button>)
  }

      {this.state.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 max-w-3xl" style={{width: "80vw"}}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b p-3 border-solid border-gray-300 rounded-t">
                <h3 className="text-xl font-semibold">
                    {this.props.deal.title}
                </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={this.handleShowModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                {/*body*/}
                <div className="relative p-6 pb-2 flex-auto">

                
                <div className="mt-2 mb-2 bg-gray-600 rounded-full">
                    <div className="mt-2 bg-blue-400 py-1 text-center rounded-full" style={{width: Math.round((this.props.deal.orders.length)/this.props.deal.final_votes *100) + "%"}}>
                      {
                        Math.round((this.props.deal.orders.length)/this.props.deal.final_votes *100) > 10 ?
                        (<div className="text-white text-sm inline-block bg-blue-800 px-2 rounded-full">{Math.round((this.props.deal.orders.length)/this.props.deal.final_votes *100)}%</div>) : (<div className="text-white text-sm inline-block bg-blue-800 px-2 rounded-full"></div>)
                      }
                    </div>
                </div>

                  <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    <b>{this.props.deal.final_votes - this.props.deal.orders.length} more to go!</b>
                  </p>
                  {/* <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    <b>{Date.parse(this.props.deal.deadline) - Date} more to go!</b>
                  </p> */}
                  <p className="mt-0 text-gray-600 text-base leading-relaxed">
                  <b>Price: </b>${this.props.deal.new_price}
                  </p>
                  <ul >
                  <li className="mt-0 text-gray-600 text-base leading-relaxed mr-1" style={{display: "inline"}}><b>Items:</b></li>
                    {
                      this.props.deal.items.map(item => (
                      <li className="mt-0 text-gray-600 text-base leading-relaxed mx-1" style={{display: "inline"}}>{item.name}</li>
                      ))
                    }
                  </ul>
                  <p className="mt-0 text-gray-600 text-base leading-relaxed">
                    <b>Description:</b> {this.props.deal.description}
                  </p>
                  
                  
                  
                </div>
                

                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-gray-300 rounded-b">

                  {this.props.order == -1 ?  
                  (<button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => {
                      this.handleShowModal();
                      this.props.handleConfirm(this.props.deal.id);
                    }}
                  >
                    Confirm  </button>) :
                    (<button
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                      onClick={() => {
                        this.handleShowModal();
                        this.props.handleUnconfirm(this.props.orders[this.props.order].id);
                      }}
                    >
                      Unconfirm  </button>)
                 
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
      }
}