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

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      alert(position);
    });
  };

  render() {
    if ("geolocation" in navigator) {
      return (
        <div>
          <Button
            circular
            color="blue"
            icon="map marker alternate"
            onClick={() => {
              this.getLocation();
            }}
          />
        </div>
      );
    }
    return null;
  }
}

Geolocalization.propTypes = {};

export default Geolocalization;
