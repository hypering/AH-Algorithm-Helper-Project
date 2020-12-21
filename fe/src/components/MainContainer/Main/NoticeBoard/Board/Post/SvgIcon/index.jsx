import React from "react";
import { Container, Icon } from "./style";

const SvgIcon = ({ path, text, color }) => {
  return (
    <Container color={color}>
      <Icon color={color}>
        <g>
          <path d={path} />
        </g>
      </Icon>
      <h6>{text}</h6>
    </Container>
  );
};

export default SvgIcon;
