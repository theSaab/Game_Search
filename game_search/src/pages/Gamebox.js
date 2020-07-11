// React
import React, { Component, useState } from "react";
import { withRouter } from "react-router";

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

// Pages
import "../App.css";
import Navbar from "./../layout/Navbar";

const styles = (theme) => ({
  // Background
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
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
    fontSize: "16px",
    lineHeight: "34px",
    textAlign: "justify",
    fontFamily: "Comfortaa",
    color: "white",
  },

  store: {
    fontFamily: "Comfortaa",
    fontSize: "15px",
  },

  scrollBar: {
    overflowY: "scroll",
    height: "240px",
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

  // Website Button
  webButton: {
    backgroundColor: "rgba(175,238,238,0.1)",
    color: "turquoise",
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

    // const displayReddit = this.props.reddit_url.map((element)) => {
    //   return (
    //     <Grid item xs={6}>
    //     <Link target="_blank" href={this.props.reddit_url}>
    //       <Button className={classes.webButton}>
    //         <Typography className={classes.store}>
    //           {this.props.reddit_name}
    //         </Typography>
    //       </Button>
    //     </Link>
    //   </Grid>
    //   )
    // }
    const displayStores = this.props.stores.map((element) => {
      return (
        <Grid item xs={6}>
          <Link target="_blank" href={element.url}>
            <Button className={classes.webButton}>
              <Typography className={classes.store}>
                {element.store.name}
              </Typography>
            </Button>
          </Link>
        </Grid>
      );
    });

    // console.log(this.props.stores);

    return (
      <Grid
        style={{
          boxShadow: "0 10px 4px 10px #000000",
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.70), rgba(0,0,0,0), rgba(0, 0, 0, 1)), url(${this.props.backgroundImage})`,
        }}
        className={classes.background}
      >
        <Grid>
          <Navbar />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Card className={classes.cardParent}>
            <Grid container justify="center" alignItems="center">
              {/* Left Side */}
              <Grid item xs={5}>
                {/* Image of Game Cover */}
                <CardMedia
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${this.props.backgroundImage})`,
                  }}
                ></CardMedia>
              </Grid>

              {/* Right Side */}
              <Grid item xs={7}>
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
                    spacing={1}
                  >
                    <Grid item xs={6}>
                      <Link target="_blank" href={this.props.reddit_url}>
                        <Button className={classes.webButton}>
                          <Typography className={classes.store}>
                            {this.props.reddit_name}
                          </Typography>
                        </Button>
                      </Link>
                    </Grid>

                    {/* Stores Link */}
                    {displayStores}
                
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
                <ExpansionPanelDetails className={classes.scrollBar}>
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
