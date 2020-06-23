// React
import React, { useEffect, useState } from "react";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Misc
import clsx from 'clsx';


// MUI tings
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  CardActions,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

// Pages
import "../App.css";

const useStyles = makeStyles((theme) => ({

  // Background 
  background: {
    backgroundImage: "url(" + "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'center',
    height: '100%',
  },

  // Area of the card
  cardParent: {
    width: "800px",
    maxWidth: "80%",
    justify: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    borderRadius: "10px",
    paddingTop: '30px',
    position: 'absolute',
  },
  // Area of text
  text: {
    fontSize: "20px",
    lineHeight: "35px",
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "white",
  },

  // Genres Text
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

  // Game Name Area
  gameName: {
    fontSize: "30px",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "rgb(255, 82, 82)",
  },

  // Description Area
  expand: {
    backgroundColor: 'rgba(233, 179, 179, 0.5)',
    color: 'white',
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid className={ classes.background }>
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
             
            </CardContent>
          </Grid>
        </Grid>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography className={classes.text}>
                [Insert Description here] Rockstar Games went bigger, since
                their previous installment of the series. You get the
                complicated and realistic world-building from Liberty City of
                GTA4 in the setting of lively and diverse Los Santos, from an
                old fan favorite GTA San Andreas. 561 different vehicles
                (including every transport you can operate) and the amount is
                rising with every update. <br />
                Simultaneous storytelling from three unique perspectives:
                <br />
                Follow Michael, ex-criminal living his life of leisure away
                from the past, Franklin, a kid that seeks the better future, and
                Trevor, the exact past Michael is trying to run away from.
                <br />
                GTA Online will provide a lot of additional challenge even for
                the experienced players, coming fresh from the story mode. Now
                you will have other players around that can help you just as
                likely as ruin your mission. Every GTA mechanic up to date can
                be experienced by players through the unique customizable
                character, and community content paired with the leveling system
                tends to keep everyone busy and engaged.
              </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
    </Grid>
  );
}
