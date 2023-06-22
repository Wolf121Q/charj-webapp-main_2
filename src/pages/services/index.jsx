import React from "react";
import services1 from "../../assets/images/services/services1.jpg";
import services2 from "../../assets/images/services/services2.jpg";
import services3 from "../../assets/images/services/services3.jpg";
import services4 from "../../assets/images/services/services4.jpg";
import services5 from "../../assets/images/services/services5.jpg";
import services6 from "../../assets/images/services/services6.jpg";

const Services = () => {
  return (
    <div className=" bg-white pt-[120px] pb-[120px]">
      <div className="text-center ">
        <p className="text-[32px] font-semibold 2xl:text-[50px] text-gray-900">
          GOVERNMENT SUBSIDY
        </p>
        <div className="flex justify-center">
          <hr className="w-[70px] border-[1.5px] mt-5"></hr>
        </div>
      </div>
      <div className="mt-5  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services1}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[80%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%] flex flex-col items-center">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-gray-700">
                  Federal iZEV Program
                </h1>
                <p className="text-[18px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-gray-600">
                  The federal government offers the iZEV (Incentives for
                  Zero-Emission Vehicles) program, which provides a purchase
                  incentive of up to $5,000 for eligible battery electric
                  vehicles (BEVs) and plug-in hybrid electric vehicles (PHEVs)
                  with a manufacturer's suggested retail price (MSRP) below a
                  certain threshold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="mt-5  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services2}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[80%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-gray-700">
                  Provincial and Territorial Incentives
                </h1>
                <p className="text-[18px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-gray-600">
                  Several provinces and territories also provide their own
                  incentives in addition to the federal program. These
                  incentives can include additional purchase rebates, reduced
                  vehicle registration fees, and exemption from certain taxes or
                  tolls. The availability and amounts of these incentives vary
                  by province or territory, so it's important to check the
                  specific programs in your region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* three */}
      <div className="mt-5  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex ">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services3}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[80%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-gray-700">
                  Charging Infrastructure Incentives
                </h1>
                <p className="text-[18px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-gray-600">
                  The Canadian government has allocated funds to support the
                  development and installation of electric vehicle charging
                  stations across the country. These incentives are aimed at
                  expanding the charging infrastructure and making it more
                  accessible to EV owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* four */}
      <div className="mt-5  lg:flex justify-center">
        <div className="lg:w-[87rem] md:flex md:flex-row-reverse">
          <div className=" flex justify-center md:w-[50%]   ">
            <img
              src={services4}
              className="w-[95%] h-[77%] md:w-[98%] lg:h-[80%]"
            ></img>
          </div>
          <div className="md:mt-0 mt-5 flex justify-center items-center  md:w-[50%]  ">
            <div className="w-[95%] text-center   md:h-[300px] flex items-center ">
              <div className=" h-[96%]">
                <h1 className="text-[24px] lg:text-[28px] lg:font-medium font-normal text-gray-700">
                  Home Charging Incentives
                </h1>
                <p className="text-[18px] font-normal mt-3 lg:text-[17px] lg:font-normal 2xl:text-[20px] text-gray-600">
                  Some provinces offer incentives for the installation of
                  residential charging stations. These incentives may include
                  rebates or grants to help cover the cost of purchasing and
                  installing home charging equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* five */}
    </div>
  );
};

export default Services;
