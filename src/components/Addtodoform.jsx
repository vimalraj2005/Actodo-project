import React, { useState } from 'react';

function Addtodo(props){

    var activityarr = props.activityarr;
    var setActivityArr = props.setActivityArr;
    const [newActivity, setNewActivity] = useState("");

    function Handleonchacnge(e) {
            setNewActivity(e.target.value);
    }

    function HandleAdd() {  
        if (newActivity.trim() === "") {
            alert("Please enter a valid activity.");
            return;
        }

        const newActivityObj = {
            id: Date.now(),
            activity: newActivity.trim(),
        };

        setActivityArr([...activityarr, newActivityObj]);
        setNewActivity(""); // Clear the input field after adding
    }

    return(
        <div >
        <h1 className="text-2xl font-medium">My Activities</h1>
        <input type="text" value={newActivity} onChange={Handleonchacnge} name="" id="" placeholder="Next Activity?" className="border p-1 " ></input>
        <button className="bg-black text-white p-1 border my-2" onClick={HandleAdd}>Add</button>
    </div>
    );
}
export default Addtodo;