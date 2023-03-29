import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Image from "../../images/icon.png";

const products = ["Profile", "Account", "Lookout"];

export default function Services() {
  return (
    <Box sx={{ flexGrow: 1, margin: 2, padding: 8 }}>
      <h1> Our Products </h1>
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item xs={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={Image}
                title=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SOme Text
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <h1> New Launch </h1>
      <Grid container spacing={5}> 
      <Grid item xs={4}>
        <Card>
          <CardMedia sx={{ height: 140 }} image={Image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pass Pal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SOme Text
            </Typography>
          </CardContent>
        </Card>
        </Grid>

      </Grid>
    </Box>
  );
}
