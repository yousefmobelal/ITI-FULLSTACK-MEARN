import { Slider, Box, Typography } from "@mui/material";

export default function CustomSlider() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
      sx={{
        width: 300,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "12px",
        p: 3,
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2 }}
      >
        Adjust Lambs Intensity
      </Typography>

      <Slider
        defaultValue={30}
        sx={{
          color: "white",
          height: 6,
          "& .MuiSlider-track": {
            border: "none",
            backgroundColor: "white",
          },
          "& .MuiSlider-rail": {
            opacity: 0.3,
            backgroundColor: "white",
          },
          "& .MuiSlider-thumb": {
            height: 18,
            width: 18,
            backgroundColor: "black",
            border: "2px solid white",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.16)",
            },
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            borderRadius: "8px",
          },
        }}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
