import React, { Component } from "react";
import "../App.css";
import { Link, withRouter } from "react-router-dom";

// MUI tings
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Typography, Card } from "@material-ui/core";

//MUI iCONS
import SearchIcon from "@material-ui/icons/Search";
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";

// const styles = (theme) => ({
//   logoArea: {},

//   title: {
//     fontFamily: "Comfortaa",
//     paddingBottom: "0px",
//     fontSize: ,
//     lineHeight: "20000000px",
//   },
// });
export class Navbar extends Component {
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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!this.state.gameName) {
  //     this.setState({
  //       errors: "Please enter a game name",
  //       gameName: "",
  //     });
  //     setTimeout(
  //       function () {
  //         this.setState({ errors: "" });
  //       }.bind(this),
  //       2500
  //     );
  //   } else {
  //     this.setState({ errors: "" });
  //     this.props.history.push({
  //       pathname: `/Gamepage/game/${this.state.gameName}`,
  //       state: {
  //         gameNameEnding: this.state.gameName,
  //       },
  //     });
  //   }
  // };

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
      const gameName = this.state.gameName.replace(" ", "-");
     
      this.props.history.push({
        pathname: `/Gamepage/game/${gameName}`,
        state: {
          gameNameEnding: gameName,
        },
      });
    }
  };


  render() {
    return (
      <Grid
        container
        direction="row"
        m={12}
        justify="center"
        style={{ paddingTop: "15px" }}
      >
        {/* Logo */}
        <Grid container direction="row" spacing={0} style={{ width: "450px" }}>
          <Grid xs={1.5} align="center">
            <Link to="/">
              <VideogameAssetOutlinedIcon
                style={{ color: "pink", fontSize: "60px" }}
              />
            </Link>
          </Grid>
          <Grid xs={3}>
            <Typography
              align="center"
              style={{
                fontFamily: "Comfortaa",
                fontSize: "33px",
                lineHeight: "70px",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "turquoise",
                  textTransform: "none",
                  textDecoration: "none",
                }}
              >
                Game
              </Link>
            </Typography>
          </Grid>
          <Grid xs={3.5}>
            <Typography
              style={{
                fontFamily: "Comfortaa",
                color: "orange",
                fontSize: "33px",
                lineHeight: "70px",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "orange",
                  textTransform: "none",
                  textDecoration: "none",
                }}
              >
                Search
              </Link>
            </Typography>
          </Grid>
          <Link to="/">
            <Grid xs={2} align="right">
              <SearchIcon style={{ color: "red", fontSize: "60px" }} />
            </Grid>
          </Link>
        </Grid>
        <Grid align="right" style={{ width: "450px" }}>
          <Grid item sm={12}>
            <form onSubmit={this.handleSubmit}>
              {/* Search Bar */}
              <TextField
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                id="gameSearchBar"
                placeholder="What game are you looking for?"
                variant="outlined"
                type="link"
                fullWidth
                // className='navBarSearchBar'
                onChange={this.handleChange}
                InputProps={{
                  style: {
                    fontSize: 20,
                    fontFamily: "Comfortaa",
                    color: "white",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        style={{
                          height: "20px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid>{" "}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Navbar);
