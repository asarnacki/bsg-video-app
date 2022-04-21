import Button from "@mui/material/Button/Button";
import { FunctionComponent, useEffect, useState } from "react";
import { isConstructorDeclaration } from "typescript";
import { createEndpoint, ENDPOINTS } from "./APIService";
import { useNavigate } from "react-router-dom";
import IMovieList from "./Models/IMovieList";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FixedSizeList } from "react-window";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import IMovieDetails from "./Models/IMovieDetails";
import { VapeFree } from "@mui/icons-material";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  var [response, setResponse] = useState<IMovieList[]>([]);
  var [loading, setLoading] = useState(false);
  var token = localStorage.getItem("token");
  var navigate = useNavigate();
  var dataArray: IMovieList[];
  var jsonQuery = require('json-query')
  var dat;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(raw),
  };
  useEffect(() => {
    setLoading(true);
    fetch(createEndpoint(ENDPOINTS.homeScreen), requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(response);

  var entieties = Object.entries(response).filter(
    (entieties) => entieties
  );
    var data = jsonQuery('Entities[**][*Title]', {response:response}).value
    // console.log(data);

    console.log(jsonQuery('Entities'))

  return (
    <>
      <List>
        <ListItemButton onClick={() => navigate("/pages")}>
          <ListItemText />
        </ListItemButton>
      </List>
    </>
  );
};
export default HomeScreen;

// {Object.keys(response).map((key, value) => (
//   <ListItemButton key={key} onClick={() => navigate("/pages")}>
//     <ListItemText primary={`Value ${value}`} />
//   </ListItemButton>
// ))}
