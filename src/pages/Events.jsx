import React from "react";
import {
  CustomBanner,
  EventCard,
  EventMainCard,
  Footer,
  Header,
} from "../components";

const Events = () => {
  return (
    <div className="">
      <Header />

      {/* banner */}
      <CustomBanner image="" lead="Events & Training" nav2="Events" />

      {/*Event cards  */}
      <div className="container px-6 py-24 space-y-6">
        <div className=" md:w-4/6 mx-auto space-y-8">
          <EventMainCard
            date="Nov, 2023"
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
            lead="3-days Pre-COP28 Training for Nigerian Parliamentarians and  Executives on Regulatory policies for Addressing Climate and Environmental Risks"
            partners="PARTNERS: Escrow-Tech Limited, Oaks Intelligence Limited, NICCRA"
            text=""
            venue="Dubai, UAE"
          />
          <EventMainCard
            date="Dec, 2023"
            image="https://plus.unsplash.com/premium_photo-1676651178953-4e4400aafa2b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYWluaW5nfGVufDB8fDB8fHww"
            lead="National Delegate, COP28"
            text=""
            venue="Expo City, Dubai, UAE"
          />
          <EventMainCard
            date="Dec, 2023"
            image="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWluaW5nfGVufDB8fDB8fHww"
            lead="3-days Pre-COP28 Training for Nigerian Parliamentarians and  Executives on Regulatory policies for Addressing Climate and Environmental Risks"
            text=""
            venue="Blue Zone, Expo City, Dubai, "
          />
          <EventMainCard
            date="April, 2024"
            image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWluaW5nfGVufDB8fDB8fHww"
            lead="International Conference on Energy Transitions"
            text=""
            venue="Nigeria."
          />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Events;
