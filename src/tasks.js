const list=[
    {id:1,name:"complete the React Challenge",isCompleted: false,}
    ,{id:2, name:" Submit Challenge for Peer Review", isComplete: false}
    ,{id:3, name: "Set Deadline", isComplete: true},

]
export default function Tasks(){
   const tasklist= list.map((lists) => <li key={lists}>{lists}</li>)
return (
    <>
    <h1>Tasks</h1>
    <ul>
        {tasklist}</ul></>
)
}
