import { useState } from "react";
import {v4 as uuidv4} from 'uuid';


export default function TodoList(){
    let [todo,setTodo]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodo((prevTodo)=>{
            return [...prevTodo,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    }
    let updateNewTodo=(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.filter((todo)=>todo.id!=id);
        });
        
    }
    let markAllAsDone=()=>{
        setTodo(todo.map((todo)=>{
            return {
                ...todo,
                isDone:true,
            };
        }))
    }
    let markAsDone=(id)=>{
        setTodo(todo.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                   isDone:true,
                }
            }
            else return {...todo};
        }))
    }
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateNewTodo}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add task</button>
            <br></br>
            <br></br>
            <hr></hr>

            <h2>Tasks to do </h2>
            <ul>
                {
                    todo.map((todo)=>{
                     return <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}style={{height:"50px", padding:"10px"}}>delete</button>
                        &nbsp;
                        <button onClick={()=>markAsDone(todo.id)}style={{height:"50px", padding:"10px"}}>Mark as Done</button>
                        
                        </li>
                    })
                }
            </ul>
            <button onClick={markAllAsDone}>Mark all as Done</button>
        </div>
    )
};