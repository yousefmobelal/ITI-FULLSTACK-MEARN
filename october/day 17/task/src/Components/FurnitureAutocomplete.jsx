import { Autocomplete, TextField, Box } from "@mui/material";

const furnitureOptions = [
  "Sofa",
  "Armchair",
  "Dining Table",
  "Coffee Table",
  "Bookshelf",
  "Wardrobe",
  "Bed Frame",
  "Desk",
  "TV Stand",
  "Nightstand",
  "Recliner",
  "Cabinet",
  "Dresser",
  "Stool",
  "Bench",
  "Vanity Table",
];

function FurnitureAutocomplete() {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Autocomplete
        options={furnitureOptions}
        sx={{
          width: 300,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "8px",

          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.8)",
          },
          "& .MuiInputLabel-root.Mui-focused": {
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

          "& .MuiOutlinedInput-input": {
            color: "white",
          },

          "& .MuiSvgIcon-root": {
            color: "white",
          },

          "& .MuiAutocomplete-listbox": {
            backgroundColor: "rgba(0,0,0,0.85)",
            color: "white",
          },
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search Furniture" variant="outlined" />
        )}
      />
    </Box>
  );
}

export default FurnitureAutocomplete;
