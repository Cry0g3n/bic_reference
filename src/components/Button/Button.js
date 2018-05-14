import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  text-decoration: none;
  transition: all 0.3s;
  background-color: ${props => (props.invert ? "white" : "#ff8663")};
  color: ${props => (props.invert ? "black" : "white")};
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ caption, handleClick, invert }) => {
  return (
    <ButtonContainer onClick={handleClick} invert={invert}>
      {caption}
    </ButtonContainer>
  );
};

export default Button;
