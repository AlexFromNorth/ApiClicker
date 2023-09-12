import React, { useState, FC } from "react";
import useUpdateClicks from "../hooks/useUpdateClicks";
import useUpdateClicksInterval from "../hooks/useUpdateClicksInterval";
import { Box, Button, Icon, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

const Clicker: FC = ({ clicks, setClicks, setClickerEvent, clickerEvent }) => {
  const [displayedClicks, setDisplayedClicks] = useState(0);

  useUpdateClicks(displayedClicks, setDisplayedClicks, clicks, setClickerEvent);

  useUpdateClicksInterval(
    clicks,
    setClicks,
    displayedClicks,
    setDisplayedClicks,
    setClickerEvent
  );

  return (
    <Box sx={{ width: "300px" }}>
      <Button
        color="warning"
        variant="contained"
        className={clickerEvent ? "disabled btn" : "" + "btn"}
        onClick={() => setClicks((count) => count + 1)}
        sx={{
          color: "black",
          width: "100%",
        }}
      >
        {!clickerEvent ? 'Кликнуть' : 'Loading...'}
      </Button>
      <Box
        sx={{
          backgroundColor: "#9bd0f9",
          color: "black",
          borderRadius: "4px",
          margin: "10px 0",
          display: "flex",
          padding: "10px",
        }}
      >
        <InfoOutlinedIcon sx={{ marginRight: "10px" }} />
        <Typography> Кликнули {clicks} раз</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffbf60",
          color: "black",
          borderRadius: "4px",
          margin: "10px 0",
          display: "flex",
          padding: "10px",
        }}
      >
        <WarningAmberOutlinedIcon sx={{ marginRight: "10px" }} />
        <Typography> По версии сервера: {displayedClicks} раз</Typography>
      </Box>
    </Box>
  );
};

export default Clicker;
