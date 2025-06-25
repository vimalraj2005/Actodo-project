import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup(props) {
  const users = props.users;
  const setUsers = props.setUsers;
  const navigate = useNavigate();
  const [enpass, setEnpass] = useState("");
  const [ename, setename] = useState("");


  function handleUserNameChange(event) {
    setename(event.target.value);
}
function handlePasswordChange(event) {
    setEnpass(event.target.value);
}

function addUser(){
    if (ename === "" || enpass === "") {
        alert("Please fill in all fields");
        return;
    }
    
    const userExists = users.some((user) => user.username === ename);
    if (userExists) {
        alert("User already exists. Please choose a different username.");
        return;
    }
    
    const newUser = { username: ename, password: enpass };
    setUsers([...users, newUser]);
    
    navigate("/"); 
    setEnpass("");
    setename("");
}
  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 rounded-md flex flex-col gap-2">
        <h1 className="text-3xl font-medium">Hey Hii 👋</h1>
        <p>You can Signup here 😊</p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            id=""
            placeholder="UserName"
            className="w-56 bg-transparent border border-black rounded-md p-1 "
            required
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            id=""
            placeholder="Password"
            className="w-56 bg-transparent border border-black rounded-md p-1"
            required
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            id=""
            placeholder="Confirm Password"
            className="w-56 bg-transparent border border-black rounded-md p-1"
            required
          />
        </div>
        <button className="bg-[#FEA405] text-black p-2 rounded-md mt-3 w-24" onClick={addUser}>
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link to={"/"} className="underline">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default Signup;
