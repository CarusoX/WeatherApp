import PropTypes from "prop-types";
import React from "react";
import { Button } from "semantic-ui-react";

class Geolocalization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      geo: false
    };
  }

  active = () => {
    if ("geolocation" in navigator) {
      /* la geolocalización está disponible */
    } else {
      /* la geolocalización NO está disponible */
    }
  }

  render() {

    
    
  }
}

Geolocalization.propTypes = {
};

export default Geolocalization;