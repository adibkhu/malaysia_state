import axios from "axios";
import React, { useState, useEffect } from "react";


const baseURL = 'https://jianliew.me/malaysia-api/state/v1/';

const ContentModal = ({ data }) => {
  const x = data.toString().toLowerCase().replace(/\s/g, "_");

  

  const [negeriDetails, setNegeriDetail] = useState([])

//   const baseURL = `https://jianliew.me/malaysia-api/state/v1/${x}.json`;
  useEffect(() => {
    axios.get(baseURL + x + '.json').then((response) => {
      setNegeriDetail(response.data);
    });
  }, [x]);
// eslint-disable-next-line
//   console.log(negeriDetails.website);

  return (
    <>
      <div className="p-6 space-y-6">
        <p className="pt-4 text-black font-bold text-3xl">
          {negeriDetails.name}
        </p>

        {negeriDetails.jawi_name ? (
        <p className="text-black font-semibold text-xl">
          {negeriDetails.jawi_name }
          
        </p>
         ): null}
        {/* <p className="text-black font-semibold text-sm">
          No jawi writing
          
        </p> */}

        <p className="pt-2 text-black font-semibold text-2xl">
          {!negeriDetails.full_name ? '' : negeriDetails.full_name}
        </p>
        <p className="text-base leading-relaxed text-purple ">
          {negeriDetails.description}
        </p>
        <div className="py-4">
          <p className="pt-4 text-black font-bold text-2xl">
            Motto
          </p>
          <p className="text-base leading-relaxed text-purple ">
          {!negeriDetails.motto ? 'No Motto' : negeriDetails.motto}
        </p>
        </div>
        <div className="py-1">
          <p className=" text-black font-bold text-2xl">
            Website
          </p>
          <p className="text-base leading-relaxed text-purple ">
          <a href={!negeriDetails.website ? '/' : negeriDetails.website} target='_blank' rel="noreferrer" className='text-purple4 no-underline hover:underline'>Click Me</a>
        </p>
        </div>
      </div>
    </>
  );
};

export default ContentModal;
