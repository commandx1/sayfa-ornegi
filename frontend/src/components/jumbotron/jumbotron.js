import React, { Fragment, useEffect } from "react";
import "./jumbotron.scss";

const Jumbotron = (props) => {
  useEffect(() => {
    const side1 = document.getElementById("side1");
    window.addEventListener("scroll", function () {
      side1.style.left = -window.pageYOffset + "px";
    });
    const side2 = document.getElementById("side2");
    window.addEventListener("scroll", function () {
      side2.style.left = window.pageYOffset + "px";
    });
  });

  return (
    <Fragment>
      <section>
        <div className="side" id="side1"></div>
        <div className="side" id="side2"></div>
      </section>
      <div className="contentBx">
        <h1>Your Favorite Images</h1>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Jumbotron;
