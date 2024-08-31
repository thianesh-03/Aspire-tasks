import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";


export default function ViewUser() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  function deleteHandler(index){
    dispatch(deleteUser(index))
  }
  return (
    <div>
      <h1>Users list</h1>
      <ul style={{ listStyle: "none" }}>
        {users.map((user, index) => (
          <li key={index}>{user} <button onClick={()=>deleteHandler(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

//we cant use props because then all the data receiving components should be a child which is not possible.
