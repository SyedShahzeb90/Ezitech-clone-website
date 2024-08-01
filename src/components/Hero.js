import React from "react";
import image from "../images/hero.png";
import "../styles/hero.scss";

function Hero() {
  return (
    <div className="container my-5">
      {/* Heading Section */}
      <div className="heading text-black text-center my-3 p-3">
        <h1>How it Works?</h1>
      </div>

      {/* Cards Section */}
      <div className="row g-4 d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card" style={{ width: "14rem" }}>
            <img src={image} className="card-img-top" alt="Card Image" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "14rem" }}>
            <img src={image} className="card-img-top" alt="Card Image" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "14rem" }}>
            <img src={image} className="card-img-top" alt="Card Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
