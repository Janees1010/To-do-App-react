
import './index.css'
import{useState} from 'react'


function App(){
  const [Todos,setTodos] = useState([])
  const [Todo,setTodo] = useState('')
    return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a Good Day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={Todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...Todos,{id:Date.now(),text:Todo, status:false}])} className="fas fa-plus"></i>
      </div>
     
    
     
     
      <div className="todos">
       { Todos.map((obj)=>{
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(obj);
              setTodos(Todos.filter(obj2=>{
                if(obj2.id===obj.id){
                    obj2.status = true
                }
                  return(obj2)
              }))

            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>setTodos(Todos.filter(objj=>{
              if(objj.id===obj.id){
                return (objj==null) 
              }
              return(objj)
               
            })) }className="fas fa-times"></i>
          </div>
        </div>)
          })}
          {
            Todos.map((obj)=>{
            
             if(obj.status){
               return(<h1>{obj.text}</h1>)
             }
               return null
             
            })
          }
          
       </div>

    </div>)}
    
export default App;
