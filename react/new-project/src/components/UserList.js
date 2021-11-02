import React from "react";

export default function UserList() {
  let users = ["Ahmad", "Hama", "Majid"];
  return (
    <div>
      {users.map((user) => {
        return <div> {user}</div>;
      })}
    </div>
  );
}
