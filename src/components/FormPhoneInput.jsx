import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const FormPhoneInput = ({ label, handleChange, reff }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (val) => {
    if (val.length < 6) {
      setError("Phone number required");
    } else {
      setError(null);
    }
    setValue(val);
    handleChange(val, "phone");
  };

  const phoneInputStyle = {
    padding: `0.75rem 3rem`,
    width: "100%",
    height: "auto",
    border: `1px solid rgb(104 118 147)`,
  };

  return (
    <div id="phone-input">
      <label
        id="input-label"
        className="text-grey capitalize relative"
        htmlFor=""
      >
        {label}
      </label>
      <PhoneInput
        ref={reff}
        className="mt-2"
        country={"ng"}
        inputStyle={phoneInputStyle}
        value={value}
        onChange={handleInputChange}
      />
      <p className="text-red-400  p-2 text-sm italic font-pt">{error}</p>
    </div>
  );
};

export default FormPhoneInput;
