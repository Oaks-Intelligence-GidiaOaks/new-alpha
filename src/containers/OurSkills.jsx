import star from "../assets/star-filled.svg";
const OurSkills = () => {
  // const Skill = ({ lead, progress, flex }) => (
  //   <div className="space-y-2 text-white font-pt">
  //     <div className="flex justify-between text-[22px] font-semibold">
  //       <h5>{lead}</h5>
  //       <h5>{progress}%</h5>
  //     </div>

  //     <div className="rounded-full flex h-2 bg-white">
  //       <div className={`${flex} rounded-l-full bg-secondary h-full`} />
  //     </div>
  //   </div>
  // );
  const Skill = ({ lead, progress, flex }) => (
    <div className="space-y-2 text-white font-pt">
      <div className="flex justify-between text-[22px] font-semibold">
        <h5>{lead}</h5>
        <h5>{progress}</h5>
      </div>

      <div className="gap-3 rounded-full flex mb-4">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <img className="w-8 h-8" key={index} src={star} alt="star" />
          ))}
      </div>
    </div>
  );

  return (
    <div className=" bg-[#14212b]  ">
      <div className="container py-24 relative flex flex-col items-center md:flex-row gap-10">
        {/* first */}
        <div className="space-y-6 flex-1 z-20 font-pt">
          <h5 className="text-secondary">Our Professional Skill’s</h5>
          <h2 className="text-3xl md:text-5xl font-bold font-pt text-white">
            Professional Skill <br /> of{" "}
            <span className="text-secondary"> Alpha Scores</span>
          </h2>
        </div>
        {/* second */}
        <div className="space-y-4 z-20 flex-1">
          <Skill lead="Research and Analysis" progress="" flex="flex-[0.95]" />
          <Skill lead="Co-Production" progress="" flex="flex-[0.9]" />
          <Skill lead="Advisory" progress="" flex="flex-[0.95]" />
          <Skill lead="Consulting" progress="" flex="flex-[0.9]" />
        </div>

        <img
          src="./images/a4.png"
          className="absolute bottom-0 left-0 opacity-30 z-10"
          alt=""
        />
        <img
          src="./images/a5.png"
          className="absolute top-0 right-0 opacity-30 z-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurSkills;
