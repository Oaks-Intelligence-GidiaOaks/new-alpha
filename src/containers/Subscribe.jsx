import React from "react";
import { GrMoreVertical } from "react-icons/gr";

const Subscribe = () => {
  const style = {
    backgroundImage: "url(./images/s2.png)",
  };

  return (
    <div className="py-24">
      <div
        style={style}
        className="container px-8 py-16 rounded-md bg-secondary flex flex-col md:flex-row items-start gap-8 justify-center"
      >
        {/* first */}
        <div className="space-y-2 text-white md:flex-[0.3]">
          <h2>Subscribe here</h2>
          <h2 className="text-3xl font-pt font-bold">
            Subscribe For Newsletter
          </h2>
        </div>

        {/* second */}
        <div className="bg-white md:flex-[0.5] p-2 rounded flex items-center px-5 ">
          <input
            type="text"
            className="outline-none border-0 flex-1 bg-transparent "
            placeholder="Enter your email"
          />

          <button className=" p-2 md:p-5 flex rounded bg-[#14212b] items-center text-white gap-3">
            <span>Subscribe</span>
            <GrMoreVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
