import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header.jsx";
import Card from "../components/card.jsx"
import ToDoContainer from "../components/ToDoContainer.jsx"
import "../index.css";


function Landing() {
  const location = useLocation();

  // Access the passed user array
  const users = location.state;

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md ">
          <Header users={users.username}/>
          <div className="flex flex-wrap justify-between my-5 gap-7">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FC6662"} title={"20 December"} subtitle={"14:02:34"}/>
          <Card bgcolor={"#FCA301"} title={"Built using"} subtitle={"React"}/>
          </div>
          <ToDoContainer/>
      </div>
    </div>
  )
}

export default Landing;
