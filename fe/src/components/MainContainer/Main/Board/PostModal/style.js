import styled from '@emotion/styled';
export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
`;
export const ModalContainer = styled.div`
  display: flex;
  margin: auto;
  opacity: 1;
  z-index: 13;
  border-radius: 5px;
  padding: 1rem;
  background-color: white;
  max-width: 935px;
  max-height: 560px;
`;
export const ButtonExit = styled.button`
  background-color: transparent;

  border: 0;
  outline: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
