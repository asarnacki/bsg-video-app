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

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  var [response, setResponse] = useState<IMovieList[]>([]);
  var token = localStorage.getItem("token");
  var navigate = useNavigate();

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
    fetch(createEndpoint(ENDPOINTS.homeScreen), requestOptions)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(response);
  return (
    <>
      <Grid container spacing={2} columns={15}>
        <Grid item xs={8}>
          {response.map((CacheDataValidTo) => (
            <Item>{CacheDataValidTo}</Item>
          ))}
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          navigate("/player");
        }}
      >
        Player
      </Button>
    </>
  );
};

export default HomeScreen;
