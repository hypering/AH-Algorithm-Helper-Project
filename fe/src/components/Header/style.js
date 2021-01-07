import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const kf = keyframes`
  from, to {
    color: red;
  }
  15% {
    color: orange;
  }
  30% {
    color: yellow;
  }
  45%{
    color: green;
  }
  60%{
    color: blue;
  }
  75%{
    color: indigo;
  }
  90% {
    color: purple;
  }
`;

export const Container = styled.div`
  border-bottom: 2px solid #707070;
  height: 100px;
  line-height: 100px;
  background-color: #efefef;
  color: black;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  animation: ${kf} 5s linear infinite;
`;
