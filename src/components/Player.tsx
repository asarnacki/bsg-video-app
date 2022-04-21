import Box from "@mui/material/Box/Box";
import { useEffect, useState } from "react";
import { ObjectFlags } from "typescript";
import { resourceLimits } from "worker_threads";
import { createEndpoint, ENDPOINTS } from "./APIService";
import IMovieDetails from "./Models/IMovieDetails";
import IMovieList from "./Models/IMovieList";


import { FixedSizeList } from "react-window";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function Player() {
  var [dataArray, setResponse] = useState<IMovieDetails[]>([]);
  var token = localStorage.getItem("token");
  // let dataArray: IMovieDetails
  var raw = JSON.stringify({
    MediaId: 15,
    StreamType: "TRIAL",
  });

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: raw,
  };
  useEffect(() => {
    fetch(createEndpoint(ENDPOINTS.player), requestOptions)
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        //return (dataArray = data);
        setResponse(data);
      })
      .then(() => {
        console.log(dataArray);
        return dataArray;
      });
  }, []);
  console.log(dataArray);

  //#region 

  function renderRow(props: any) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

  //#endregion
  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
    </>
  );
}

export default Player;
