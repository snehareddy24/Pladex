import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import GoogleLogin from "react-google-login";
import main from "./loginbg.svg";
// import logo from "./FocusImages/logo.png";
import heart from "./heart.png";
import "./LoginMain.css";
import { Link } from "react-router-dom";

function LoginMain(props) {
  const [prop1, setprop1] = useState(false);
  const [prop2, setprop2] = useState(false);

  const currentUrl = window.location.href;
  var params = new URL(currentUrl).searchParams.get("state");

  useEffect(() => {
    if (
      params ==
      "83356ace8891b8d4b2fa144bcd6914a448bdff2ad348b86602c6674fef2dea8a"
    ) {
      setprop1(true);
    } else if (
      params ==
      "81250cb00595e685921654003178bfc8c7924a2314cd8d8565ffe5dd8ae5b2cb"
    ) {
      setprop2(true);
    } else if (props.method == "event" || props.method == "competition") {
      document.getElementById("log1").style.display = "inline-block";
      document.getElementById("log2").style.display = "inline-block";
    } else {
      setprop1(false);
    }
  }, [prop1, prop2]);

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  function eyeClick() {
    var icon = document.getElementById("icon");
    var input = document.getElementById("password");
    var type = input.type;

    if (type === "password") {
      icon.className = "fas fa-eye-slash";
      input.type = "text";
    } else if (type === "text") {
      icon.className = "fas fa-eye";
      input.type = "password";
    }
  }

  const handleLogin = async (googleData) => {
    const res = await fetch("/oauth/google_login", {
      method: "POST",
      body: "token = " + googleData.tokenId,

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await res.json();
    // store returned user somehow
  };

  return (
    <div
      style={{
        fontFamily: "Product Sans",
        minWidth: "100vw",
        minHeight: "100vh",
        // overflow: "none",
        backgroundImage: `url(${main})`,
        backgroundPosition: display ? "center" : "center",
        backgroundRepeat: display ? "no-repeat" : "no-repeat",
        backgroundSize: display ? "cover" : "cover",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center pt-5"
        // style={{
        //   minWidth: "100vw",
        //   minHeight: "100vh",
        //   // overflow: "none",
        //   backgroundImage: `url(${main})`,
        // }}
      >
        <div
          id="details"
          className="card text-black text-start pt-0"
          style={{
            color: "white",
            // maxWidth: "50vw",
            width: display ? "80vw" : "35vw",
            boxShadow: "0 0 20px #212121",
            opacity: "0.95",
            border: "none",
            // marginTop: "100px",
            marginTop: display ? "12vh" : "12vh",
          }}
        >
          <div className="card-body px-4 px-md-5">
            <div className="text-center mb-3">
              <h4
                className={prop1 ? "d-none" : "d-block"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Heyaa!
              </h4>
              <h4
                className={prop1 ? "d-block" : "d-none"}
                style={{ fontWeight: "lighter", fontFamily: "cursive" }}
              >
                Uh-Oh!
              </h4>
              <span className={prop2 ? "d-none" : "d-block"}>
                <h5
                  id="log"
                  className={prop1 ? "d-none" : "d-block"}
                  style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}
                >
                  <span id="log1" style={{ display: "none", width: "auto" }}>
                    Kindly,
                  </span>{" "}
                  Log into your account{" "}
                  <span id="log2" style={{ display: "none", width: "auto" }}>
                    first!{" "}
                  </span>
                </h5>
              </span>
              <h5
                className={prop1 ? "d-block" : "d-none"}
                style={{
                  fontWeight: "bolder",
                  fontFamily: "serif",
                  color: "red",
                }}
              >
                Invalid Credentials!
              </h5>
              <h5
                className={prop2 ? "d-block" : "d-none"}
                style={{
                  fontWeight: "bolder",
                  fontFamily: "serif",
                  color: "red",
                }}
              >
                Please verify your Mail id!
              </h5>
              <form
                method="POST"
                action="auth/resend_mail"
                className={prop2 ? "d-block d-inline-block w-auto" : "d-none"}
              >
                <button
                  id="submit"
                  type="submit"
                  className="btn p-0"
                  style={{
                    backgroundColor: "white",
                    color: "blue",
                    position: "relative",
                    top: "-2px",
                  }}
                >
                  <u>Re-send</u>
                </button>
                verification link to mail!
              </form>
            </div>
            <form action="/auth/login" method="POST">
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="email">Mail ID</label>
                <input value={props.method} name="hide" hidden />
                <input
                  type="email"
                  className="inputText form-control"
                  style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                  id="email"
                  name="email"
                  placeholder="Enter your mail id"
                  autocomplete="off"
                  autofocus
                  required
                />
              </div>
              <div className="form-group pt-3 pb-2" id="float-label">
                <label for="password">Password</label>
                <Link to="/ForgotPassword">
                  <label className="float-end" style={{ fontSize: "13px" }}>
                    Forgot Password?
                  </label>
                </Link>
                <div className="input-group pt-0">
                  <input
                    type="password"
                    className="inputText form-control"
                    style={{ backgroundColor: "rgb(58, 214, 171, 0.3)" }}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autocomplete="off"
                    autofocus
                    required
                  />
                  <div className="input-group-append pt-0">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={() => eyeClick()}
                    >
                      <i
                        id="icon"
                        className="fas fa-eye"
                        style={{ paddingTop: "5px", paddingBottom: "5px" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <center>
                {/* <Link to="/FocusRegSuc"> */}
                <button
                  type="submit"
                  className="btn mt-4 mb-2 text-white px-4"
                  style={{ backgroundColor: "#53c29b" }}
                >
                  Login
                </button>
                {/* </Link> */}
              </center>
            </form>

            <hr
              className="my-4"
              style={{
                height: "2px",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), #6dd2ae, rgba(0, 0, 0, 0))",
              }}
            />
            <div className="my-3 px-2 text-center">
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: " #0ACF83" }}>
                <span>Sign Up</span>
              </Link>
            </div>
            {/* <GoogleLogin
              clientId="623615460174-undrui8pi574v6qqtra0vo35vr58olqr.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
            /> */}
          </div>
        </div>
      </div>
      <div className="py-3 text-center text-white">
        <h6 className="m-0 py-5 fw-light">
          Developed with{" "}
          <img
            src={heart}
            alt="love"
            style={{ height: "20px", position: "relative", bottom: "3px" }}
          />{" "}
          by Web Dev team
        </h6>
      </div>
    </div>
  );
}

export default LoginMain;
