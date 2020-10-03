import React from "react";

export default function DealModal(props){
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded hover:bg-gray-700" style={{ transition: "all .15s ease" }} onClick={() => setShowModal(true)}>Join!</button>

      {showModal ? (
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
                    {props.deal.title}
                </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                {/*body*/}
                <div className="relative p-6 pb-2 flex-auto">

                
                <div className="mt-2 mb-2 bg-gray-600 rounded-full">
                    <div class="mt-2 bg-blue-400 py-1 text-center rounded-full" style={{width: Math.round((props.deal.orders.length)/props.deal.final_votes *100) + "%"}}>
                        <div class="text-white text-sm inline-block bg-blue-800 px-2 rounded-full">{Math.round((props.deal.orders.length)/props.deal.final_votes *100)}%</div>
                    </div>
                </div>

                  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    <b>{props.deal.final_votes - props.deal.orders.length} more to go!</b>
                  </p>
                  <p className="mt-0 text-gray-600 text-lg leading-relaxed">
                    Price: <b>${props.deal.new_price}</b>
                  </p>
                  <p className="mt-0 text-gray-600 text-base leading-relaxed">
                    {props.deal.description}
                  </p>

                </div>
                

                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </button>
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