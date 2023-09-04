export const Task=(props)=>{
    return(

        <div style={{backgroundColor:props.completed?"green":"white"}}>
         <h2 >{props.taskName}</h2>
         <button onClick={()=>props.completedTask(props.id)}>completed</button>
         <button onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>
       )
}