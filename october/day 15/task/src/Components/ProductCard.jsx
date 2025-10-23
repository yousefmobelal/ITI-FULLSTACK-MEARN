import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: 3,
        borderRadius: 2,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 180,
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1} noWrap>
          {product.description}
        </Typography>

        <Typography color="primary" fontWeight="bold">
          ${product.price}
        </Typography>

        <Typography variant="body2">In stock: {product.stock}</Typography>

        {product.featured && (
          <Typography
            variant="caption"
            color="success.main"
            fontWeight="bold"
            display="block"
          >
            Featured Product
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
