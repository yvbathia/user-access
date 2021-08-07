import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";


const Root = styled.div`
  background: ${style.semiBlue};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${style.blue};
  margin-right: 10px;
`;

const CharIcon = ({ text }) => {
  return (
    <Root>
      <div>{text}</div>
    </Root>
  );
};

export default CharIcon;
