import UserDataItem from "./UserDataItem";

const UserDataList = (props) => {
  return (
    <ul>
      {props.userData.map((user) => (
        <UserDataItem key={user.id} name={user.name} age={user.age}>
          {props.children}
        </UserDataItem>
      ))}
    </ul>
  );
};

export default UserDataList;
