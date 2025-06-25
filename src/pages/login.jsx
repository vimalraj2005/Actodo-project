import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const users = props.users;
  const setUsers = props.setUsers;
    const navigate = useNavigate();

  const [enpass, setEnpass] = useState("");
  const [ename, setename] = useState("");
  const [ruser, setruser] = useState(true);
  function handleUserNameChange(event) {
    setename(event.target.value);
  }
  function handlePasswordChange(event) {
    setEnpass(event.target.value);
  }

  function CheckUser() {
    const found = users.find(
      (user) => user.username === ename && user.password === enpass
    );

    if (found) {
      
      navigate("/landing", { state: found });
      
    } else {
      setruser(false);
      alert("Invalid username or password or Signup first");
      navigate("/signup");
    }
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 rounded-md flex flex-col gap-2">
        <h1 className="text-3xl font-medium">Hey Hii 👋</h1>
        {ruser ? (
          <p>I help you manage your activities after you login 😊</p>
        ) : (
          <p className="text-red-500">
            {" "}
            Invalid username or password or Signup first
          </p>
        )}
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
        </div>
        <button
          className="bg-[#8072DA] text-black p-2 rounded-md mt-3 w-24"
          onClick={CheckUser}
        >
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="underline">
            SignUp
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default Login;
