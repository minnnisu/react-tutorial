import React, { useState } from "react";
import UserDataInput from "./components/UserDataInput/UserDataInput";
import UserDataList from "./components/UserDataList/UserDataList";

const USERDUMMYDATA = [
  // {
  //   id: "0",
  //   name: "Choi",
  //   age: 23,
  // },
  // { id: "1", name: "Kim", age: 21 },
];

function App() {
  const [userData, setUserData] = useState(USERDUMMYDATA);

  const addUserData = (user) => {
    setUserData((prevData) => {
      const updatedData = [...prevData];
      updatedData.unshift(user);
      return updatedData;
    });
  };

  return (
    <div>
      <UserDataInput onAddUserData={addUserData} />
      <UserDataList userData={userData} />
    </div>
  );
}

export default App;
