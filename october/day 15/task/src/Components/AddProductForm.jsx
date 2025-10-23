import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    stock: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price)
      return alert("Please fill in required fields");
    onAdd({ ...form, id: Date.now() });
    setForm({
      name: "",
      image: "",
      description: "",
      price: "",
      stock: "",
      featured: false,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="Product Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Image URL"
        name="image"
        value={form.image}
        onChange={handleChange}
      />
      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        multiline
        rows={3}
      />
      <TextField
        label="Price ($)"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
      />
      <TextField
        label="Stock"
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={form.featured}
            onChange={handleChange}
            name="featured"
          />
        }
        label="Mark as Featured Product"
      />

      <Button variant="contained" type="submit">
        Add Product
      </Button>
    </Box>
  );
}
