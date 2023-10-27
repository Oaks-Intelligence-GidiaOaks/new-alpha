import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";

const ContactCard = ({ Icon, lead1, lead2, baseText }) => {
  return (
    <div className="flex flex-col w-80 h-72 rounded-md gap-8 p-5 items-center justify-center border border-secondary text-white">
      <CiLocationOn className="text-5xl text-secondary" />

      <div className="font-pt text-center">
        <p>1489 Langley Ave Grand Forks Afb, North.</p>

        <p>{lead2}</p>
      </div>

      <p className={`text-center text-secondary text-sm uppercase font-roboto`}>
        USA, OFFICE ADDRESS
      </p>
    </div>
  );
};

export default ContactCard;
