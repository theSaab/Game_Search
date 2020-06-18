// React
import React, { Component } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

// Icons


// @import url('https://fonts.googleapis.com/css?family=Comfortaa');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "250px",
    textAlign: "center",
    fontFamily: "Comfortaa",
  },
  paper: {
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    // paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
    margin: "auto",
    maxWidth: "600px",
    height: "auto",
    backgroundColor: "seashell",
  },
  image: {
    paddingTop: "20px",
    paddingRight: "20px",
    width: 128,
    height: 148,
  },
  img: {
    paddingLeft: "60px",
    paddingTop: "10px",
    margin: "10px",
    display: "block",
    maxWidth: "150%",
    maxHeight: "160%",
  },
  text: {
    fontFamily: "Comfortaa",
  },
}));

export default function Gamebox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="pacman"
                src="https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.text}>
            <Grid item sm container direction="column" spacing={1}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.text}
                >
                  Name
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.text}
                >
                  Release Date
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.text}
                >
                  Rating - Game Reviewer
                </Typography>
                <br />
                <Typography variant="body2" color="" className={classes.text}>
                  Info
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.text}
                  variant="body2"
                  href="https://www.rockstargames.com/games/info/V"
                  target="_blank"
                  style={{ cursor: "pointer" }}
                >
                  Something
                </Button>
              </Grid>
            </Grid>
            <Grid item sm>
              <Typography variant="subtitle1" className={classes.text}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum;
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
