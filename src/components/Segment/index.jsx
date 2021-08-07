import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";

const Root = styled.div`
  background-color: ${style.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px;
  border: 2px solid ${style.lightBlue};
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px rgb(37, 66, 161, 0.1);
  min-width: 300px;
`;

const Segment = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Segment;
