import React, { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddProductForm from "../Components/AddProductForm";
import ProductGrid from "../Components/ProductGrid";

export default function ProductManagementPage() {
  const [view, setView] = useState("form");
  const [products, setProducts] = useState([]);

  const handleToggle = (event, newView) => {
    if (newView !== null) setView(newView);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setView("products"); //
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Product Management
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={view}
        exclusive
        onChange={handleToggle}
        sx={{ mb: 4 }}
      >
        <ToggleButton value="form">Add Product</ToggleButton>
        <ToggleButton value="products">View Products</ToggleButton>
      </ToggleButtonGroup>

      {view === "form" ? (
        <AddProductForm onAdd={handleAddProduct} />
      ) : (
        <ProductGrid products={products} />
      )}
    </Box>
  );
}
