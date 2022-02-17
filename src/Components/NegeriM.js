import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const baseURL = "https://jianliew.me/malaysia-api/state/v1/all.json";

const NegeriM = () => {
  const [negeri, setNegeri] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNegeri(response.data);
    //   console.log(response.data);
    });
  }, []);

  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {negeri?.map((neg, index) => (
        <div key={index}>
          <div className=" static max-w-2/4 overflow-hidden shadow-lg shadow-black rounded-lg hover:shadow-purple hover:text-white hover:bg-purple4 hover:scale-105 duration-500">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 hover:underline-offset-4">
                {neg.state}
              </div>
              <p className="pt-4 text-black-900 text-base ">
                Number Plate : {neg.licence_plate_prefix}
              </p>
              <p className="pt-4 text-black-900 text-base">
                Population : {neg.population}
              </p>
              <p className="pt-4 text-black-900 text-base">
                Royal Capital : {neg.royal_capital}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{neg.abbreviation}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{neg.state}
              </span>
              
            </div>
            <div className="mt-5 pl-5 px-3 pt-4 pb-9">
              <button
                className="bg-purple2 text-white font-semibold py-2 px-4 rounded shadow hover:bg-purple hover:text-white duration-500"
                type="button"
                id={neg.abbreviation}
                onClick={() => {
                  setModalData(neg);
                  setModalIsOpen(true);
                }}
              >
                See More
              </button>
            </div>
          </div>
        </div>
      ))}
      <>
        <Modal unshow={setModalIsOpen} show={modalIsOpen} data={modalData} />
      </>
    </>
  );
};

export default NegeriM;
