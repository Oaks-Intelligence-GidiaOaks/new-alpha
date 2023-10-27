import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

const FormCountrySelect = ({ label, handleChange, lb, reff, isSubmitted }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (val) => {
    if (val.length < 1) {
      setError("Country is required");
    } else {
      setError(null);
    }
    console.log(val);

    setValue(val);
    handleChange(val, lb);
  };

  if (isSubmitted) {
    setValue("");
  }

  return (
    <div className="">
      <label
        id="input-label"
        className="text-grey capitalize relative"
        htmlFor=""
      >
        {label}
      </label>
      <CountryDropdown
        ref={reff}
        // countryValueType="short"
        valueType="short"
        value={value}
        className="border border-grey mt-2 w-full rounded-md p-3 px-4   text-grey font-pt outline-none"
        onChange={handleInputChange}
      />
      <p className="text-red-400  p-2 text-sm italic font-pt">{error}</p>
    </div>
  );
};
export default FormCountrySelect;
