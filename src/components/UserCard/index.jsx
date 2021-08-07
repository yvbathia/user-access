import React from "react";
import styled from "styled-components";
import style from "../../constants/variable";
import DropDown from "../DropDown";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PersonIcon from "@material-ui/icons/Person";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CharIcon from "../CharIcon";

const Root = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${style.grey};
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
  }
`;

const H4 = styled.h4`
  line-height: 15px;
  margin: 0;
`;

const Modify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Delete = styled.div`
  cursor: pointer;
  color: blue;
`;

const CenterDiv = styled.div`
  margin-left: -5px;
  display: flex;
  align-items: center;
  color: ${style.darkGrey};
  font-size: ${style.h7FontSize};
`;

const DotIcon = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  color: ${style.darkGrey};
  & > svg {
    font-size: 9px;
  }
`;

const UserContainer = styled.div`
  display: flex;
`;

const UserCard = ({ data, users, accessList, onDelete, onRoleChange }) => {
  const user = users.filter((element) => element.id === data?.userId)[0];
  const role = accessList.filter((element) => element.id === data?.roleId)[0];
  const initName = [user.name.split(' ')[0].split('')[0], user.name.split(' ')[1].split('')[0]].join('');
  return (
    <Root>
      <UserContainer>
        <CharIcon text={initName}/>
        <User>
          <H4>{user?.name}</H4>
          <div>
            <CenterDiv>
              <PersonIcon /> {user?.position}
            </CenterDiv>
            <DotIcon>
              <FiberManualRecordIcon />
              {user?.email}
            </DotIcon>
          </div>
        </User>
      </UserContainer>
      <Modify>
        <DropDown
          text={role?.title}
          listItem={accessList}
          onClick={(item) => {
            onRoleChange(user?.id, item?.id);
          }}
        />
        <Delete onClick={() => onDelete(user?.id)}>
          <DeleteOutlineIcon />
        </Delete>
      </Modify>
    </Root>
  );
};

export default UserCard;
