import { useState } from "react";
import emailjs from 'emailjs-com';
//import checkedImg from "../../assets/images/check.png"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  // const [open, setOpen] = useState(false);


  const [isEmailSent, setIsEmailSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: contactData.name,
      from_email: contactData.email,
      from_phone: contactData.phone,
      message: contactData.message,
    };

    console.log("test email _ ", templateParams)
    emailjs
      .send('service_g6o7fam', 'template_z6bjfcp', templateParams, '7Hq5OshcW8yrj2bxw')
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        setIsEmailSent(true);

        toast.success("Message Send Successfully!!", {
          position: "top-center",
          autoClose: 2000,
          className: "custom-toast",
        });
        // alert("data submitted successfully");

        setContactData({
          name: '',
          email: '',
          phone: '',
          message: ""

        })
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error("Submission Failed ?", {
          position: "top-center",
          autoClose: 2000,
          className: "custom-toast",
        });
      });



  };
  return (
    <div className="flex justify-center py-20">
      <div className="md:w-2/3 w-full">
        <div className="bg-white rounded-lg shadow-lg text-center p-4">
          <div className="p-4">
            <h4 className="text-2xl">
              Join Us & See Results
            </h4>
            <div className="pt-7">
              <p className="text-lg">
                We Have a Plan For You To Thrive.
              </p>
              <p className="text-lg">
                Contact us, We Will Help You Achive Your Goals

              </p>
            </div>
            <h4 className="text-2xl pt-9">CHARJ.co</h4>
            <p className="text-lg pt-7">1115 Crestlawn Dr C1, Mississauga, ON L4W 1A7, Canada</p>
            <p className="text-lg pt-10">

              Cross Continent EV Revolution

              Drive All Roads in the US, Canada, Europe and Middle East
            </p>
          </div>
          <div className="flex justify-center p-4">
            <form onSubmit={handleFormSubmit}>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    for="name"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Name*
                  </label>
                </div>
              </div>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    for="email"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Email*
                  </label>
                </div>
              </div>
              <div class="w-full  px-2 mb-4">
                <div class="relative">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-700  rounded-md border border-gray-400 appearance-none focus:outline-none peer"
                    placeholder=" "
                    value={contactData.phone}
                    onChange={handleInputChange}
                  />
                  <label
                    for="phone"
                    class="absolute text-sm text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div class="w-full px-2 mb-4">
                <div class="relative">
                  <textarea
                    id="interest"
                    name="message"
                    class="border border-gray-400  block w-full py-2 px-4 placeholder-gray-700 rounded-md text-gray-700 focus:outline-none"
                    rows="8"
                    placeholder="I'm interested in*"
                    value={contactData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>



              <div className="flex flex-col  items-center gap-5 text-gray-500">
                <button className="bg-black text-base text-[#C6C6C6] tracking-wider font-bold px-6 py-3 border border-black rounded-md" onClick={() => handleFormSubmit()}
                  disabled={isEmailSent}
                >
                  SEND
                </button>

                <p className="mb-5">
                  This site is protected by reCAPTCHA and the Google
                  <span className="text-gray-700">
                    {" "}
                    Privacy Policy
                  </span> and{" "}
                  <span className="text-gray-700">Terms of Service </span>
                  apply.
                </p>

                <p>
                  1115 Crestlawn Dr C1, Mississauga, ON L4W 1A7, Canada
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;