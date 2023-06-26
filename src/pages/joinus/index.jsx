import { useState } from "react";
import InvestModal from "../../components/investModal";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import PartnerModal from "../../components/partnerModal";

function JoinUs() {
  const [invest, setInvest] = useState(false);
  const [partner, setPartner] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredbtnInvest, setHoveredbtnInvest] = useState(false);

  const openPartner = () => {
    setPartner(true);
  };

  const closePartner = () => {
    setPartner(false);
  };

  const openInvest = () => {
    setInvest(true);
  };

  const closeInvest = () => {
    setInvest(false);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnterInvest = () => {
    setHoveredbtnInvest(true);
  };

  const handleMouseLeaveInvest = () => {
    setHoveredbtnInvest(false);
  };

  const divStyle = {
    display: "inline-block",
    transition: "transform 0.3s ease",
    transform: hovered ? "scale(1.2)" : "scale(1)",
  };
  const divStyleinvest = {
    display: "inline-block",
    transition: "transform 0.3s ease",
    transform: hoveredbtnInvest ? "scale(1.2)" : "scale(1)",
  };
  const buttonStyle = {
    backgroundColor: "black",
    width: "96px",
    height: "96px",
    // color: '#C6C6C6',
    fontSize: "12px",
    letterSpacing: "1px",
    fontWeight: "bold",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    transition: "background-color 0.3s ease",
  };
  return (
    <div className="flex justify-center py-20">
      <div className="md:w-2/3 w-full">
        <div className="bg-white rounded-lg shadow-lg border-2 text-center p-8">
          <div className="p-4">
            <h4 className="text-2xl font-semibold">Join Us & See Results</h4>
            <div className="pt-7">
              <p className="text-lg ">We Have a Plan For You To Thrive.</p>
              <p className="text-lg">
                Contact us, We Will Help You Achive Your Goals
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex flex-col lg:flex-row gap-3 lg:justify-between my-5 md:max-w-4xl">
                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <AiOutlinePhone className="text-3xl" />
                  <p className="text-md font-normal">+1 437 438 5000</p>
                </div>

                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <MdLocationOn className="text-3xl" />
                  <p className="text-md font-normal">
                    1115 Crestlawn Dr C1, Mississauga, ON L4W 1A7, Canada
                  </p>
                </div>

                <div className=" py-5 px-5 shadow-md border flex flex-col gap-5 items-center w-full lg:max-w-[15rem]">
                  <HiOutlineMail className="text-3xl" />
                  <p className="text-md font-normal">info@charj.co</p>
                </div>
              </div>
            </div>

            <p className="text-lg py-5">
              Cross Continent EV Revolution Drive All Roads in the US, Canada,
              Europe and Middle East
            </p>
          </div>
          <div className="flex w-full justify-center gap-4">
            <div className="pt-7 ">
              <div
                style={divStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button onClick={openPartner} style={buttonStyle} type="button">
                  PARTNER
                  <br />
                  WITH
                  <br />
                  US
                </button>
              </div>
              {partner && (
                <PartnerModal
                  closePartner={closePartner}
                  setInvest={setInvest}
                  title="Partner with Us"
                />
              )}
            </div>
            <div className="pt-7">
              <div
                style={divStyleinvest}
                onMouseEnter={handleMouseEnterInvest}
                onMouseLeave={handleMouseLeaveInvest}
              >
                <button style={buttonStyle} onClick={openInvest} type="button">
                  INVEST
                  <br />
                  WITH
                  <br />
                  US
                </button>
              </div>
              {invest && (
                <InvestModal closeInvest={closeInvest} title="Invest with Us" />
              )}
            </div>
          </div>
        </div>

        <div className="col-span-2 hidden md:block"></div>
      </div>
    </div>
  );
}

export default JoinUs;
