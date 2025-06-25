import {useState} from "react";
import TodoItem from "./TodoItem.jsx";

function ToDoList(props){
 
   var activityarr = props.activityarr;
   var setActivityArr = props.setActivityArr;

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium" >Today's Activity</h1>
        {activityarr.length === 0 ? <p className="text-lg">No activities for today</p> : null    }

        {
         activityarr.map(function(item,index){
            return (
               <TodoItem activity={item.activity} id={item.id} index={index} activityarr={activityarr} setActivityArr={setActivityArr}/>
            )
         }
         )
        }
     </div>
    )
}

export default ToDoList;    