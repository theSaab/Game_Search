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
      name: "",
      metaCritic: 0,
      playtime: 0,
      developpers: "",
      releaseDate: "",
      genre: "",
      description: "",
    };
  }

  componentDidMount() {
    const gameName = this.props.location.state.gameNameEnding;
    let fullGameUrl = "https://api.rawg.io/api/games/" + gameName;

    const repoData = axios
      .get(fullGameUrl)
      .then((res) => {
        console.log(res.data);

        const metaCritic = res.data.metacritic;
        const name = res.data.name;
        const playtime = res.data.playtime;
        const developers = res.data.developers;
        const genre = res.data.genres[0].name;
        // const genre2 = res.data.genres[1].genre;
        const releaseDate = res.data.released;
        const description = res.data.description_raw;

        this.setState({
          name: name,
          metaCritic: metaCritic,
          playtime: playtime,
          developpers: developers,
          releaseDate: releaseDate,
          genre: genre,
          description: description,
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
        <Gamebox />
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Gamepage));
