import React from "react";
import services1 from "../../assets/images/subsidy/subsidy-1.webp";
import services2 from "../../assets/images/subsidy/subsidy-2.webp";
import services3 from "../../assets/images/subsidy/subsidy-3.jpg";
import services4 from "../../assets/images/subsidy/subsidy-4.jpg";

const GovernmentSubsidy = () => {
  return (
    <div className=" bg-white pt-[120px] pb-[120px]">
      <div className="text-center ">
        <p className="text-5xl font-semibold  text-[#2b5310]">
          Government Subsidy
        </p>
        <div className="flex justify-center">
          <hr className="w-[100px] border-[1.5px] mt-1 mb-5"></hr>
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
                <h1 className="text-2xl lg:font-medium font-normal text-[#338000]">
                  Federal iZEV Program
                </h1>
                <p className="text-md font-normal mt-3 lg:text-xl lg:font-normal 2xl:text-[16px] text-[#3d592e]">
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
                <h1 className="text-2xl lg:font-medium font-normal text-[#338000]">
                  Provincial and Territorial Incentives
                </h1>
                <p className="text-md font-normal mt-3 lg:text-xl lg:font-normal 2xl:text-[16px] text-[#3d592e]">
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
                <h1 className="text-2xl lg:font-medium font-normal text-[#338000]">
                  Charging Infrastructure Incentives
                </h1>
                <p className="text-md font-normal mt-3 lg:text-xl lg:font-normal 2xl:text-[16px] text-[#3d592e]">
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
                <h1 className="text-2xl lg:font-medium font-normal text-[#338000]">
                  Home Charging Incentives
                </h1>
                <p className="text-md font-normal mt-3 lg:text-xl lg:font-normal 2xl:text-[16px] text-[#3d592e]">
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

export default GovernmentSubsidy;
