import { FunctionComponent, useEffect, useState } from "react";
import { isConstructorDeclaration } from "typescript";
import { createEndpoint, ENDPOINTS } from "./APIService";

interface HomeScreenProps {
}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  var [response, setResponse] = useState();
  var headers = new Headers();
  var token = localStorage.getItem('token');
  
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
    headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
    body: JSON.stringify(raw),
  };
  useEffect(() => {
    fetch(createEndpoint(ENDPOINTS.homeScreen), requestOptions)
      .then((res) => res.json()) 
      .then((result) => {setResponse(result)
        console.log(response)})
      .catch((e) => console.log(e));
  }, []);

  return <div>Home</div>;
};

export default HomeScreen;
