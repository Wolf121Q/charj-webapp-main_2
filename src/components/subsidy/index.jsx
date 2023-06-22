import React from "react";

const Subsidy = () => {
  const subsidyItems = [
    {
      id: 1,
      title: "Federal iZEV Program",
      description:
        "The federal government offers the iZEV (Incentives for Zero-Emission Vehicles) program, which provides a purchase incentive of up to $5,000 for eligible battery electric vehicles (BEVs) and plug-in hybrid electric vehicles (PHEVs) with a manufacturer's suggested retail price (MSRP) below a certain threshold.",
    },
    {
      id: 2,
      title: "Provincial and Territorial Incentives",
      description:
        " Several provinces and territories also provide their own incentives in addition to the federal program. These incentives can include additional purchase rebates, reduced vehicle registration fees, and exemption from certain taxes or tolls. The availability and amounts of these incentives vary by province or territory, so it's important to check the specific programs in your region.",
    },
    {
      id: 3,
      title: "Charging Infrastructure Incentives",
      description:
        "The Canadian government has allocated funds to support the development and installation of electric vehicle charging stations across the country. These incentives are aimed at expanding the charging infrastructure and making it more accessible to EV owners.",
    },
    {
      id: 4,
      title: "Home Charging Incentives",
      description:
        "Some provinces offer incentives for the installation of residential charging stations. These incentives may include rebates or grants to help cover the cost of purchasing and installing home charging equipment.",
    },
  ];

  return (
    <div className="w-full bg-white py-5 flex justify-center mt-20">
      <div className="max-w-7xl">
        <div className="container">
          <h1 className="text-xl font-semibold">
            The Canadian government is providing various subsidies and
            incentives for electric vehicle (EV) owners to encourage the
            adoption of electric vehicles and reduce greenhouse gas emissions.
          </h1>
          <h2 className="text-lg font-semibold">
            Here are some of the subsidies and incentives that were available:
          </h2>
        </div>
        <div className="flex  my-5 gap-3">
          {subsidyItems.map((item) => {
            return (
              <div class="w-full  bg-white border border-gray-200 rounded-lg shadow ">
                <div class="flex flex-col items-center py-5  gap-3">
                  {/* <img
                class="w-16 h-16 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              /> */}
                  <h5 class="mb-1 text-lg font-medium text-gray-900 text-center px-2">
                    {item.title}
                  </h5>
                  <span class="text-[1rem] text-gray-600 text-justify px-3">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subsidy;
