function Users({ users, deleteUser }) {
  if (users.length === 0) {
    return (
      <h1 className="text-center text-white font-bold my-10 text-4xl">
        Start Adding Users
      </h1>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center mx-auto mt-10">
        <table className="w-1/3 text-sm text-left text-gray-300 bg-gray-800 border border-gray-700 rounded-lg">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 text-white font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-white">{user.age}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
