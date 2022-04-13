import { FunctionComponent, useEffect, useState } from "react";
import { isConstructorDeclaration } from "typescript";
import { createEndpoint, ENDPOINTS } from "./APIService";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  var [response, setResponse] = useState();
  var token = JSON.stringify(localStorage.getItem('token'));
  // console.log(token)
  var headers = new Headers(); 
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  var raw = {
    MediaListId: 2,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,  
    PageNumber: 1,
    PageSize: 15,
  };

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(raw),
  };
  useEffect(() => {
    fetch(createEndpoint(ENDPOINTS.homeScreen), requestOptions)
      .then((res) => res.json())
      .then((result) => setResponse(result))
      .catch((e) => console.log(e));
  }, []);

  return <div>Home</div>;
};

export default HomeScreen;
