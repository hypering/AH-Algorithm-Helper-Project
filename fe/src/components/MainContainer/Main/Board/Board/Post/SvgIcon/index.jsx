import React from 'react';
import { Container, Icon } from './style';

const SvgIcon = ({ path, text, color, className, onClick }) => {
  return (
    <Container color={color} onClick={onClick}>
      <Icon color={color}>
        <g>
          <path d={path} />
        </g>
      </Icon>
      <span className={className}>{text}</span>
    </Container>
  );
};

export default SvgIcon;
