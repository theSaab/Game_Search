// React
import React, { Component, useState } from "react";
import { withRouter } from "react-router";

// Company Logos
import playstation from "../images/playstation.png";
import xbox from "../images/xbox.png";
import steam from "../images/steam.png";

// MUI tings
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Link,
  Button,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RedditIcon from "@material-ui/icons/Reddit";

// Pages
import "../App.css";

const styles = (theme) => ({
  // Background
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "center",
    height: "100%",
    margin: "0",
    width: "100vw",
  },

  // Area of the card
  cardParent: {
    width: "900px",
    maxWidth: "80%",
    background: "rgba(0,0,0,0.8)",
    borderRadius: "10px",
    position: "absolute",
    maxHeight: "800px",
  },

  // Area of text
  text: {
    fontSize: "18px",
    lineHeight: "35px",
    padding: "0px  10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "white",
  },

  description: {
    padding: "0 20px 40px 0",
    fontSize: "22px",
    lineHeight: "34px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "white",
    height: "500px",
    overflow: "scroll",
  },

  info: {
    fontSize: "24px",
    lineHeight: "35px",
    margin: "0 10px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "turquoise",
    marginTop: "15px",
  },

  // Reddit icon
  reddit: {
    margin: "0 2px",
    textAlign: "justify",
    color: "white",
  },

  //Reddit Icon background
  redditBack: {
    lineHeight: "30px",
    width: "65px",
    margin: "0 10px",
    textAlign: "justify",
    backgroundColor: "rgb(255, 67, 1)",
    borderRadius: "45px",
  },

  psLogo: {
    width: "80px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "red",
  },

  xbLogo: {
    width: "75px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "red",
  },

  // Website Button
  webButton: {
    backgroundColor: "rgba(0,0,0,0.1)",
    color: "turquoise",
    fontSize: "20px",
    textTransform: "none",
    fontFamily: "Comfortaa",
  },

  // Genres Text
  genres: {
    fontSize: "18px",
    lineHeight: "55px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "Turquoise",
    margin: "0 0 0 10px",
  },

  image: {
    textAlign: "center",
    height: "400px",
    width: "auto",
  },

  icon: {
    backgroundColor: "red",
    color: "blue",
  },

  // Game Name Area
  gameName: {
    fontSize: "32px",
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    color: "white",
    paddingBottom: "20px",
  },

  // Description Area
  expansionPanel: {
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export class Gamebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      setExpanded: false,
    };
  }

  render() {
    const backImage = this.props.backgroundImage;
    const { classes } = this.props;

    const handleExpandClick = () => {
      this.state.setExpanded(!this.state.expanded);
    };

    return (
      <Grid
        style={{
          boxShadow: "0 10px 4px 10px #000000",
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.70), rgba(0,0,0,0), rgba(0, 0, 0, 1)), url(${this.props.backgroundImage})`,
        }}
        className={classes.background}
      >
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
              <Grid item xs={6}>
                {/* Image of Game Cover */}
                <CardMedia
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${this.props.backgroundImage})`,
                  }}
                ></CardMedia>
              </Grid>

              {/* Right Side */}
              <Grid item xs={6}>
                <CardContent>
                  {/* Game Name */}
                  <Typography component="h4" className={classes.gameName}>
                    {this.props.name}
                  </Typography>

                  {/* INFO */}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {/* titles */}
                    <Grid item xs={6}>
                      {/* Developers */}
                      <Typography className={classes.info}>
                        Developers:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {/* Release Date */}
                      <Typography className={classes.info}>
                        Released:
                      </Typography>
                    </Grid>

                    {/* Info */}
                    <Grid item xs={6}>
                      <Typography className={classes.text}>
                        {this.props.developers}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.text}>
                        {this.props.releaseDate}
                      </Typography>
                    </Grid>

                    {/* Titles */}
                    <Grid item xs={6}>
                      {/* Rating */}
                      <Typography className={classes.info}>Rating: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.info}>
                        Playtime:{" "}
                      </Typography>
                    </Grid>

                    {/* Info */}
                    <Grid item xs={6}>
                      <Typography className={classes.text}>
                        {this.props.metaCritic}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.text}>
                        ~{this.props.playtime} hours
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Other Info */}
                  <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {/* Genres */}
                    <Grid item xs={6}>
                      <Typography className={classes.genres}>
                        {this.props.genre}, {this.props.genre2}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.genres}>
                        {this.props.esrb_rating}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* Random Links */}
                  {/* Reddit Link */}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={3}>
                      <Typography className={classes.redditBack}>
                        <Link target="_blank" href={this.props.reddit_url}>
                          <RedditIcon
                            className={classes.reddit}
                            style={{ color: "white", fontSize: "60px" }}
                          />{" "}
                        </Link>
                      </Typography>
                    </Grid>
                    {/* Stores Link */}
                    <Grid item xs={3}>
                      <Link href={this.props.storePS} target="_blank">
                        <CardMedia>
                          <img
                            className={classes.psLogo}
                            src={playstation}
                            alt="logo"
                          />
                        </CardMedia>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link href={this.props.storeXB} target="_blank">
                        <CardMedia>
                          <img
                            className={classes.xbLogo}
                            src={xbox}
                            alt="logo"
                          />
                        </CardMedia>
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link href={this.props.storeXB} target="_blank">
                        <CardMedia>
                          <img
                            className={classes.xbLogo}
                            src={steam}
                            alt="logo"
                          />
                        </CardMedia>
                      </Link>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>

            {/* Description */}
            <CardActions>
              <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon className={classes.text} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                ></ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.description}>
                    {this.props.description}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Gamebox));
