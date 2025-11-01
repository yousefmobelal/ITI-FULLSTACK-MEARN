import { Box, TextField } from "@mui/material";

function FormField() {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "8px",

          "& label": {
            color: "rgba(255, 255, 255, 0.8)",
          },
          "& label.Mui-focused": {
            color: "black",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },

          input: {
            color: "white",
          },
        }}
      />
    </Box>
  );
}

export default FormField;
