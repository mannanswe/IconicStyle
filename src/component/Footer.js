import { Link, NavLink } from "react-router-dom";
import Icons from "../data/Icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-fluid">
        <div className="footer d-flex flex-column">
          <div className="footer-top d-flex justify-content-between align-items-center">
            <div className="company-icon">
              <img src={Icons.logo} alt="" />
            </div>
            <div className="important-link d-flex gap-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="./about">About</NavLink>
              <NavLink to="./contact">Contact</NavLink>
            </div>
            <div className="socila-media">
              <div className="icons d-flex align-items-center gap-3">
                <Link>
                  <div className="circles facebook">
                    <img
                      src={Icons.fbFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>

                <Link>
                  <div className="circles instragram">
                    <img
                      src={Icons.insFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>

                <Link>
                  <div className="circles tiktok">
                    <img
                      src={Icons.tiktokFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center">
            <p> © 2020 - 2023 Iconic Style . All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
