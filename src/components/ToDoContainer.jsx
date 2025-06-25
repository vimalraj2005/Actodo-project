import React, { useState } from "react";
import Addtodoform from "./Addtodoform";
import ToDoList from "./ToDolist.jsx";

function ToDoContainer(){
    const [activityarr, setActivityArr] = useState([
        {
            id:1,
            activity: "Go for a walk",
        }
    ]
    );
    return (
        <div className="flex flex-wrap gap-5">
            <Addtodoform activityarr={activityarr} setActivityArr={setActivityArr}/>
            <ToDoList activityarr={activityarr} setActivityArr={setActivityArr}/>
        </div>
    )
}

export default ToDoContainer;