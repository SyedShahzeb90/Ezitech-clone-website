import React from "react";
import javascript from "../images/javascript.webp";
import fiverr from "../images/fiverr.webp";
import react from "../images/react-1.webp";
import node from "../images/node.webp";

import tripImage from "../images/adobe.webp";
import google from "../images/google.jpg";
import seo from "../images/seo.jpg";
import digitalmarketing from "../images/digitalmarketing.webp";
import linkedin from "../images/linkedin-search.webp";
import contentmarketing from "../images/frontend.webp";
import "../styles/courses.scss";

function Courses() {
  return (
    <div>
      <h1 className="text-center">Limited-Time Summer Course Bundles!</h1>
      <p className="text-center">
        Note : All these bundles have recorded luctures{" "}
      </p>
      <br />
      <div className="">
        <div className="d-flex justify-content-center align-content-center">
          <div className="col-md-4 m-2">
            <div className="card mb-4">
              <div className="my-heading text-white text-center">
                <p>Web Development course with industrial Projects</p>
                <p className="my-heading2">4 Courses</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={javascript} alt="js" />
                <p className="me-auto">
                  From Novice to expert, The complete JavaScript Course 2024!
                </p>
                <p className="ms-auto">PKR7,600</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={react} alt="react" />
                <p className="me-auto">
                  The Complete Guide to React (incl hooks, React Router, Redux)
                </p>
                <p className="ms-auto">PKR8,000</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={fiverr} alt="fiverr" />
                <p className="me-auto">
                  Sell Fiverr Gigs Like The Top 1% in Freelancing in 2024
                </p>
                <p className="ms-auto">PKR4,500</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={node} alt="node" />
                <p className="me-auto">
                  The Complete Bootcamp 2024: Node.js, Express, MongoDB, and
                  More
                </p>
                <p className="ms-auto">PKR13,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-2">
            <div className="card mb-4">
              <div className="my-heading text-white text-center">
                <p>Digital Marketing Mastery learn for the best</p>
                <p className="my-heading2">6 Courses</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={tripImage} alt="trip" />
                <p className="me-auto">
                  TripAdvisor, Google My Business, and Local SEO
                </p>
                <p className="ms-auto">PKR5,000</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={google} alt="react" />
                <p className="me-auto">Youtube ads and Google ads</p>
                <p className="ms-auto">PKR5,000</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={seo} alt="fiverr" />
                <p className="me-auto">Search Engine Optimization</p>
                <p className="ms-auto">PKR6,000</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img
                  className="both-pics"
                  src={digitalmarketing}
                  alt="digital"
                />
                <p className="me-auto">Advance Digital Marketing</p>
                <p className="ms-auto">PKR6,500</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={linkedin} alt="linkedin" />
                <p className="me-auto">Linked in Orientation</p>
                <p className="ms-auto">PKR5,000</p>
              </div>
              <div className="card-body d-flex align-items-center">
                <img className="both-pics" src={contentmarketing} alt="cm" />
                <p className="me-auto">Content Marketing & Copyrighting </p>
                <p className="ms-auto">PKR5,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
