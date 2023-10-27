import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ header, text, img }) => {
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${img})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <div
      style={style}
      className="text-white card shrink-0 text-sm font-roboto h-[400px] w-80 py-4 px-4 flex flex-col gap-4"
    >
      <h3 className="mt-auto text-2xl font-semibold font-pt">{header}</h3>

      <p>{text}</p>

      <Link to={`/services`}>
        <button className="flex items-center gap-3 border-secondary border w-fit p-3 px-5 rounded ">
          <span>Learn more</span>
          <AiOutlineArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
