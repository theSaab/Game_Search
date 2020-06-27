// React
import React, { Component } from "react";
import { withRouter } from "react-router";

// MUI stuff
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";

const styles = (theme) => ({
  // Area containing title and search bar
  titleBar: {},

  // Format for title
  title: {
    fontFamily: "Comfortaa",
    paddingBottom: "0px",
    fontSize: "50px",
    lineHeight: "60px",
  },

  errorMessage: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Comfortaa",
  },

  title: {
    fontFamily: "Comfortaa",
    paddingBottom: "0px",
    fontSize: "50px",
    lineHeight: "60px",
  },

  // Format for search bar
  searchBar: {
    backgroundColor: "rgb(209, 199, 199)",
    borderRadius: "5px",
    border: "2px solid grey",
    width: "500px",
    fontFamily: "Comfortaa",
  },
});

export class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      errors: "",
    };
  }

  // Used to store name into var to search game later
  handleChange = (event) => {
    this.setState({
      gameName: event.target.value,
    });
  };

  // Directs you to gamepage when submitting
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.gameName) {
      this.setState({
        errors: "Please enter a game name",
        gameName: "",
      });
      setTimeout(
        function () {
          this.setState({ errors: "" });
        }.bind(this),
        2500
      );
    } else {
      this.setState({ errors: "" });
      this.props.history.push({
        pathname: "/Gamepage",
        state: {
          gameNameEnding: this.state.gameName,
        },
      });
    }
  };
  render() {
    const { classes } = this.props;
    const dispalyError = this.state.errors ? (
      <Typography className={classes.errorMessage} variant="h5">
        {this.state.errors}
      </Typography>
    ) : null;
    return (
      <Grid className="background">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: "50vh", maxWidth: "100%" }}
        >
          {/* Title and Search Area */}
          <Grid>
            {/* Title Area */}
            <Grid item sm={9} align="left">
              <Typography variant="h2" className={classes.title}>
                <VideogameAssetOutlinedIcon
                  style={{ color: "pink", fontSize: "80px" }}
                />
                <Typography
                  className={classes.title}
                  style={{ color: "turquoise" }}
                >
                  Game
                </Typography>
                <Typography
                  className={classes.title}
                  style={{ color: "orange" }}
                >
                  Search
                </Typography>
                <SearchIcon style={{ color: "red", fontSize: "80px" }} />
              </Typography>
            </Grid>
            {/* Search Bar Area */}
            <Grid item sm={3}>
              <form onSubmit={this.handleSubmit}>
                {/* Search Bar */}
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
            {dispalyError}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(AutoCompleteText));
