import React from "react";

const MissionVision = () => {
  const MissionCard = ({ lead, text, text2, bgColor }) => (
    <div className={`${bgColor} rounded-lg relative text-white`}>
      <div className={` w-5/6 flex flex-col mx-auto gap-6  px-5 py-12`}>
        <h2 className="text-secondary text-3xl  font-pt font-bold ">{lead}</h2>

        <p className="text-gray-400">{text}</p>

        {/* <p className={``}>
          Lorem Ipsum is simply dummy text of the printing has been the industry
          standard dummy text ever since unknown printer took galley.
        </p> */}
      </div>

      <img src="./images/a3.png" className={`absolute top-0 right-0`} alt="" />
    </div>
  );

  return (
    <div className="container flex flex-col justify-center md:flex-row gap-8 py-24">
      <MissionCard
        bgColor="bg-primary"
        lead="OUR MISSION"
        text="Our mission at Alpha Scores Training Ltd is to provide comprehensive and tailored educational programs and workshops that equip our clients with the tools and expertise necessary to excel in their respective fields. We strive to deliver top-tier training, leverage cutting-edge methodologies, industry insights, and a commitment to fostering a dynamic learning environment, thus enabling individuals and businesses to realize their full potential and achieve sustainable success."
        text2=""
      />
      <MissionCard
        bgColor="bg-gray-200"
        lead="OUR VISION"
        text="To empower individuals and organizations with the knowledge and skills essential for achieving exceptional performance and success in essential spheres of life. Through innovative and personalized training solutions, we aim to cultivate a culture of continuous learning, foster a community of leaders, and drive transformative growth in every sphere of life and business."
        text2=""
      />
    </div>
  );
};

export default MissionVision;
