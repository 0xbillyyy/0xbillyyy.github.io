// import React from "react";
import { Link } from "react-router-dom";

import { SiAboutdotme } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { PiProjectorScreenChartFill, PiCertificateFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";




export function CardNavigation() {
  return (
    <>

      <div className="mb-5 fixed top-0 left-0 m-5 backdrop-blur-sm text-white p-2 text-center shadow-lg border-2 rounded-md custom-card-hover text-white hover:text-custom-button-text hover:bg-custom-button z-10">
        <div className="flex justify-center items-center">
          <a target="_blank" href={"/"} className="flex justify-center items-center">
            <FaDownload size={24} className="mr-2" />
            CV
          </a>
        </div>
      </div>

      <div className="mb-5 fixed top-0 right-0 m-5 backdrop-blur-sm text-white p-2 text-center shadow-lg border-2 rounded-md custom-card-hover hover:bg-custom-button text-white hover:text-custom-button-text z-10">
        <div className="flex justify-center items-center">
          <Link to="/">
            <FaHome size={24} />
          </Link>
        </div>
      </div>

      <div className="mb-5 fixed bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur-sm text-white p-4 text-center shadow-lg border-2 rounded-md custom-card-hover z-10">
        <div className="flex justify-center items-center">
          <Link to="/aboutme">
            <div className="hover:bg-black p-2 rounded-md transition duration-100 ease-out md:ease-in mr-3 hover:bg-custom-button text-white hover:text-custom-button-text" title="About Me">
              <SiAboutdotme size={24} />
            </div>
          </Link>
          <Link to="/">
            <div className="hover:bg-black p-2 rounded-md transition duration-100 ease-out md:ease-in mr-3 hover:bg-custom-button text-white hover:text-custom-button-text" title="My Education">
              <FaGraduationCap size={24} />
            </div>
          </Link>
          <Link to="/">
            <div className="hover:bg-black p-2 rounded-md transition duration-100 ease-out md:ease-in mr-3 hover:bg-custom-button text-white hover:text-custom-button-text" title="My Portofolio">
              <PiProjectorScreenChartFill size={24} />
            </div>
          </Link>
          <Link to="/">
            <div className="hover:bg-black p-2 rounded-md transition duration-100 ease-out md:ease-in mr-3 hover:bg-custom-button text-white hover:text-custom-button-text" title="My Achievements">
              <PiCertificateFill size={24} />
            </div>
          </Link>
          <Link to="/">
            <div className="hover:bg-black p-2 rounded-md transition duration-100 ease-out md:ease-in mr-3 hover:bg-custom-button text-white hover:text-custom-button-text" title="Contact Me">
              <MdContacts size={24} className="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
