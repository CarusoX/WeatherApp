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
      alert(position)
    });
  }

  render() {

    // {require("../../icons/Theme2/map.png")}

    if ("geolocation" in navigator) {
      return (
        <div>
          <Button 
            circular
            color='blue'
            icon="map marker alternate"
            onClick={() => {this.getLocation()}}
          />
        </div>
      );
    }
  }
}

Geolocalization.propTypes = {
};

export default Geolocalization;