import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

export default function CustomTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "12px",
        p: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        textColor="inherit"
        TabIndicatorProps={{
          style: { background: "white", height: 2 },
        }}
        sx={{
          "& .MuiTab-root": { color: "rgba(255,255,255,0.8)" },
          "& .Mui-selected": { color: "white" },
        }}
      >
        <Tab label="All" />
        <Tab label="Chairs" />
        <Tab label="Tables" />
        <Tab label="Beds" />
      </Tabs>
    </Box>
  );
}
