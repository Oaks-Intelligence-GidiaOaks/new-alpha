import React from "react";

const FormCheckbox = ({ label, isChecked, formProps }) => {
  return (
    <div className="p-1 space-x-3 flex font-pt items-center">
      <input {...formProps} type="checkbox" className="h-4 w-4" />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default FormCheckbox;
