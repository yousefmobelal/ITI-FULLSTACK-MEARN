import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          No Products Available
        </Typography>
        <Typography variant="body1">Start Adding Now</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "flex-start",
      }}
    >
      {products.map((p, i) => (
        <Box key={i} sx={{ width: 280, flexShrink: 0 }}>
          <ProductCard product={p} />
        </Box>
      ))}
    </Box>
  );
}
