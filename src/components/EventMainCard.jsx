import React from "react";
import { Link } from "react-router-dom";

const EventMainCard = ({ image, date, lead, text, partners, venue }) => {
  return (
    <div className="space-y-4">
      <div className="">
        <img src={image} className="w-full rounded-md" alt="" />
      </div>

      <div className="flex flex-wrap items-center  text-grey gap-4 text-sm">
        <span> ATTENDEES - 80 </span>
        <span> DATE: {date} </span>
        <span> VENUE: {venue} </span>
        <span>{partners}</span>
      </div>

      <h3 className=" text-2xl md:text-3xl  font-pt font-bold">{lead}</h3>

      <p className="text-grey">{text}</p>

      <Link to={"/register"}>
        <button className="hover:text-secondary py-4 font-[500]  rounded  border-secondary">
          REGISTER...
        </button>
      </Link>
    </div>
  );
};

export default EventMainCard;
