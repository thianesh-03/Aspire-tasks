import { React } from "react";

export default function ViewUser({users}) {
  return (
    <div>
      <h1>Users list</h1>
      <ul style={{listStyle:"none"}}>
        {users.map((user,index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

//we cant use props because then all the data receiving components should be a child which is not possible.