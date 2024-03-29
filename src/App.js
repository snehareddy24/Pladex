import React, { useState } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import OurFeatures from "./components/OurFeatures";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import EventReg from "./components/EventReg";
import Details from "./components/Details";
import PodiumTalks from "./components/PodimTalks";
import Focus from "./components/Focus";
import Ep10 from "./components/Ep10";
import Ep9 from "./components/Ep9";
import Ep8 from "./components/Ep8";
import Ep7 from "./components/Ep7";
import Ep6 from "./components/Ep6";
import Ep5 from "./components/Ep5";
import Ep4 from "./components/Ep4";
import Ep3 from "./components/Ep3";
import Ep2 from "./components/Ep2";
import Ep1 from "./components/Ep1";
// import FocusReg from "./components/FocusReg";
// import FocusCompReg from "./components/FocusCompReg";
import FocusRegSuc from "./components/FocusRegSuc";
import ComingSoon from "./components/ComingSoon";
import LoginV3 from "./components/LoginV3";
import SignupV3 from "./components/SignupV3";
import CheckReg from "./components/CheckReg";
// import CheckCompReg from "./components/CheckCompReg";
import EmailValidation from "./components/EmailValidation";
import ForgotPassword from "./components/ForgotPassword";
import ResetValidation from "./components/ResetValidation";
import ResetPassword from "./components/ResetPassword";
import VerifiedMail from "./components/VerifiedMail";
import ResetSuccess from "./components/ResetSuccess";
import ErrorRedirect from "./components/ErrorRedirect";
// import CompRegSuccess from "./components/CompRegSuccess";
import AllPartners from "./components/AllPartners";
// import Btechsubject from "./components/dlibrary/btechsubject";
// import Upload from "./components/dlibrary/upload";
import Team from "./components/OurTeam";
import HelpAndSupport from "./components/helpnsupport";

function App() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <Router>
      <div className="App p-0">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Features">
              <OurFeatures />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/JoinUs">
              <JoinUs />
            </Route>
            <Route path="/EventLibrary">
              <EventReg />
            </Route>
            <Route path="/PodiumTalks">
              <PodiumTalks />
            </Route>
            <Route path="/Focus">
              <Focus />
            </Route>
            <Route path="/Team">
              <Team />
            </Route>
            <Route path="/HelpAndSupport">
              <HelpAndSupport />
            </Route>
            <Route path="/ep10">
              <Ep10 />
            </Route>
            <Route path="/ep9">
              <Ep9 />
            </Route>
            <Route path="/ep8">
              <Ep8 />
            </Route>
            <Route path="/ep7">
              <Ep7 />
            </Route>
            <Route path="/ep6">
              <Ep6 />
            </Route>
            <Route path="/ep5">
              <Ep5 />
            </Route>
            <Route path="/ep4">
              <Ep4 />
            </Route>
            <Route path="/ep3">
              <Ep3 />
            </Route>
            <Route path="/ep2">
              <Ep2 />
            </Route>
            <Route path="/ep1">
              <Ep1 />
            </Route>
            {/* <Route path="/EventRegister">
              <FocusReg />
            </Route> */}
            {/* <Route path="/CompetitionReg">
              <FocusCompReg />
            </Route> */}
            <Route path="/RegSuccess">
              <FocusRegSuc />
            </Route>
            {/* <Route path="/CompRegSuccess">
              <CompRegSuccess />
            </Route> */}
            <Route path="/ComingSoon">
              <ComingSoon />
            </Route>
            <Route path="/CheckRegister">
              <CheckReg />
            </Route>
            {/* <Route path="/CheckReg">
              <CheckCompReg />
            </Route> */}
            <Route path="/EmailValidation">
              <EmailValidation />
            </Route>
            <Route path="/ForgotPassword">
              <ForgotPassword />
            </Route>
            <Route path="/ResetValidation">
              <ResetValidation />
            </Route>
            <Route path="/ResetPassword">
              <ResetPassword />
            </Route>
            <Route path="/VerifiedMail">
              <VerifiedMail />
            </Route>
            <Route path="/ResetSuccess">
              <ResetSuccess />
            </Route>
            <Route path="/ErrorRedirect">
              <ErrorRedirect />
            </Route>
            <Route path="/AllPartners">
              <AllPartners />
            </Route>
            {/* <Route path="/dlibrary">
              <Btechsubject />
            </Route>
            <Route path="/uploadbook">
              <Upload />
            </Route> */}
            {/* <Route path="/DLibrary">
              <Btechsubject />
            </Route> */}
            <Route path="/login">
              <LoginV3 />
            </Route>
            <Route path="/signup">
              <SignupV3 />
            </Route>
            <Route path="/detail">
              <Details />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
