import PropTypes from "prop-types";
import React from "react";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const DefaultTab = props => {
  const { mode } = props;
  return (
    <Tab.Pane attached={false} loading={mode}>
      <h1> Search a city! </h1>
      <img
        src={require("../../images/lupa.png")}
        alt="Search city"
        style={{ maxHeight: 50, maxWidth: 50 }}
      />
    </Tab.Pane>
  );
};

DefaultTab.propTypes = {
  mode: PropTypes.bool.isRequired
};

export default DefaultTab;
