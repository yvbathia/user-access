import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";

const DropDown = styled.div`
  position: absolute;
  background-color: ${style.white};
  top: 40px;
  border: 1px solid ${style.grey};
  min-width: 350px;
  width: 100%;
  right: 0;
  line-height: 1px;
  color: ${style.darkGrey};
  z-index: 1;
`;

const DropDownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  height: 50px;
  &:hover {
    background-color: ${style.grey};
  }
`;

const DropDownList = ({ listItem, onClick }) => {
  return (
    <DropDown>
      {listItem.map((item) => (
        <DropDownItem onClick={() => onClick(item)} key={item.id}>
          <h4>{item.title || item.name}</h4>
          <span>{item.desc || item.email}</span>
        </DropDownItem>
      ))}
    </DropDown>
  );
};

export default DropDownList;
