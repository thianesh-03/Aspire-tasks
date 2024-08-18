import { React } from "react";

export default function ViewUser() {
  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}
