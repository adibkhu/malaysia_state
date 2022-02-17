import React from "react";
import NegeriM from "../NegeriM";

const HeroFunc = () => {
  return (
    <div>
      <div className="pl-2 mt-20 ">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mx-auto px-8 text-center">
            States in <span className="text-purple2">MALAYA</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto sm:mx-auto px-8">
            The states and federal territories of Malaysia are the principal
            administrative divisions of Malaysia.
          </p>
        </div>
      </div>

      <main>
        <div className="max-w-10xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="p-5">
            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9">
              <NegeriM />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroFunc;
