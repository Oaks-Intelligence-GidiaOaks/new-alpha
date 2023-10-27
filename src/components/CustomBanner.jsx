import React from "react";
import { Link } from "react-router-dom";

const CustomBanner = ({ image, lead, nav1, nav2 }) => {
  const customeStyle = {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/a1.jpg')`,
    // backgroundImage: `url('./images/a1.jpg')`,
    backgroundSize: "cover",
    backroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={customeStyle}
      className={`grid place-items-center text-white h-[60vh]`}
    >
      <div className="container flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-bold font-pt">{lead}</h2>

        <p className="space-x-5 text-base font-bold">
          <Link to={`/`}>
            <span className="hover:text-secondary">Home </span>
          </Link>
          <span>- </span>
          <span className="text-secondary">{nav2} </span>
        </p>
      </div>
    </div>
  );
};

export default CustomBanner;
