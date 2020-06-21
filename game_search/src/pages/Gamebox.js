// React
import React from "react";

// MUI tings
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

// Pages
import "../App.css";

const useStyles = makeStyles((theme) => ({
  // Area of the card
  cardParent: {
    width: "900px",
    maxWidth: "80%",
    justify: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    borderRadius: "10px",
  },

  text: {
    fontSize: "20px",
    lineHeight: "35px",
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "white",
  },

  genres: {
    fontSize: "20px",
    lineHeight: "35px",
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "rgb(249, 192, 192)",
  },

  image: {
    textAlign: "center",
  },

  gameName: {
    fontSize: "30px",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "white",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card className={classes.cardParent}>
        <Grid container justify="center" alignItems="center">
          {/* Left Side */}
          <Grid item xs={4}>
            {/* Image of Game Cover */}
            <CardMedia className={classes.image}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRawHyDnvhp8RglUQ_cSzzAIJkp2LSvaORKiDgdBa7go-Y4jfPp&usqp=CAU" />
            </CardMedia>
          </Grid>

          {/* Right Side */}
          <Grid item xs={8}>
            <CardContent>
              <Typography component="h4" className={classes.gameName}>
                Game Name
              </Typography>
              <br />
              <Typography className={classes.text}>Publishers:</Typography>
              <Typography className={classes.text}>Released:</Typography>
              <Typography className={classes.text}>Rating:</Typography>
              <br />
              <Typography className={classes.genres}>
                [Insert Genres Here]
              </Typography>
              <br />
              <Typography className={classes.text}>
                [Insert Description here] Embled it to make a type specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with iuhiiuyh iuiuiu iuhiugh
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
