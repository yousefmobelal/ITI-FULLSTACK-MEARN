import * as React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

export default function ProductFormPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const products = [
    {
      name: "Wireless Headphones",
      price: "$99",
      img: "https://source.unsplash.com/400x300/?headphones",
      desc: "Noise-cancelling over-ear headphones with clear sound.",
    },
    {
      name: "Smartwatch",
      price: "$149",
      img: "https://source.unsplash.com/400x300/?smartwatch",
      desc: "Track your fitness and notifications in style.",
    },
    {
      name: "Bluetooth Speaker",
      price: "$79",
      img: "https://source.unsplash.com/400x300/?speaker",
      desc: "Compact speaker with rich bass and waterproof design.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {/* --- Left: Form --- */}
        <Grid item xs={12} md={5}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Order Form
            </Typography>

            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Phone (Egypt)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ pattern: "^01[0-9]{9}$" }}
              helperText="Format: 01XXXXXXXXX"
            />

            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Submit Order
            </Button>
          </Box>
        </Grid>

        {/* --- Right: Responsive Product Cards --- */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {products.map((product, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography color="text.secondary" mb={1}>
                      {product.desc}
                    </Typography>
                    <Typography color="primary" fontWeight="bold">
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
