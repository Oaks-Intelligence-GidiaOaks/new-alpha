import React from "react";

import { GiTeacher } from "react-icons/gi";
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const TrustedCompany = () => {
  return (
    <div className="py-16">
      <div className="container flex flex-col md:flex-row gap-10">
        {/* first */}
        <div className="flex-1 flex flex-col gap-y-8">
          <h5 className="text-secondary">Welcome To Alpha Scores</h5>

          <h2
            className={` text-[#0a272c] text-3xl md:text-5xl font-bold font-pt`}
          >
            We are a trusted consulting company.
          </h2>

          <p className="text-grey">
            Alpha Scores Training Ltd is a foremost training company with
            remarkable expertise in training extraordinary and top-notch
            individuals to become experts in various career and business options
            captured within the scope of the Alpha Scores Training Manual.
          </p>

          <div className="flex gap-2 items-center font-pt">
            {/* <GiTeacher /> */}
            <span className="text-2xl font-bold">
              Perfect solution of training and consultancy.
            </span>
          </div>

          <Link to={`/services`}>
            <button className="flex w-fit px-6 py-3 text-white rounded items-center gap-2 text-sm bg-secondary">
              <span>Our Services</span>
              <MdOutlineReadMore />
            </button>
          </Link>
        </div>

        {/* second */}
        <div className="flex-1">
          <img src="images/a2.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
