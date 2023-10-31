import React from "react";
import { CustomBanner, Footer, Header } from "../components";
import {
  MissionVision,
  OurSkills,
  Testimnoials,
  TrustedCompany,
} from "../containers";

const About = () => {
  return (
    <div>
      <Header />
      {/* banner */}
      <CustomBanner image="" lead="About us" nav2="About" />

      {/* misson and vision */}
      <MissionVision />

      {/* trusted company */}
      <TrustedCompany />

      {/* our skills */}
      <OurSkills />

      {/* testimnial */}
      {/* <Testimnoials /> */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
