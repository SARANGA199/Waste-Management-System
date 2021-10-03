import React from "react";
import "./FooterStyle.css";

export default function Footer() {
  return (
    <div>
      {/* Site footer */}
      <footer className="site-footer" style={{marginRight:'-20vh',marginLeft:'-20vh' , height:"30vh"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                <b>
                  <i>“EcoBin” </i>
                </b>
                is a system which provides connection between the people who
                want to get rid of their wastes and the parties which can get
                benefits from them. It provides facilities to collect and
                deliver them to relevant persons. The people who have reusable
                waste add them into the system. If there is a third party who is
                interested about them can request them through the system.
                ecoBin” was originally invented to fulfil the supplies
                requirement to the recycling facilities and solve the waste
                problems of the people while they get an extra income.
              </p>
            </div>

            <div className="col-xs-6 col-md-3 ms-5">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2017 All Rights Reserved by
                <a href="#"> EcoBin”</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
