import React from "react";
import { Link } from "react-router-dom";
import pt1 from "./EventLibrary/pt-1.png";
import pt2 from "./EventLibrary/pt-2.png";
import pt3 from "./EventLibrary/pt-3.png";
import pt4 from "./EventLibrary/pt-4.png";
import pt5 from "./EventLibrary/pt-5.png";
import pt6 from "./EventLibrary/pt-6.png";
import pt7 from "./EventLibrary/pt-7.png";
import pt8 from "./EventLibrary/pt-8.png";
import img1 from "./Podcast-amico.png";

function PodiumTalks() {
  function btnClk(typ) {
    if (typ === "all") {
      document.getElementById("CS/ep1").style.display = "block";
      document.getElementById("EC/ep2").style.display = "block";
      document.getElementById("EE/ep3").style.display = "block";
      document.getElementById("EC/ep4").style.display = "block";
      document.getElementById("ME/ep5").style.display = "block";
      document.getElementById("ME/ep6").style.display = "block";
      document.getElementById("EC/ep7").style.display = "block";
      document.getElementById("CH/ep8").style.display = "block";
      document.getElementById("all").style.backgroundColor = "#262626";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "white";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
    } else if (typ === "cse") {
      document.getElementById("CS/ep1").style.display = "block";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#262626";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "white";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
    } else if (typ === "ece") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "block";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "block";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "block";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#262626";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "white";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "black";
    } else if (typ === "mech") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "block";
      document.getElementById("ME/ep6").style.display = "block";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "none";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#262626";
      document.getElementById("chem").style.backgroundColor = "#fbfbfb";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "white";
      document.getElementById("chem").style.color = "black";
    } else if (typ === "chem") {
      document.getElementById("CS/ep1").style.display = "none";
      document.getElementById("EC/ep2").style.display = "none";
      document.getElementById("EE/ep3").style.display = "none";
      document.getElementById("EC/ep4").style.display = "none";
      document.getElementById("ME/ep5").style.display = "none";
      document.getElementById("ME/ep6").style.display = "none";
      document.getElementById("EC/ep7").style.display = "none";
      document.getElementById("CH/ep8").style.display = "block";
      document.getElementById("all").style.backgroundColor = "#fbfbfb";
      document.getElementById("cse").style.backgroundColor = "#fbfbfb";
      document.getElementById("ece").style.backgroundColor = "#fbfbfb";
      document.getElementById("mech").style.backgroundColor = "#fbfbfb";
      document.getElementById("chem").style.backgroundColor = "#262626";
      document.getElementById("all").style.color = "black";
      document.getElementById("cse").style.color = "black";
      document.getElementById("ece").style.color = "black";
      document.getElementById("mech").style.color = "black";
      document.getElementById("chem").style.color = "white";
    }
  }

  //"CS/ep1", "EC/ep2", "EE/ep3", "EC/ep4", "ME/ep5", "ME/ep6", "EC/ep7", "CH/ep8"

  return (
    <>
      <div
        className="row py-3"
        style={{
          backgroundImage: "linear-gradient(180deg, #6dd2ae 0%, white 90%)",
        }}
      >
        <div className="row">
          <div className="col-lg-9 col-md-7 col-4 px-lg-0 px-md-0 ps-lg-4 ps-md-4 ps-1">
            <h1
              className="fw-bold ps-4 mt-lg-4 mt-2"
              style={{ textAlign: "left", marginBottom: "60px" }}
            >
              {/* The <span style={{ color: "#3ad6ab" }}>content</span> you consume{" "}
          defines you. */}
              Podium Talks
            </h1>
            <div className="d-lg-block d-md-block d-none pt-0">
              <h5 className="mt-5 mb-3 fw-light">
                dslrwergio eorjgoeiijr ojorjgo ojerojedsg kdsoo
                <br />
                dsfgkbsdlruigh ojro wriohohw
              </h5>
              <a
                href="."
                className="btn mx-auto px-4 py-1 fs-4"
                style={{
                  backgroundColor: "#25d366",
                  width: "auto",
                  color: "white",
                }}
              >
                Watch
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-8 pe-0">
            <img
              src={img1}
              alt=""
              style={{ height: "100%", width: "80%", float: "right" }}
            />
          </div>
        </div>
      </div>
      <div
        className="row d-lg-none d-md-none d-block py-5"
        style={{ backgroundColor: "#f5f6f7" }}
      >
        <h6 className="mb-3 fw-light">
          dslrwergio eorjgoeiijr ojorjgo ojerojedsg kdsoo
          <br />
          dsfgkbsdlruigh ojro wriohohw
        </h6>
        <a
          href="."
          className="btn mx-auto px-4 py-1 fs-6"
          style={{
            backgroundColor: "#25d366",
            width: "auto",
            color: "white",
          }}
        >
          {/* <i className="fab fa-whatsapp fs-3"></i>&nbsp;  */}
          Watch
        </a>
      </div>

      {/* Event library */}

      <div className="row py-md-4 py-0 bg-light">
        <div className="text-start ms-md-4 ms-3">
          <button
            id="all"
            className="btn btn-dark px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("all")}
          >
            All
          </button>
          <button
            id="cse"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c", outline: "none" }}
            onClick={() => btnClk("cse")}
          >
            CSE
          </button>
          <button
            id="ece"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("ece")}
          >
            ECE
          </button>
          <button
            id="mech"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("mech")}
          >
            Mech
          </button>
          <button
            id="chem"
            className="btn btn-light px-4 m-2"
            style={{ border: "1px solid #31343c" }}
            onClick={() => btnClk("chem")}
          >
            Chemical
          </button>
        </div>

        <div className="col-md-6 col-lg-4 my-4" id="CH/ep8">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt8}
                alt="Podium Talks 8"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 8</b>
              </h3>
              {/* <h5>Week 8</h5> */}
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep8" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep7">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt7}
                alt="Podium Talks 7"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 7</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep7" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="ME/ep6">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt6}
                alt="Podium Talks 6"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 6</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep6" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="ME/ep5">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt5}
                alt="Podium Talks 5"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 5</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep5" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep4">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt4}
                alt="Podium Talks 4"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 4</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep4" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="EE/ep3">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt3}
                alt="Podium Talks 3"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 3</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep3" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2"></div> */}
        <div className="col-md-6 col-lg-4 my-4" id="EC/ep2">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt2}
                alt="Podium Talks 2"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 2</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep2" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-4" id="CS/ep1">
          <div
            className="card mx-auto my-2 pt-0"
            style={{
              minWidth: "250px",
              width: "75%",
              height: "95%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 0 3px #999",
            }}
          >
            <center>
              <img
                className="mb-2"
                src={pt1}
                alt="Podium Talks 1"
                // width="320"
                // height="220"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </center>
            <div className="card-body">
              <h3 className="card-title">
                <b>Episode 1</b>
              </h3>
              <p className="card-text my-4">
                Dig into all the <strong>details</strong> of
                <strong> colleges</strong> needed for admission process.
              </p>
              <Link to="/ep1" style={{ textDecoration: "none" }}>
                <a
                  href="."
                  className="btn btn-light mx-2 px-3 my-2 float-lg-start"
                >
                  Documentation
                </a>
              </Link>
              <a
                href="https://www.collegeexplorer.in"
                className="btn w-auto m-2 px-3 float-lg-end"
                style={{ backgroundColor: "#3ad6ab", color: "white" }}
              >
                Watch now
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2"></div> */}
      </div>
    </>
  );
}

export default PodiumTalks;