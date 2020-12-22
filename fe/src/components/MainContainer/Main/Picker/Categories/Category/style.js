import styled from '@emotion/styled';
export const Container = styled.span`
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #707070;
    color: white;
    transition: 1s;
  }
  background-color: ${(props) => (props.selected ? '#707070' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;
