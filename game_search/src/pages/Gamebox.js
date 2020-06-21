// React
import React from "react";

// MUI tings
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  cardParent: {
    width: "800px",
    justify: "center",
    alignItems: "center",
  },

  test: {
    justify: "center",
    alignItems: "justify",
    textAlign: "center",
  },

  cover: {
    width: 101,
    background: "red",
    borderColor: "red",
    borderWidth: "20px",
  },
  text: {
    fontSize: "20px",
    lineHeight: "35px",
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
  },
  gameName: {
    fontSize: "30px",
    fontFamily: "Comfortaa",
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "blue",
    borderRadius: "10px",
    color: "blue",
    backgroundColor: "red",
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
            <CardMedia>
              <p style={{ color: "black" }}>IMAGE</p>
            </CardMedia>
          </Grid>

          {/* Right Side */}
          <Grid item xs={8}>
            <CardContent>
              <Typography component="h4" className={classes.gameName}>
                Game Name
              </Typography>
              <br />
              <Typography className={classes.text}>Company</Typography>
              <Typography className={classes.text}>Rating</Typography>
              <br />
              <Typography className={classes.text}>
                mbled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with iuhiiuyh iuiuiu iuhiugh
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
