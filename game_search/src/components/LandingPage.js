// React
import React, { Component } from "react";
import { withRouter } from "react-router";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";

// Font

const styles = (theme) => ({
  title: {
    color: "rgb(209, 199, 199)",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Comfortaa",
    height: "300px",
  },
  background: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    backgroundColor: "black",
  },
  searchBar: {
    backgroundColor: "rgb(209, 199, 199)",
    borderRadius: "5px",
    textAlign: "center",
    border: "2px solid white",
    width: "500px",
    fontFamily: "Comfortaa",
  },
});

export class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.items = ["David", "Davien", "Dada", "Sara", "Jane"];
    this.state = {
      suggestions: [],
      gameName: "",
    };
  }

  // Used to store name into var to search game later
  handleChange = (event) => {
    this.setState({
      gameName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/Gamepage",
      state: {
        gameLink: this.state.gameName,
      },
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.background}
        className="backgroundImage background"
      >
        <Grid
          container // outter grid to space in middle
          direction="column"
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh", maxWidth: "100%" }}
        >
          <Grid item sm={9} align="center">
            <Typography variant="h2" className={classes.title}>
              <VideogameAssetOutlinedIcon
                style={{ color: "pink", fontSize: "80px" }}
              />
              <div style={{ color: "turquoise" }}>Game</div>
              <div style={{ color: "orange" }}>Search</div>
              <SearchIcon style={{ color: "red", fontSize: "80px" }} />
            </Typography>
          </Grid>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="gameSearchBar"
              placeholder="What game are you looking for?"
              variant="outlined"
              type="link"
              fullWidth
              className={classes.searchBar}
              onChange={this.handleChange}
              InputProps={{
                style: { fontSize: 20, fontFamily: "Comfortaa" },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ height: "20px", color: "#a9a" }} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AutoCompleteText));
