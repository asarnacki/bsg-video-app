import { useEffect, useState } from "react";
import { createEndpoint, ENDPOINTS } from "./APIService";

function Player() {
  
  var [response, setResponse] = useState();
  var token = localStorage.getItem('token');

  // var headers = new Headers();
  // headers.append("Content-Type", "application/json");
  var token = localStorage.getItem('token');

  var raw = JSON.stringify({
    MediaId: 15,
    StreamType: "TRIAL"
  });

  var requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
    body: raw,
  };
  useEffect(() => {
    fetch(createEndpoint(ENDPOINTS.player), requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
        // setToken(result.AuthorizationToken.Token);
      })
      .catch((e) => console.log(e));
  }, []);
  return <div>player</div>;
}

export default Player;
