import { Box, Switch, Typography } from "@mui/material";
import CustomSwitch from "./CustomSwitch";
import { useState } from "react";

function LambsSwitch() {
  const [turnSwitch, setTurnSwitch] = useState(false);
  console.log(turnSwitch.target);
  function handleSwitchChange(state) {
    setTurnSwitch(state);
  }

  return (
    <Box
      height="50px"
      width="fit-content"
      borderRadius="25px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={3}
      padding="8px"
      sx={{
        backgroundColor: "rgba(24,20,0,0.45)",
      }}
    >
      <div>
        <Typography variant="subtitle1" color="white">
          Turn Lambs {turnSwitch ? "OFF" : "ON"}
        </Typography>
      </div>
      <CustomSwitch onSwitchChange={handleSwitchChange} />
    </Box>
  );
}

export default LambsSwitch;
