import { useState } from "react";
import AddUser from "../Components/AddUser";
import Users from "../Components/Users";
import "./App.css";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUser = (user) => {
    const id = Date.now().toLocaleString();
    setUsersData([...usersData, { ...user, id }]);
  };

  const deleteUser = (userId) => {
    setUsersData(usersData.filter((user) => user.id !== userId));
  };

  for (const user of usersData) {
    console.log(user.id, user.name, user.age);
  }

  return (
    <>
      <AddUser addUser={addUser} />
      <Users deleteUser={deleteUser} users={usersData} />
    </>
  );
}

export default App;
