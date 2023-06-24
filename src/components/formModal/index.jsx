import React, { useRef, useState } from "react";
import InputMask from 'react-input-mask';
import { RxCross2 } from "react-icons/rx";
import firestore from "../../firebase";
import { chargerCategory, country, interestLevel, partnershipWays, states } from "../../data/statesData";
import getZipCode from "../getZipCode";
import checkedImg from "../../assets/images/checked.png"
import { InvestmentData, PartnerShipData } from "../../data/partnershipOptionsData";
import { Saudiregions, UKstates, canada_provinces, emirates } from "../../data/states";
function FormModal(props) {
  const [states, setStates] = useState([]);
  const messageref = useRef();
  //const reff = collection(getFirestore,"users");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    partnership: "",
    chargerCategory: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    interestLevel: "",
    partnershipWays: "",
    support: ""
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // const zipCode = getZipCode(value.toLowerCase().replace(/\s+/g, ''));
    setFormValues((values) => ({ ...values, [name]: value }));
    console.log("formValues", formValues.country);
    if (name === 'country') {
      let availableStates = [];

      if (value === 'Canada') {
        availableStates = canada_provinces;
      } else if (value === 'UK') {
        availableStates = UKstates;
      } else if (value === 'Saudi Arabia') {
        availableStates = Saudiregions;
      } else if (value === 'UAE') {
        availableStates = emirates;
      }

      setStates(availableStates);
    }
  };


  const saveData = () => {
    // Get a reference to the collection you want to store data in
    const collectionRef = firestore.collection('Partners');
    // Create a new document with a unique ID (Firestore will generate the ID)
    const newDocRef = collectionRef.doc();
    // Set the data you want to store in the document
    const data = {
      partName: formValues.name,
      partMail: formValues.email,
      partPhone: formValues.phone,
      partcom: formValues.partnership,
      partState: formValues.state,
      partZip: formValues.zipCode,
    };
    // Save the data to Firestore
    newDocRef
      .set(data)
      .then(() => {
        console.log('Data stored successfully!');
        props.closePartner
      })
      .catch((error) => {
        console.error('Error storing data: ', error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //const collectionRef = doc(database, 'users');
    let t0 = performance.now();
    saveData();
    let t1 = performance.now();
    console.log('Time taken to execute add function:' + (t1 - t0) + ' milliseconds');
    // handle firebase shit

    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      props.closePartner()
    }, 1000);


  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    maxWidth: '25px',
    maxHeight: '20px',
    //marginRight: '10px',
    marginLeft: '10px'
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-[#000000cc] flex justify-center items-center backdrop-blur-sm px-2 py-4 ">
      <div className="bg-white rounded-md max-w-[400px] max-h-[80vh] md:max-w-full md:max-h-full overflow-y-scroll">
        <div className="modal-header">

          <div className="bg-none flex justify-end w-full p-5">
            <RxCross2
              onClick={props.closePartner}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="modal-body ">
          <div className="container mx-2 md:mx-0 mt-4 md:mt-0  ">
            <div className="grid grid-cols-12">
              <div className="col-span-2 hidden md:block"></div>
              <div className="col-span-12 md:col-span-8 text-center rounded-lg">
                <form
                  className="bg-white rounded-lg px-6 pt-1 md:pt-6 pb-2 md:pb-12 mb-4 max-w-2xl"
                  onSubmit={handleFormSubmit}
                >

                  <h4 className="text-2xl pb-7 capitalize">{props.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-6">
                      <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-6">
                      <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      <InputMask
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        mask="(999) 999-9999"
                        placeholder="(123) 456-7890"
                        name="phone"
                        value={formValues.phone}
                        maskChar="_"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-6">
                      <select
                        id="partnership"
                        name="partnership"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value="evchargers"
                        disabled
                      >
                        <option value="evchargers">EV Chargers</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <select
                        id="chargerCategory"
                        name="chargerCategory"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={formValues.chargerCategory}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled hidden>
                          Select Charger Category
                        </option>
                        {chargerCategory.map((charger, index) =>
                          <option key={index} value={charger.category}>{charger.category}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-6">
                      <select
                        id="country"
                        name="country"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={formValues.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option className="text-gray-700" value="" disabled hidden>
                          Select a country
                        </option>
                        {country.map((country, index) =>
                          <option className="text-gray-700" key={index} value={country.name}>{country.name}</option>
                        )}
                      </select>

                    </div>
                    <div className="mb-6">
                      <select
                        id="state"
                        name="state"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={formValues.state}
                        onChange={handleInputChange}
                        required
                      >
                        <option className="text-gray-700" value="" disabled hidden>
                          {formValues.country === 'Canada' ? 'Select a province' : 'Select a state'}
                        </option>
                        {states.map((state, index) =>
                          <option className="text-gray-700" key={index} value={state.name}>{state.name}</option>
                        )}
                      </select>

                    </div>
                    <div className="mb-6">

                      <input
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        name="city"
                        value={formValues.city}
                        onChange={handleInputChange}
                        placeholder="city"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div className="mb-6">
                      <input
                        id="zipCode"
                        name="zipCode"
                        type="number"
                        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder={`${formValues.country === 'Canada' ? 'Postcode' : 'Zipcode'}`}
                        value={formValues.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-6">
                      <select
                        id="partnershipWays"
                        name="partnershipWays"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={formValues.partnershipWays}
                        onChange={handleInputChange}
                        required
                      >
                        <option className="text-gray-700" value="" disabled hidden>
                          Ways of PartnerShip
                        </option>
                        {partnershipWays.map((partnership, index) =>
                          <option className="text-gray-700" key={index} value={partnership.partnershipWay}>{partnership.partnershipWay}</option>
                        )}
                      </select>

                    </div>
                    <div className="mb-6">
                      <select
                        id="support"
                        name="support"
                        className="shadow border rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={formValues.support}
                        onChange={handleInputChange}
                        required
                        disabled={formValues.country !== "Canada"}
                      >
                        <option className="text-gray-700" value="" disabled={formValues.country !== 'Canada'} hidden>
                          {formValues.country === "Canada" ? "Do you need support?" : "Not right now in the US"}
                        </option>
                        <option className="text-gray-700" value="yes">Yes</option>
                        <option className="text-gray-700" value="no">No</option>
                      </select>
                    </div>
                  </div>


                  <div className="mb-6">
                    <p className="text-[#595959] text-sm">
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold py-2 px-7 rounded  focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      SEND
                    </button>

                    {open && (
                      <div style={modalStyle}>
                        <div style={modalContentStyle}>

                          <h3>Information Saved successfully</h3>
                          <img src={checkedImg} alt="Image" style={imageStyle} />

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

export default FormModal;