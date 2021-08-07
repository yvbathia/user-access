import React, { useState } from "react";
import styled from "styled-components";
import style from "../../constants/variable";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DropDownList from "../DropDownList";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  border-radius: 5px;
  min-width: 60px;
  font-width: ${style.semiBold};
  font-size: ${style.h7FontSize};
  color: ${style.darkGrey};
  border: 0;
  cursor: pointer;
  position: relative;
`;

const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDown = ({ text, listItem, onClick }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Root>
      <ViewMore onClick={() => setShowDropDown(!showDropDown)}>
        <span>{text}</span>
        {showDropDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ViewMore>
      {showDropDown && (
        <DropDownList
          listItem={listItem}
          onClick={(item) => {
            setShowDropDown(false);
            onClick(item);
          }}
        />
      )}
    </Root>
  );
};

export default DropDown;
