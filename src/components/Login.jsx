import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEndpoint, ENDPOINTS } from "./APIService";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  var [response, setResponse] = useState();
  var [token, setToken] = useState();
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  localStorage.setItem("token", token);

  var raw = JSON.stringify({
    Username: "test@bsgroup.eu",
    Password: "Test12!@",
    Device: {
      PlatformCode: "WEB",
      Name: "7a6a86e5-356f-4795-8998-305e1b205531",
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
        setToken(result.AuthorizationToken.Token);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/splash");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
