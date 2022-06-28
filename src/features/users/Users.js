import React from "react";
import { useSelector } from "react-redux"
function Users() {
  const u = useSelector((state) => [...state.users])
  const l = useSelector((state) => state.users.length)
  let uList = u.map(user=><li>{user.username}, {user.hometown}</li>)
  return (
    <div>
      <ul>
     
        {uList}
      </ul>
      <p>Total Users: {l}</p>
    </div>
  );
}

export default Users;
