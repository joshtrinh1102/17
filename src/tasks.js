import Next from './next'
const list=[
    {id:1,name:"Complete the React Challenge",isComplete: 'Pending',}
    ,{id:2, name:" Submit Challenge for Peer Review", isComplete: 'Pending'}
    ,{id:3, name: "Set Deadline", isComplete: 'Complete'},

]



export default function Tasks(count){
   <Next/>
    const tasklist= list.map(task => 
    <li key={task.id}>
       Task: {task.name}
        
        <p>Status:{task.isComplete}</p>
        
        </li>
      
    )
return (
    <>
    <h1>Tasks</h1>
    <ul>
        {tasklist}</ul></>
)
}
