import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/elizablindym/" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/lindy-merwin/",
  },
  {
    Social: <FaInstagram />,
    link: "https://www.linkedin.com/in/lindy-merwin/",
  },
  { Social: <FaGithub />, link: "https://github.com/lindyem/" },

  { Social: <FaTwitter />, link: "https://twitter.com/lndymrwn" },
];

const Footer = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
