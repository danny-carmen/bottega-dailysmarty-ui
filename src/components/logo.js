import React, { Component } from "react";

import { Link } from "react-router-dom";

class Logo extends Component {
  componentDidMount() {
    console.log("The logo mounted");
  }
  componentDidUpdate() {
    console.log("The child logo component updated");
  }
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };

    return (
      <div className="logo-main">
        <Link to="/">
          <img
            style={size}
            alt="daily smarty logo"
            src="/assets/ds_circle_logo.png"
          />
        </Link>
      </div>
    );
  }
}

export default Logo;
