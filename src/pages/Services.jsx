import React from "react";
import { CustomBanner, Footer, Header } from "../components";
import { Subscribe, WhatWeDo } from "../containers";

const Services = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* banner */}
      <CustomBanner image="" lead="Services" nav1="Home" nav2="Services" />

      {/* what we do */}
      <WhatWeDo />

      {/* Subscribe for newsltter */}
      <Subscribe />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Services;
