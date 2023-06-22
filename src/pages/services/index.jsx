import React from "react";
import chargingnetwork from "../../assets/images/services/chargenetwork.jpg";
import effcientcharging from "../../assets/images/services/efficientcharging.jpg";
import tailored from "../../assets/images/services/tailored.jpg";
import friendly from "../../assets/images/services/userfriendly.jpeg";
import greenenergy from "../../assets/images/services/greenenergy.webp";
import safety from "../../assets/images/services/safety.jpg";
const Services = () => {
  return (
    <div className=" bg-white pt-[120px] pb-[120px]">
      <div className="text-center ">
        <p className="text-[40px] font-semibold 2xl:text-[60px] text-gray-900">
          Our Services
        </p>
        <div className="flex justify-center">
          <hr className="w-[70px] border-[1.5px] mt-5"></hr>
        </div>
      </div>
      <div className="lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={chargingnetwork}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" ">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  Extensive Charging Network:
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  we take pride in our extensive charging network that spans
                  across cities, highways, and key destinations. Our goal is to
                  ensure that electric vehicle (EV) owners have easy and
                  convenient access to reliable charging points wherever their
                  journeys take them. With our widespread network of charging
                  stations strategically located in various locations, you can
                  rest assured that you'll find a charging point within reach,
                  whether you're in an urban center, exploring scenic routes, or
                  embarking on a long-distance road trip. We have carefully
                  established partnerships and collaborations to expand our
                  network, providing you with a comprehensive charging
                  infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={effcientcharging}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  Fast and Efficient Charging:
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  Our charging infrastructure is equipped with high-powered
                  chargers designed to deliver exceptional charging speeds. With
                  advanced technology and optimized power delivery, you can
                  experience significantly reduced charging times compared to
                  traditional charging methods. Whether you're making a quick
                  stop or need a rapid charge during a longer journey, our fast
                  charging solutions ensure that you spend less time waiting and
                  more time driving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* three */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={tailored}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  Tailored Charging Solutions:
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  For commercial and public charging, we analyze your specific
                  needs and requirements to design charging solutions that cater
                  to your customers, employees, or visitors. We consider factors
                  such as parking availability, charging demand, user
                  authentication, and billing management to create an efficient
                  and user-friendly charging environment. Our solutions can
                  include a range of charging options, such as standard
                  chargers, fast chargers, or even high-power charging
                  infrastructure, depending on your charging demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* four */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={friendly}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  User-Friendly Charging Experience
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  To ensure a seamless user experience, we have developed
                  user-friendly mobile applications and intuitive interfaces
                  that make finding, accessing, and paying for charging services
                  incredibly easy. Our mobile app allows you to locate nearby
                  charging stations, check their availability in real-time, and
                  even reserve a charging spot if applicable. You can view
                  essential information such as charging rates, charging speeds,
                  and any additional amenities provided at the charging
                  location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* five */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={safety}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  Enhanced Safety and Reliability
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  We prioritize the safety of both you and your vehicle by
                  implementing advanced safety features in our charging
                  infrastructure. This includes features such as automatic fault
                  detection, thermal management systems, and built-in protection
                  mechanisms to prevent overcharging, overheating, or any other
                  potential hazards. Our charging stations are designed to
                  provide a secure and reliable charging experience for your EV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* six */}
      <div className="mt-10  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className="md:max-h-[15rem] flex justify-center items-center md:w-[50%]   ">
            <img
              src={greenenergy}
              className="w-[95%]  md:w-[98%] h-[100%] object-cover"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[22px] lg:text-[24] lg:font-medium font-normal text-gray-700">
                  Green Energy Initiatives:
                </h1>
                <p className="text-[12px] font-normal mt-3 lg:text-[14px] lg:font-normal 2xl:text-[16px] text-gray-600">
                  We have implemented various strategies to minimize the
                  environmental impact of our charging infrastructure. One of
                  our key initiatives is to integrate renewable energy sources
                  into our charging network. We collaborate with renewable
                  energy providers to source electricity from solar, wind, or
                  hydroelectric power, ensuring that the energy used to charge
                  your EV comes from clean and sustainable sources. By
                  prioritizing renewable energy, we contribute to the reduction
                  of greenhouse gas emissions and help combat climate change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
