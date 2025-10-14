import { useState } from "react";

function AddUser({ addUser }) {
  const [userData, setUserData] = useState({ name: "", age: "" });

  const changeInputValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    e.preventDefault();
    addUser(userData);
    setUserData({ name: "", age: "" });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-20">
        <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg">
          <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-white text-center">
              Add User
            </h1>

            <form className="space-y-4" onSubmit={onClick}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={changeInputValue}
                  className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter user name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={userData.age}
                  onChange={changeInputValue}
                  className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter user age"
                  required
                />
              </div>

              <button className="cursor-pointer w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition mt-5">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
