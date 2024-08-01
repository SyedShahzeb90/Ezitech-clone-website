import React from "react";
import Icons from "./icons";
import Icon2 from "./icon2";
import Icon3 from "./Icon3";
import "../styles/section.scss";

function Section() {
  return (
    <div className="container">
      <div className="container text-center ">
        <div className="heading text-black text-center my-3 p-3">
          <h1>How it Works?</h1>
        </div>
        <div className="row my-icons">
          <div className="col-md-4">
            <Icons />
          </div>
          <div className="col-md-4 my-3">
            <Icon2 />
            <br />
          </div>
          <div className="col-md-4 my-3">
            <Icon3 />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
