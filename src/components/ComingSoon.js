import React from "react";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import heart from "./heart.png";
import constr from "./constr.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function ComingSoon() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <div
      className="pt-lg-3 pt-4"
      style={{
        height: "85vh",
        width: "100vw",
        display: "table-cell",
        verticalAlign: "middle",
      }}
    >
      <Zoom>
        <img
          src={constr}
          alt="Successfully registered"
          width={display ? "300" : "500"}
          height={display ? "270" : "300"}
          data-aos="zoom-in"
          data-aos-duration="20000"
        />
      </Zoom>
      <div className="my-sm-2 mx-3 my-4">
        <h1 className="fw-bold" style={{ color: "#50bc95" }}>
          Thanks for reaching us!
        </h1>
        <br />
        <h4 className="fw-light mb-md-2 mb-0">
          This page is under construction.
        </h4>
        <h5 className="fw-light">
          We request you to check out this page later.
        </h5>
      </div>
      <center>
        <div className="row pt-0" style={{ width: "100vw" }}>
          <div className="col-md-2 col-lg-3 col-1"></div>
          <div className="col-md-8 col-lg-6 col-10 py-4">
            <div
              className="w-auto d-inline-block p-4"
              style={{ borderRadius: "5px", backgroundColor: "#3ad6ab" }}
            >
              Subscribe to our NewsLetter to get notified when our page goes
              live.
              <form>
                <center>
                  <div
                    className={
                      display
                        ? "input-group my-3 w-100"
                        : "input-group my-3 w-75"
                    }
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mail ID"
                    />
                    <div className="input-group-append pt-0">
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#31343c", color: "white" }}
                      >
                        Subscribe
                      </span>
                    </div>
                  </div>
                </center>
              </form>
            </div>
          </div>
          <div className="col-md-2 col-lg-3 col-1"></div>
        </div>
      </center>
    </div>
  );
}

export default ComingSoon;
