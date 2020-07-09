import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

// Pages
import Gamebox from "./Gamebox";
import "../App.css";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

// Images

const styles = (theme) => ({});

export class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      metaCritic: 0,
      playtime: 0,
      developers: "N/A",
      releaseDate: "N/A",
      genre: "",
      genre: "",
      description: "No description you bum",
      backgroundImage: "",
      reddit_name: "",
      reddit_url: "https://www.reddit.com/",
      website: "",
      store1: "",
      store1Link: "",
      store2: "",
      store2Link: "",
      store3: "",
      store3Link: "",
      esrb_rating: "",
      redirect: false,
      displayWrongName: false,
      isLoaded: false,
      not_found: true,
    };
  }

  componentDidMount() {
    const gameName = this.props.location.state.gameNameEnding;
    this.axiosCall(gameName);
  }

  onRerender = () => {
    this.axiosCall(this.state.name);
  };

  axiosCall = (gameName) => {
    let fullGameUrl = "https://api.rawg.io/api/games/" + gameName;
    axios
      .get(fullGameUrl)
      .then((res) => {
        if (res.data.redirect) {
          const redirectName = res.data.slug;
          this.setState({
            isLoaded: true,
            redirect: true,
            name: redirectName,
            not_found: false,
          });
        } else if (!res.data.detail) {
          const name = res.data.name;
          const metaCritic = res.data.metacritic;
          const playtime = res.data.playtime;
          const developers = res.data.developers[0].name;
          const genre = res.data.genres[0].name;
          const genre2 = res.data.genres[1].name;
          const store1 = res.data.stores[0].store.name;
          const store1Link = res.data.stores[0].url;
          const store2 = res.data.stores[1].store.name;
          const store2Link = res.data.stores[1].url;
          const store3 = res.data.stores[2].store.name;
          const store3Link = res.data.stores[2].url;
          const releaseDate = res.data.released;
          const description = res.data.description_raw;
          const backgroundImage = res.data.background_image;
          const reddit_name = res.data.reddit_name;
          const reddit_url = res.data.reddit_url;
          const website = res.data.website;
          const esrb_rating = res.data.esrb_rating.name;

          this.setState({
            name: name,
            metaCritic: metaCritic,
            playtime: playtime,
            developers: developers,
            releaseDate: releaseDate,
            genre: genre,
            genre2: genre2,
            description: description,
            backgroundImage: backgroundImage,
            reddit_url: reddit_url,
            website: website,
            store1: store1,
            store1Link: store1Link,
            store2: store2,
            store2Link: store2Link,
            store3: store3,
            store3Link: store3Link,
            esrb_rating: esrb_rating,
            reddit_name: reddit_name,
            isLoaded: true,
            redirect: false,
            not_found: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          displayWrongName: true,
        });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        style={{
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        {this.state.redirect ? (
          <Grid className="redirect">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              // justify="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item s={3} className="redirectButton">
                <Button
                  style={{
                    fontSize: "18px",
                    fontFamily: "Comfortaa",
                    textTransform: "none",
                  }}
                  onClick={this.onRerender}
                >
                  Did you mean {this.state.name}? (click me!!)
                </Button>
              </Grid>
              <br />
              <Grid item s={3} className="redirectButton">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      fontSize: "18px",
                      fontFamily: "Comfortaa",
                      textTransform: "none",
                    }}
                  >
                    No I did not. bruh
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        ) : this.state.isLoaded ? (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          >
            <Gamebox
              name={this.state.name}
              metaCritic={this.state.metaCritic}
              playtime={this.state.playtime}
              developers={this.state.developers}
              releaseDate={this.state.releaseDate}
              genre={this.state.genre}
              genre2={this.state.genre2}
              description={this.state.description}
              backgroundImage={this.state.backgroundImage}
              reddit_url={this.state.reddit_url}
              reddit_name={this.state.reddit_name}
              website={this.state.website}
              store1={this.state.store1}
              store1Link={this.state.store1Link}
              store2={this.state.store2}
              store2Link={this.state.store2Link}
              store3={this.state.store3}
              store3Link={this.state.store3Link}
              esrb_rating={this.state.esrb_rating}
            />
          </div>
        ) : this.state.not_found ? (
          <div className="scroll">
            <Grid className="DNE">
              <Grid
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: "50vh" }}
              >
                <Grid
                  item
                  s={12}
                  style={{ paddingTop: "20vh" }}
                >
                  <LinearProgress />
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div className="scroll">
            <Grid className="DNE">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "50vh" }}
              >
                <Grid item s={3} className="dneButton">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "ivory",
                        fontSize: "18px",
                        fontFamily: "Comfortaa",
                        textTransform: "none",
                      }}
                    >
                      Unable to Find Game
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Gamepage));
