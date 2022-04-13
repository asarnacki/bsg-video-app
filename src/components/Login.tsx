import { FunctionComponent, useContext, useEffect, useState } from "react";
import { createEndpoint, ENDPOINTS } from "./APIService";

interface LoginProps {}

interface IToken {
  AuthorizationToken: {
    Token: string;
    TokenExpires: string;
  };
}
const Login: FunctionComponent<LoginProps> = () => {
  var [response, setResponse] = useState();
  // var [token, setToken] = useState<IToken[]>([]);
  var [token, setToken] = useState<string>("");
  localStorage.setItem("token", token);
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
    fetch(createEndpoint(ENDPOINTS.login), requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result); 
        setToken(result.AuthorizationToken!.Token)
      })
      .catch((e) => console.log(e));
  }, []);
  return <div>Login</div>;
};

export default Login;
