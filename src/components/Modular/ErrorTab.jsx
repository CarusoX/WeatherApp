import PropTypes from "prop-types";
import React from "react";
import { Button, Modal, Tab } from "semantic-ui-react";

const ErrorImages = {
  1: "invalid_key.png",
  2: "wrong_search.png",
  3: "blocked_key.png",
  4: "server_error.png"
};

const ErrorMessages = {
  1: "Invalid API Key!",
  2: "City Not Found!",
  3: "API Key Blocked",
  4: "Server Error :("
};

const ErrorTab = props => {
  const { error, closeError } = props;
  return (
    <Modal open={error !== 0} closeIcon size="small">
      <Modal.Content>
        <Tab.Pane attached={false}>
          <h1>We&apos;re sorry!</h1>
          <h3>Something went wrong :(</h3>
          <h3>{ErrorMessages[error]}</h3>
          <img
            src={require("../../images/" + ErrorImages[error])}
            alt="Error"
            style={{ maxHeight: 50, maxWidth: 50 }}
          />
        </Tab.Pane>
        <Button color="red" content="Close" onClick={closeError} />
      </Modal.Content>
    </Modal>
  );
};
export default ErrorTab;

ErrorTab.propTypes = {
  error: PropTypes.number.isRequired,
  closeError: PropTypes.func.isRequired
};
