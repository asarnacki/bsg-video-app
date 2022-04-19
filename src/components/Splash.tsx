import Button from "@mui/material/Button/";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { createEndpoint, ENDPOINTS } from "./APIService";
import { useNavigate } from "react-router-dom";

interface SplashProps {
  Token?: string;
}
interface IToken {
  AuthorizationToken: {
    Token: string;
    TokenExpires: string;
  };
}
const Splash: FunctionComponent<SplashProps> = () => {
  var [response, setResponse] = useState();

  var navigate = useNavigate();

  let guid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Device: {
      PlatformCode: "WEB",
      Name: guid,
    },
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
  };

  useEffect(() => {
    fetch(createEndpoint(ENDPOINTS.splash), requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
      })
      .catch((e) => console.log(e));
  }, []);
  
  console.log(response);
  return (
    <Button
      onClick={() => {
        navigate("/homescreen")
      }}
    >
      Homescreen
    </Button>
  );
};
export default Splash;
