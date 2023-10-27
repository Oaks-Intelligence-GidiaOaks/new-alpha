import React from "react";
import { ContactCard } from "../components";

const CallUs = () => {
  return (
    <div className="py-24 bg-[#18252f]">
      <div className=" conatiner flex flex-col md:flex-row gap-5 items-center justify-center flex-wrap">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default CallUs;
