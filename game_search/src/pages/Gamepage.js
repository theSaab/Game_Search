import React, { Component } from "react";
import { withRouter } from "react-router";

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

    const repoData = Promise.all([axios.get(fullGameUrl)]);

    repoData.then((res) => {
      const metaCritic = res[5].data;
      const name = res[2].data;
      const playtime = res[19].data;
      const developers = res[47].data;
      const genre = res[48].data;
      const releaseDate = res[7].data;
      const description = res[4].data;
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
