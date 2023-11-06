import React from "react";
import { GrCloudSoftware } from "react-icons/gr";
import { SiJirasoftware } from "react-icons/si";
import {
  GiArchiveResearch,
  GiEnergyArrow,
  GiRollingEnergy,
} from "react-icons/gi";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { AiOutlineSafetyCertificate, AiOutlineSolution } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { BiSolidLeaf } from "react-icons/bi";

const WhatWeDo = () => {
  const ServiceCard = ({ lead, text, Icon }) => (
    <div className="rounded-md relative drop-shadow-lg group flex items-center gap-6 p-8 bg-white">
      <div className=" z-20 hidden md:grid h-[120px] rounded-full shrink-0 w-[120px] bg-gray-300  place-items-center">
        {Icon}
      </div>

      <div className="space-y-8  z-20">
        <h3 className="text-2xl font-pt font-bold">{lead}</h3>

        <p className="text-sm">{text}</p>

        {/* <button className="border  border-secondary flex w-fit px-6 py-3 group-hover:text-white rounded items-center gap-2 text-sm group-hover:bg-secondary">
          <span>DETAILS</span>
        </button> */}
      </div>

      <img
        src="./images/s1.png"
        className="absolute z-10 top-0 left-0"
        alt=""
      />
      <img src="./images/s1.png" className="absolute bottom-0 right-0" alt="" />
    </div>
  );

  return (
    <div className="py-24">
      <div className="text-center space-y-4">
        <h5 className="text-secondary">OUR SERVICES</h5>

        <h2 className="font-pt font-bold text-3xl md:text-5xl">What We Do?</h2>
      </div>

      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-x-6 gap-y-8">
        <ServiceCard
          Icon={<SiJirasoftware className="text-secondary text-4xl" />}
          lead="Software Development"
          text=" We offer trainings through our team of experienced software developers
          on how to develop a website, a mobile application, intricate software
          systems, and leverage artificial intelligence (AI) to develop software
          tailored according to the needs of our clients to achieve their
          business objectives."
        />
        <ServiceCard
          Icon={<PiAirplaneTakeoffBold className="text-secondary text-4xl" />}
          lead="Advisory"
          text={`We offer trainings and organize workshops that provide advisory services to our clients and potential clients, equipping their businesses with actionable insights and recommendations that will help them achieve sustainable objectives in their businesses. We achieve this through a careful understanding of the specific needs, challenges, and goals of our clients, providing tailored guidance to achieve maximum output.
`}
        />
        <ServiceCard
          Icon={<GiArchiveResearch className="text-secondary text-4xl" />}
          lead="Research"
          text={`We leverage our knowledge and experience with digital tools to train and equip our clients in courses such as artificial intelligence, deep learning, natural language processing, and image recognition.
We also train and organize comprehensive seminars for our clients to equip them to provide the following services
`}
        />
        <ServiceCard
          Icon={<AiOutlineSolution className="text-secondary text-4xl" />}
          lead="Infrastructural Solutions"
          text="We train individuals on practical ways to measure, report, and reduce carbon footprints across all emission scopes."
        />
        <ServiceCard
          Icon={<GiEnergyArrow className="text-secondary text-4xl" />}
          lead="Supply Chain Solutions"
          text="We offer trainings on supply chain optimization and real-time supply chain strategies that drive your enterprise to success."
        />
        <ServiceCard
          Icon={<GiRollingEnergy className="text-secondary text-4xl" />}
          lead="Energy Solutions"
          text="We train our clients on how and where to invest in renewable energy sources."
        />
        <ServiceCard
          Icon={<BiSolidLeaf className="text-secondary text-4xl" />}
          text="We teach strategies for effective environmental regulation that meet the needs of all stakeholders. "
          lead="Environmental consultancy"
          img="./images/03.jpg"
        />
        <ServiceCard
          Icon={
            <AiOutlineSafetyCertificate className="text-secondary text-4xl" />
          }
          text="Where we teach effective sector-specific regulatory strategies that meet the needs of diverse industries and stakeholders"
          lead="Regulatory Consultancies /Training"
          img="./images/03.jpg"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
