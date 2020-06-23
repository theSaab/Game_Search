// React
import React, { Component } from "react";
import { withRouter } from "react-router";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Misc
import clsx from "clsx";

// MUI tings
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// Pages
import "../App.css";

const styles = (theme) => ({
  // Background
  background: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "center",
    height: "100%",
  },

  // Area of the card
  cardParent: {
    width: "800px",
    maxWidth: "80%",
    justify: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.8)",
    borderRadius: "10px",
    paddingTop: "30px",
    position: "absolute",
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
    backgroundColor: "rgba(233, 179, 179, 0.5)",
    color: "white",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
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
                    {this.props.name}
                  </Typography>
                  <br />
                  <Typography className={classes.text}>
                    Developers: {this.props.developers}
                  </Typography>

                  <Typography className={classes.text}>
                    Released: {this.props.releaseDate}
                  </Typography>
                  <Typography className={classes.text}>
                    Rating: {this.props.metaCritic}
                  </Typography>
                  <br />
                  <Typography className={classes.genres}>
                    Genre: {this.props.genre}
                  </Typography>
                  <br />
                </CardContent>
              </Grid>
            </Grid>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.text}>
                  {this.props.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Gamebox));
