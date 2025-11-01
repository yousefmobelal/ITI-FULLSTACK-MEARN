import { Card, CardContent, Typography } from "@mui/material";

export default function CustomCard() {
  return (
    <Card
      sx={{
        marginTop: 2,
        backgroundColor: "rgba(24,20,0,0.45)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "white",
        width: 300,
      }}
    >
      <CardContent>
        <Typography variant="h6">Modern Sofa</Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.8)">
          Elegant comfort for your living room.
        </Typography>
      </CardContent>
    </Card>
  );
}
