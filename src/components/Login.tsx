import { FunctionComponent, useEffect } from "react";

interface LoginProps {}
const Login: FunctionComponent<LoginProps> = () => {
  const API = `https://thebetter.bsgroup.eu/Authorization/SignIn`;
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Device: {
      PlatformCode: "WEB",
      Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    },
  });
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
  };
  useEffect(() => {
    fetch(API, requestOptions)
      .then((res) => res.text())
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  }, []);

  return <div></div>;
};

export default Login;
