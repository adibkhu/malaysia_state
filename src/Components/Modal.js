import React from "react";
import ContentModal from "./ContentModal";

const Modal = ({ data, show, unshow }) => {
  return (
    <>
      {show ? (
    <>
      <div
        className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full sm:p-10 "
        id="exampleModalXl"
        tabIndex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className=" drop-shadow-xl relative px-8 w-full max-w-9xl h-full md:h-auto">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 bg-purple3 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-white"
                id="exampleModalXlLabel"
              >
                {data.state}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                aria-label="Close"
                onClick={() => {
                  unshow(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-body relative p-4">
              <ContentModal data={data.state}/>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null}

    </>
  );
};

export default Modal;
