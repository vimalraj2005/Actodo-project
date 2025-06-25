function TodoItem(props) {

        var activityarr = props.activityarr;
        var setActivityArr = props.setActivityArr;
        
        function HandleDelete(deleteid){
            var temparr = activityarr.filter(function(item) {
                if(item.id === deleteid)
                {
                return false
                }else{
                return true
                }
                })
                setActivityArr(temparr)
        }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.activity}
      </p>
      <button onClick={() => {HandleDelete(props.id);}}>
        <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>
      </button>
    </div>
  );
}

export default TodoItem;
