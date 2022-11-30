const UserDataItem = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <span>{`(${props.age} years old)`}</span>
    </li>
  );
};

export default UserDataItem;
