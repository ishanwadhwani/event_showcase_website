import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return (
      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex">
            <a className="m-auto p-2 lg:text-2xl xl:text-2xl xxl:text-2xl " href="https://www.randomizemuj.com/">RANDOMIZE();</a>
            <a className="m-auto p-2" href="/home">Home</a>
            <a className="m-auto p-2" href="https://www.randomizemuj.com/team">Team</a>
          </div>
          <div className="flex">
            <a
              className="mr-4 hover:text-gray-400"
              href="https://www.linkedin.com/company/randomizemuj/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="mr-4 hover:text-gray-400"
              href="https://twitter.com/randomize_muj?s=21&t=UJeK1fSQDGzxlURkwNa_hA"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-gray-400"
              href="https://www.instagram.com/randomizemuj/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Footer;