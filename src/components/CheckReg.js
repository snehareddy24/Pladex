import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FocusReg from "./FocusReg";
import LoginMain from "./LoginMain";
// import FocusCompReg from "./FocusCompReg";
import axios from "axios";

function CheckReg() {
  const method = 1;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.post("http://65.1.96.8:8000/authenticate").then((response) => {
      if (response.data.status == "authenticated") {
        setIsLoaded(true);
      }
    });
  }, [isLoaded]);

  return <>{isLoaded ? <FocusReg /> : <LoginMain props={method} />}</>;
}

export default CheckReg;
