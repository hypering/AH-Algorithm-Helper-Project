import React from 'react';
import {
  Container,
  Icon,
} from 'components/MainContainer/Main/Board/Board/Post/SvgIcon/style';

const SvgIcon = ({ bgColor, path, text, color, className, onClick }) => {
  return (
    <Container bgColor={bgColor} color={color} onClick={onClick}>
      <Icon bgColor={bgColor} color={color}>
        <g>
          <path d={path} />
        </g>
      </Icon>
      <span className={className}>{text}</span>
    </Container>
  );
};

export default SvgIcon;
