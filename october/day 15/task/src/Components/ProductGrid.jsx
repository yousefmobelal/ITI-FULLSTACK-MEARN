import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
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
