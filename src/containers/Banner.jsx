import { MdOutlineReadMore } from "react-icons/md";

const Banner = () => {
  return (
    <div className="h-[90vh] text-white grid place-items-center bg-primary ">
      <div className="container font-roboto  flex items-center gap-8">
        <div className="flex-1 px-4 flex flex-col gap-8">
          <h4 className="uppercase text-base">Your Foremost Training Hub</h4>

          <h2 className="font-bold text-5xl lg:text-6xl font-pt ">
            Alpha Scores Training Ltd
          </h2>

          <p>
            We help you take the first steps towards building your envisioned
            career, skills, and businesses. With Alpha Scores Ltd, you are
            assured of being equipped with the right kind of knowledge that will
            enable you to take giant strides
          </p>

          <a href="#about-summary">
            <button className=" flex w-fit px-6 py-3 text-white rounded items-center gap-2 text-sm bg-secondary">
              <span>Explore more</span>
              <MdOutlineReadMore />
            </button>
          </a>
        </div>

        {/* banner image */}
        <div className="flex-1  hidden md:block p-5">
          <img src="./images/01.png" className="w-full" alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
