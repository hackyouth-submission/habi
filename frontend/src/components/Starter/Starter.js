import React from "react";

import "./Starter.css";
import KnobContainer from "./KnobContainer/KnobContainer";
import { Link } from "react-router-dom";

class Starter extends React.Component {
  render() {
    return (
      <div className="Starter">
        <Link to="/account">Account</Link>
        <KnobContainer />
      </div>
    );
  }
}

export default Starter;
