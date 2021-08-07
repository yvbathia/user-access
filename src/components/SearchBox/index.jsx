import React, { useState } from "react";
import DropDown from "../DropDown";
import styled from "styled-components";
import style from "../../constants/variable";
import Input from "../Input";
import DropDownList from "../DropDownList";

const InputBox = styled.div`
  display: flex;
  background-color: ${style.grey};
  position: relative;
  color: ${style.grey};
`;

const SearchBox = ({ users, setSelectedUserId, setSelectedRole, accessList }) => {
  const [matchUserList, setMatchUserList] = useState([]);
  const [value, setValue] = useState("");
  const [role, setRole] = useState("View Access");

  const handleOnChange = (value) => {
    setValue(value);
    if (value) {
      setMatchUserList(
        users?.filter(
          (user) =>
            user?.name?.toLowerCase().includes(value.toLowerCase()) ||
            user?.email?.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setMatchUserList([]);
    }
  };
  return (
    <div>
      <InputBox>
        <Input value={value} onChange={handleOnChange} />
        {matchUserList.length > 0 && (
          <DropDownList
            listItem={matchUserList}
            onClick={(item) => {
              setValue(item?.name);
              setMatchUserList([]);
              setSelectedUserId(item?.id);
            }}
          />
        )}
        <DropDown
          text={role}
          listItem={accessList}
          onClick={(item) => {
            setRole(item?.title);
            setSelectedRole(item?.id);
          }}
        />
      </InputBox>
    </div>
  );
};

export default SearchBox;
