import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";

const ButtonElement = styled.button`
  background-color: ${style.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  min-width: 60px;
  font-width: ${style.semiBold};
  font-size: ${style.h6FontSize};
  color: ${style.white};
  border: 0;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => {
  return <ButtonElement onClick={onClick}>{text}</ButtonElement>;
};

export default Button;
