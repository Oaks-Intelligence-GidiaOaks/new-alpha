import { useEffect, useRef, useState } from "react";
import {
  Footer,
  FormCheckbox,
  FormCountrySelect,
  FormInput,
  FormPhoneInput,
  Header,
} from "../components";

import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { airport_api_url, apiUrl } from "../helpers/helpers";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const Register = () => {
  const [tel, setTel] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [countryOfDeparture, setCountryOfDeparture] = useState(null);
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [airports, setAirports] = useState([]);
  const [airportOfDeparture, setAirportOfDeparture] = useState("");

  const sizeRef = useRef();
  const airportRef = useRef();
  const telRef = useRef();
  const coo = useRef();
  const cod = useRef();

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const headers = {
    "X-Api-Key": import.meta.env.VITE_AIRPORT_API_KEY,
  };
  const params = {
    country: `${countryOfDeparture}`,
  };

  useEffect(() => {
    if (countryOfDeparture) {
      axios
        .get(`${airport_api_url}`, { params, headers: headers })
        .then((res) => {
          setAirports(
            res.data.map((it) => ({
              label: it.name + "-" + it.city,
              value: `${it.name} - ${it.city}`,
            }))
          );
        })
        .catch((err) => {
          console.error(err.message);
          toast.error("Can't get airport list");
        });
    }

    return () => {};
  }, [countryOfDeparture]);

  // react-hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      employer: "",
      allergies: "",
      date: "",
      passportFile: "",
      isHotel: false,
      isNicra: false,
    },
  });

  const passportList = watch("passportFile");

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["submit"],
    mutationFn: (formData) => axios.post(apiUrl, formData, config),
    onSuccess: (data, context) => {
      toast.success(data.message);
      console.log("submitted", data);
      // setCountryOfOrigin("");
      // setCountryOfDeparture("");
      // setTel("");
      toast.success(data.message);
      sizeRef.current.clearValue();
      airportRef.current.clearValue();
      reset();
    },
    onError: () => {
      toast.error(err.message);
    },
  });

  const isBtnActive = Object.keys(errors).length < 1;
  const handleChange = (e, type) => {
    if (type == "phone") {
      setTel(e);
    } else if (type == "cod") {
      setCountryOfDeparture(e);
    } else {
      setCountryOfOrigin(e);
    }
  };

  const onSubmit = async (data) => {
    if (passportList.length > 0 && passportList[0].size > 100 * 1024) {
      setError("passportFile", {
        type: "filetype",
        message: "Image must be less than 2MB",
      });
      return;
    }

    if (tel.length < 4) {
      setErrorMsgs({ ...errorMsgs, tel: "Phone number required" });
      return;
    }

    if (countryOfOrigin.length < 2) {
      setErrorMsgs({ ...errorMsgs, countryOrigin: "Select a country" });
      return;
    }
    if (countryOfDeparture.length < 2) {
      setErrorMsgs({ ...errorMsgs, countryDeparture: "Select a country" });
      return;
    }

    let newData = new FormData();

    newData.append("passport", data.passportFile[0]);
    newData.append("first_name", data.firstName);
    newData.append("last_name", data.lastName);
    newData.append("email", data.email);
    newData.append("employer", data.employer);
    newData.append("allergies", data.allergies);
    newData.append("dob", data.date);
    newData.append("isHotel", data.isHotel);
    newData.append("isNicra", data.isNicra);
    newData.append("phone_number", tel);
    newData.append("country_of_origin", countryOfOrigin);
    newData.append("country_of_departure", countryOfDeparture);
    newData.append("aiport_of_departure", airportOfDeparture);
    newData.append("hotel_accomodation", data.isHotel);
    newData.append("niccra_side_event", data.isNicra);

    mutate(newData);
  };

  return (
    <div>
      {/* header */}
      <Header />

      {/* banner */}

      {/* Register Form */}
      <div className="py-24 font-pt">
        <div className="container">
          <div className="text-center space-y-4">
            <h2 className="font-bold font-pt text-4xl">Register To Attend</h2>

            <h6 className="text-grey">
              It is a long established fact that a reader will be distracted{" "}
              <br />
              content of a page when looking.
            </h6>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="md:w-5/6 mt-24 mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 gap-y-4">
              <FormInput
                label="first name"
                formProps={register("firstName", {
                  required: "Input is required",
                })}
                placeholder=""
                type="text"
                errorMessage={errors.firstName?.message}
              />

              <FormInput
                label="last name"
                formProps={register("lastName", {
                  required: "Input is required",
                })}
                type="text"
                errorMessage={errors.lastName?.message}
              />

              <FormInput
                label="email"
                formProps={register("email", {
                  required: "Input is required",
                })}
                placeholder="example@gmail.com"
                type="email"
                errorMessage={errors.email?.message}
              />

              <FormInput
                formProps={register("date", {
                  required: "Input is required",
                })}
                label="Date of birth"
                placeholder="date"
                type="date"
                errorMessage={errors.date?.message}
              />

              <FormInput
                formProps={register("employer", {
                  required: "Add Employer's name",
                })}
                label="Employer's name"
                errorMessage={errors.employer?.message}
              />

              <FormInput
                formProps={register("allergies")}
                label="Allergies "
                placeholder="if any"
              />

              <FormCountrySelect
                // isSubmitted={isSuccess}
                reff={coo}
                label="Country of origin"
                handleChange={handleChange}
              />

              <FormCountrySelect
                reff={cod}
                // isSubmitted={isSuccess}
                label="Country of departure"
                lb="cod"
                handleChange={handleChange}
              />

              {/* aiport of departure */}
              <div>
                <div className="mb-2">
                  <label
                    id="input-label"
                    className="text-grey capitalize"
                    htmlFor=""
                  >
                    Airport of Departure
                  </label>
                </div>

                <Select
                  classNamePrefix="select"
                  ref={airportRef}
                  isClearable={true}
                  onChange={(val) => setAirportOfDeparture(val?.value)}
                  isSearchable={true}
                  name="aiports"
                  options={airports}
                />
              </div>

              <FormPhoneInput
                reff={telRef}
                label="Phone number"
                handleChange={handleChange}
              />

              <div className="">
                <div>
                  <label className="text-grey capitalize" htmlFor="">
                    International Passport Data Page
                  </label>
                </div>
                <input
                  className="text-base mt-2"
                  type="file"
                  accept="image/*"
                  name=""
                  id=""
                  {...register("passportFile", {
                    required: "Upload your national passport",
                  })}
                />
                <p className="text-red-400  p-2 text-sm italic font-pt">
                  {errors.passportFile?.message}
                </p>
              </div>

              <div>
                <div className="mb-2">
                  <label
                    id="input-label"
                    className="text-grey capitalize"
                    htmlFor=""
                  >
                    Shirt Size
                  </label>
                </div>

                <Select
                  classNamePrefix="select"
                  ref={sizeRef}
                  isClearable={true}
                  // onChange={(val) => setSize(val?.value)}
                  isSearchable={true}
                  name="aiports"
                  options={[
                    { label: "Medium(M)", value: "M" },
                    { label: "Large(L)", value: "L" },
                    { label: "Extra Large(XL)", value: "XL" },
                  ]}
                />
              </div>

              <div>
                <FormCheckbox
                  formProps={register("isHotel")}
                  label="Hotel accomodation for 4 nights"
                />

                <FormCheckbox
                  formProps={register("isNicra")}
                  label="Do you want to attend nicra side event?"
                />
              </div>

              <span className=" text-sm md:col-span-2 text-gray-400">
                Please be informed that all personal details entered will be
                protected according to the EU GDPR and UK Data Protection Act
              </span>

              <div className="md:col-span-2  flex justify-center">
                <button
                  disabled={!isBtnActive || isPending}
                  className={` ${
                    isBtnActive
                      ? "bg-secondary "
                      : "bg-gray-200 cursor-not-allowed"
                  } p-3 px-6 rounded-md text-white  flex gap-3 font-semibold`}
                >
                  {isPending ? (
                    <ClipLoader size={20} color="#fff" />
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Register;
