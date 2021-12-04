import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Foot2 from "./foot2";
import Navnew from "./Navnew";
import UpcomingEventsWeb from "./UpcomingEventsWeb";
import EventTemp2 from "./EventTemp2";
import HomeSlider from "./HomeSlider";
import OurMission from "./OurMission";
import CollWeb from "./CollWeb";
import UpcomEve from "./UpcomEve";
import Count from "./Count";
import CollabMob from "./CollabMob";
import FeatMob from "./FeatMob";

function Home() {
  // const [prop1, setprop1] = useState(false);

  const currentUrl = window.location.href;
  var params = new URL(currentUrl).searchParams.get("state");

  useEffect(() => {
    if (
      params ==
      "3dbb4af3c5c4487908ea5f23315a2b578c09c5b20be208917b17e08a52c51e3f"
    ) {
      alert("Logged out successfully!");
    } else if (
      params ==
      "b54dc0f6b309929dd43ef88aa54958f854af3aa23e1744da5ded5887d79a8d0e"
    ) {
      alert("Unable to logout!");
    }
  }, []);

  const [loginauth, setloginauth] = useState(false);

  const loginhandler = () => {
    setloginauth(true);
  };

  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      <Navnew logincheck={loginauth} loginhandler={loginhandler} />
      <HomeSlider />
      <OurMission />
      {display ? <FeatMob /> : <UpcomEve />}
      {display ? <EventTemp2 /> : <UpcomingEventsWeb />}
      {display ? <CollabMob /> : <CollWeb />}
      <Count />
      <Foot2 />
    </>
  );
}

export default Home;
