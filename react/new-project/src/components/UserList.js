import React from "react";

export default function UserList() {
  let users = [
    "Ahmad",
    "Hama",
    "Majid",
    "Ahmad",
    "Hama",
    "Majid",
    "Ahmad",
    "Hama",
    "Majid",
    "Ahmad",
    "Hama",
    "Majid",
  ];

  return (
    <ul>
      {users.map((user) => {
        return <li> {user}</li>;
      })}
    </ul>
  );
}
