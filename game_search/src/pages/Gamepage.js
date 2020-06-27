import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

// Pages
import Gamebox from "./Gamebox";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({});
export class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      metaCritic: 0,
      playtime: 0,
      developers: "N/A",
      releaseDate: "N/A",
      genre: "",
      genre: "",
      description: "No description you bum",
      backgroundImage: "",
      reddit_url: "https://www.reddit.com/",
      website: "",
      storePS: "",
      storeXB: "",
      storePC: "",
      esrb_rating: "",
      redirect: false,
    };
  }

  componentDidMount() {
    const gameName = this.props.location.state.gameNameEnding;
    let fullGameUrl = "https://api.rawg.io/api/games/" + gameName;

    axios
      .get(fullGameUrl)
      .then((res) => {
        const metaCritic = res.data.metacritic;
        const name = res.data.name;
        const playtime = res.data.playtime;
        const developers = res.data.developers[0].name;
        const genre = res.data.genres[0].name;
        const genre2 = res.data.genres[1].name;
        const storeXB = res.data.stores[0].url;
        const storePS = res.data.stores[1].url;
        const storePC = res.data.stores[2].url;
        const releaseDate = res.data.released;
        const description = res.data.description_raw;
        const backgroundImage = res.data.background_image;
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
          storeXB: storeXB,
          storePS: storePS,
          storePC: storePC,
          esrb_rating: esrb_rating,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
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
          website={this.state.website}
          storeXB={this.state.storeXB}
          storePS={this.state.storePS}
          storePC={this.state.storePC}
          esrb_rating={this.state.esrb_rating}
        />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Gamepage));
