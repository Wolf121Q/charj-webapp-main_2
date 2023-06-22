import React from "react";
import { Link } from "react-router-dom";
import poweredLogo from "../../assets/images/powered-logo.png"
const Footer = (props) => {
  return (
    <div className={props.className}>
      {!props.isHomePage &&
        (<div className="flex flex-col items-center justify-between py-6 px-10 bg-[#26371d] gap-3">
          <h1 className="text-md font-bold text-white tracking-widest">Copyright © 2023 CHARJ.co by Orbitunity Inc. and Incu Canada</h1>
        </div>)
      }
      <div className={`flex ${!props.isHomePage ? 'flex-col' : 'flex-col md:flex-row'} items-center justify-between py-6 px-10 bg-white gap-3`}>
        {props.isHomePage && <h1 className="text-md font-bold text-black tracking-widest">Copyright © 2023 CHARJ.co by Orbitunity Inc. and Incu Canada</h1>}
        <h1 className="text-md font-light text-[#338000] tracking-widest flex items-end">Powered by <Link to="https://claystone.pk/" target="_blank"><img src={poweredLogo} alt="clay stone logo" className="h-6" /></Link></h1>
      </div>
    </div>
  );
};

export default Footer;
