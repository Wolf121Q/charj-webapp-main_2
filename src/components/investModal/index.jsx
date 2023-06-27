import React, { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { RxCross2 } from "react-icons/rx";
import checkedImg from "../../assets/images/checked.png";
import firestore from "../../firebase";
import { useForm } from "react-hook-form";
import { countriesData } from "../../data/data";
import { partnershipWays, chargerCategory } from "../../data/statesData";

function InvestModal(props) {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState(countriesData);
  const [states, setStates] = useState([]);
  const [canadaSelected, setCanadaSelected] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const {
    register,
    formState: { errors },
    reset,
    watch,
    setValue,
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const selectedCountryData = countries.find(
      (country) => country.name === selectedCountry
    );

    console.log(selectedCountry);
    if (selectedCountry === "Canada") {
      setCanadaSelected(true);
    } else setCanadaSelected(false);

    setStates(selectedCountryData.states);
    setValue("state", "");
    setValue("city", "");
  };

  const onSubmit = (data) => {
    setLoading(true);
    const currentDate = new Date();
    const nowTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const stringdate = currentDate.toISOString();
    //alert(nowTime);
    const mydate = stringdate.substring(0, 10);

    const date_Time = `${mydate} - ${nowTime}`;
    //alert(date_Time);
    data.submissionDate = date_Time;

    // Get a reference to the collection you want to store data in
    const collectionRef = firestore.collection("Investers");
    // Create a new document with a unique ID (Firestore will generate the ID)
    const newDocRef = collectionRef.doc();
    // Set the data you want to store in the document
    newDocRef
      .set(data)
      .then(() => {
        console.log("Data stored successfully!", data);
        setLoading(false);
        handleOpen();
        reset();
        props.closeInvest();
      })
      .catch((error) => {
        console.error("Error storing data: ", error);
        setLoading(false);
      });
  };

  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    maxWidth: "25px",
    maxHeight: "20px",
    //marginRight: '10px',
    marginLeft: "10px",
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-[#000000cc] flex justify-center items-center backdrop-blur-sm px-2 py-2 my-3">
      <div className="bg-white rounded-md max-w-[400px] max-h-[80vh] md:max-w-full md:max-h-full overflow-y-scroll">
        <div className="modal-header">
          <div className="bg-none flex justify-end w-full p-5">
            <RxCross2
              onClick={props.closeInvest}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="modal-body ">
          <div className=" mx-2 md:mx-0  md:mt-0  ">
            <div className="grid grid-cols-12">
              <div className="col-span-2 hidden md:block"></div>
              <div className="col-span-12 md:col-span-8 text-center rounded-lg">
                <form
                  className="bg-white rounded-lg px-6 pt-1 md:pt-3 pb-2 md:pb-6 mb-4 max-w-2xl"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h4 className="text-2xl pb-7 capitalize">{props.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.firstName && (
                        <span className="error text-red-600 text-sm">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.lastName && (
                        <span className="error text-red-600 text-sm">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register("email", {
                          required: "Please enter a valid email",
                          pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Invalid Email",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="error text-red-600 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <InputMask
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        mask="(999) 999-9999"
                        placeholder="(123) 456-7890"
                        name="phone"
                        maskChar="_"
                        {...register("phone", {
                          required: "Phone Number is required",
                        })}
                      />
                      {errors.phone && (
                        <span className="error text-red-600 text-sm">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <select
                        id="partnerShip"
                        name="partnerShip"
                        className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue="EV Chargers"
                        {...register("partnerShip", {
                          required: "PartnerShip Country",
                        })}
                      >
                        <option value="EV Chargers" disabled>
                          EV Chargers
                        </option>
                      </select>
                    </div>
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <select
                        id="chargerCategory"
                        name="chargerCategory"
                        className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("chargerCategory", {
                          required: "Please charger Category Type",
                        })}
                      >
                        <option value="">Select Partnership Type</option>
                        {chargerCategory.map((partner) => (
                          <option value={partner.category} key={partner.id}>
                            {partner.category}
                          </option>
                        ))}
                      </select>
                      {errors.chargerCategory && (
                        <span className="error text-red-600 text-sm">
                          {errors.chargerCategory.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
                    <div className="min-h-[4.4rem] max-h-[4.8rem]  text-left">
                      <select
                        className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("country", {
                          required: "Please select a Country",
                        })}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <span className="error text-red-600 text-sm">
                          {errors.country.message}
                        </span>
                      )}
                    </div>
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <select
                        className="shadow border rounded w-full py-3 px-3
                      leading-tight focus:outline-none focus:shadow-outline"
                        {...register("state", {
                          required: "Please select a State",
                        })}
                      >
                        <option value="">Select a state</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <span className="error text-red-600 text-sm">
                          {errors.state.message}
                        </span>
                      )}
                    </div>
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        name="city"
                        {...register("city", {
                          required: "City is required",
                        })}
                        placeholder="City"
                      />
                      {errors.city && (
                        <span className="error text-red-600 text-sm">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <input
                        id="zipCode"
                        name="zipCode"
                        type="number"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder={`Zip/Postal Code`}
                        {...register("zipcode", {
                          required: "Zip/Postal code is required",
                          minLength: {
                            value: 5,
                            message:
                              "Zip/Postal Code cannot be less than 5 digits",
                          },
                          maxLength: {
                            value: 9,
                            message:
                              "Zip/Postal Code cannot be more than 9 digits",
                          },
                        })}
                      />
                      {errors.zipcode && (
                        <span className="error text-red-600 text-sm">
                          {errors.zipcode.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                      <select
                        id="partnershipWays"
                        name="partnershipWays"
                        className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("partnershipWays", {
                          required: "Partnership Ways is required",
                        })}
                      >
                        <option className="text-gray-700" value="">
                          Method of Investment
                        </option>
                        {partnershipWays.map((partnership, index) => (
                          <option
                            className="text-gray-700"
                            key={index}
                            value={partnership.partnershipWay}
                          >
                            {partnership.partnershipWay}
                          </option>
                        ))}
                      </select>
                      {errors.partnershipWays && (
                        <span className="error text-red-600 text-sm">
                          {errors.partnershipWays.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                    {canadaSelected ? (
                      <select
                        id="support"
                        name="support"
                        className="shadow border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("support", {
                          required: "Please Select an Option",
                        })}
                      >
                        <option value=""> Need Support? </option>
                        <option value="yes"> Yes </option>
                        <option value="no"> No </option>
                      </select>
                    ) : (
                      <p>
                        Support is only available for Canada. Soon it will be
                        available in other countries.
                        {!canadaSelected && (
                          <input
                            type="hidden"
                            name="support"
                            value="N/A"
                            {...register("support")}
                          />
                        )}
                      </p>
                    )}
                    {errors.support && (
                      <span className="error text-red-600 text-sm">
                        {errors.support.message}
                      </span>
                    )}
                  </div>

                  <div className="min-h-[4.4rem] max-h-[4.8rem] text-left">
                    <p className="text-[#595959] text-sm">
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      disabled={loading}
                      className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold py-2 px-7 rounded  focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>

                    {open && (
                      <div style={modalStyle}>
                        <div style={modalContentStyle}>
                          <h3>Information Saved successfully</h3>
                          <img
                            src={checkedImg}
                            alt="Image"
                            style={imageStyle}
                          />
                        </div>
                        {/* <button onClick={handleClose}>Close</button> */}
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="col-span-2 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestModal;
