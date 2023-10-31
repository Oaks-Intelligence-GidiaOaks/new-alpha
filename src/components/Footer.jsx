import { BiLogoFacebook } from "react-icons/bi";
import { GrMail, GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/alpha-white-2.svg";

const Footer = () => {
  const IconItem = ({ Icon }) => (
    <div className="grid place-items-center p-1 rounded-full w-10 h-10 bg-color1 text-white">
      <Icon />
    </div>
  );

  return (
    <div className="bg-dark py-24 text-sm font-roboto ">
      <div className="container  flex flex-col md:flex-row items-start gap-8 text-white">
        {/* first */}
        <div className="flex flex-col gap-5 font-roboto flex-1">
          <img
            // src="./images/alpha-logoo.png"
            src={logo}
            alt=""
            className="w-52"
          />

          <span className="text-xs text-gray-300">
            Alpha Scores Training Ltd is a foremost training company with
            remarkable expertise in training extraordinary and top-notch
            individuals to become experts in various career and business options
            captured within the scope of the Alpha Scores Training Manual.
          </span>

          <div className="flex gap-5 ">
            <IconItem Icon={BiLogoFacebook} />
            <IconItem Icon={AiFillInstagram} />
            <IconItem Icon={GrMail} />
            <IconItem Icon={GrTwitter} />
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg font-pt">Company</h4>

          <ul className="flex flex-col gap-2 text-gray-300">
            <Link to={"/about"}>
              <li className="hover:text-secondary cursor-pointer">
                About company
              </li>
            </Link>

            <Link to={"/services"}>
              <li className="hover:text-secondary cursor-pointer">
                Our services
              </li>
            </Link>

            <Link to={"/contact"}>
              <li className="hover:text-secondary cursor-pointer">
                Contact us
              </li>
            </Link>

            <Link to={"/events"}>
              <li className="hover:text-secondary cursor-pointer">Events </li>
            </Link>
          </ul>
        </div>

        {/* third */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg font-pt">Recent Event</h4>

          <p className="text-gray-300">
            Pre-COP28 Training for Nigerian Parliamentarians and Executives on
            Regulatory Policies for Addressing Cliimate and Environmental Risks.
          </p>

          <div className="flex items-center gap-2 text-gray-300">
            <MdDateRange className="text-secondary" /> Nov, 2023
          </div>
        </div>

        {/* fourth */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg font-pt">Newsletter</h4>

          <p>Subscribe to our Newsletter</p>

          <div className="flex gap-3 p-1 items-center rounded px-3 bg-[#28343e]">
            <input
              type="text"
              className="outline-none  py-2 bg-transparent flex-1"
            />

            <div className="p-1 grid place-items-center bg-secondary rounded">
              <BsSendFill />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row space-between text-white text-center justify-center pt-6 mt-6 border-t border-gray-700 gap-2">
        <span>Copyright © 2023 - All Right Reserved by</span>
        <span className="text-secondary">Alpha Scores Training Ltd.</span>
      </div>
    </div>
  );
};

export default Footer;
