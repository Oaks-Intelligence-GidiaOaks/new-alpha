const FormInput = ({ placeholder, type, formProps, errorMessage, label }) => {
  const ShowError = ({ message }) => (
    <p className="text-red-400  p-2 text-sm italic font-pt">{message}</p>
  );

  const labelStyle = {};

  return (
    <div>
      <label
        id="input-label"
        className="text-grey capitalize relative"
        htmlFor=""
      >
        {label}
      </label>
      <input
        {...formProps}
        type={type}
        placeholder={placeholder}
        className="p-3 mt-1 px-4 border rounded-md w-full border-grey text-grey font-pt outline-none"
      />
      <ShowError message={errorMessage} />
    </div>
  );
};

export default FormInput;
