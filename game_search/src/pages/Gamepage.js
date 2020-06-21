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
