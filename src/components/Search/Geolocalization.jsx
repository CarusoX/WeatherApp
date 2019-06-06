import PropTypes from "prop-types";
import React from "react";
import { Button } from "semantic-ui-react";

const getLocation = fun => {
  return navigator.geolocation.getCurrentPosition(position => {
    return fun(position.coords.latitude, position.coords.longitude);
  });
};

const Geolocalization = props => {
  const { newCity } = props;
  if ("geolocation" in navigator) {
    return (
      <div>
        <Button
          circular
          color="blue"
          icon="map marker alternate"
          onClick={() => {
            getLocation(newCity);
          }}
        />
      </div>
    );
  }
  return null;
};

Geolocalization.propTypes = {
  newCity: PropTypes.func.isRequired
};

export default Geolocalization;
