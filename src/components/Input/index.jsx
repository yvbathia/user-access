import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";

const InputBox = styled.input`
  background-color: ${style.grey};
  border: 0;
  outline: none;
  padding: 10px;
  min-width: 400px;
`;

const Input = ({ onChange, value }) => {
  return (
    <InputBox
      onChange={(e) => onChange(e?.target?.value)}
      type="text"
      placeholder="Add by name or email"
      value={value}
    />
  );
};

export default Input;
