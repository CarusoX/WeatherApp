import React from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Title = props => {
  const { size, image, title } = props;
  return (
    <Header as={size} icon textAlign="center">
      <Image src={require("../../icons/Theme2/" + image)} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

export default Title;
