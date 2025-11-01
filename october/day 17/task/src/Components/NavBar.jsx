import { useState } from "react";
import { Box, Button, Paper } from "@mui/material";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const buttons = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          px: 3,
          py: 0.5,
          height: "45px",
          borderRadius: "22.5px",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            onClick={() => setActive(btn.id)}
            sx={{
              height: "100%",
              borderRadius: "22.5px",
              px: 3,
              py: 1,
              fontWeight: 500,
              textTransform: "none",
              color: active === btn.id ? "#111" : "#fff",
              backgroundColor: active === btn.id ? "#fff" : "transparent",
              boxShadow:
                active === btn.id ? "0 2px 6px rgba(0,0,0,0.2)" : "none",
              "&:hover": {
                backgroundColor:
                  active === btn.id ? "#f5f5f5" : "rgba(255,255,255,0.1)",
              },
              transition: "all 0.25s ease",
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Paper>
    </Box>
  );
}
