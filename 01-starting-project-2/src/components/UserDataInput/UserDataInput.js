const UserDataInput = (props) => {
  const submitUserDataHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;

    if (name.trim() === "" || age.trim() === "") {
      alert("please enter a valid name and age (no-empty value).");
      return;
    }
    if (Number(age) <= 0) {
      alert("please enter a valid age (>0).");
      return;
    }
    const user = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    props.onAddUserData(user);
  };

  return (
    <form onSubmit={submitUserDataHandler}>
      <h2>Username</h2>
      <input type={"text"} name={"name"}></input>
      <h2>Age(Years)</h2>
      <input type={"text"} name={"age"}></input>
      <button type={"submit"}>Add User</button>
    </form>
  );
};

export default UserDataInput;
