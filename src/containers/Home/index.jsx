import React, { useState } from "react";
import styled from "styled-components";
import style from "../../constants/variable";
import Segment from "../../components/Segment";
import Button from "../../components/Button";
import SearchBox from "../../components/SearchBox";
import { users, accessList } from "../../constants";
import UserCard from "../../components/UserCard";
import { useToasts } from "react-toast-notifications";

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${style.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  border: 2px solid ${style.grey};
  width: 100%;
  box-sizing: border-box;
`;

const Home = () => {
  const { addToast } = useToasts();
  const [userData, setUserData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(false);
  const [selectedRole, setSelectedRole] = useState(false);

  const handleOnClick = () => {
    if (!selectedUserId || !selectedRole) {
      addToast("Please select user and it's role", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const alreadyUser = userData.filter(
      (element) => element.userId === selectedUserId
    );
    if (alreadyUser.length > 0) {
      addToast("User is already added", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const user = users.filter((element) => element.id === selectedUserId);
    const role = accessList.filter((element) => element.id === selectedRole);
    setUserData([...userData, { userId: user[0].id, roleId: role[0].id }]);
  };

  const handleOnDelete = (id) => {
    setUserData(userData.filter((element) => element.userId !== id));
    addToast("User Deleted", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const handleOnRoleChange = (userId, roleId) => {
    const newUserData = [...userData];
    newUserData.forEach((element) => {
      if (userId === element.userId) {
        element.roleId = roleId;
      }
    });
    setUserData(newUserData);
    addToast(`Updated Role`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <Root>
      <Segment>
        <SearchContainer>
          <SearchBox
            users={users}
            setSelectedUserId={setSelectedUserId}
            setSelectedRole={setSelectedRole}
            accessList={accessList}
          />
          <Button text="Add People" onClick={handleOnClick} />
        </SearchContainer>
        <ResultContainer>
          {userData.map((element, index) => (
            <UserCard
              key={index}
              data={element}
              accessList={accessList}
              users={users}
              onDelete={handleOnDelete}
              onRoleChange={handleOnRoleChange}
            />
          ))}
        </ResultContainer>
      </Segment>
    </Root>
  );
};

export default Home;
