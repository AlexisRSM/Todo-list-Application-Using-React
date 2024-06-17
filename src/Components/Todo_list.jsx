import { useState } from 'react';
import './Styles/toDo.css'

function Todo_list() {
const [tasks, setTasks] = useState([]); 
const [newTask,setNewTask] = useState("");

function handleInputChange (event){
    setNewTask(event.target.value);
}

function addTask(){
    if(newTask.trim() !==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
    }
}
function deleteTask(index){
    const updatedTasks = tasks.filter((_,i)=> i!== index);
    setTasks(updatedTasks);
}
function moveTaskUp(index){ //Swap Value in Array indexes
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
function moveTaskDown(index){
    if(index < tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    } 
}
const handleKeyPress = (event)=>{
    if(event.key === 'Enter'){
        addTask();
    }
}

    return (
        <>
            <div className="row py-2 mt-3"><h1>To Do List 🖊️:</h1></div>
            <div className="row List">
                <div className="col-4"></div>
                <div className="col-4 d-flex">
                    <input 
                    type="text" placeholder="Write your Tasks Here..."
                    value={newTask} 
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className='form-control me-2'/>
                    <button className="btn Add-button btn-primary"
                    style={{fontFamily:"Times"}} onClick={addTask} >
                        Add
                    </button>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row mt-4">
                <ol>
                    {tasks.length === 0 ?(
                        <li>No Tasks, add a task!</li>
                    ) : (
                    tasks.map((task,index) =>
                        <li key={index} className="task-item py-1">
                            <span className="text px-4 fs-5">{task}</span>
                                <button
                                className="delete-button me-2"
                                onClick={()=>deleteTask(index)}
                                >Delete</button>
                                <button
                                className="move-button me-2"
                                onClick={()=>moveTaskUp(index)}
                                >⬆️</button>
                                <button
                                className="move-button me-2"
                                onClick={()=>moveTaskDown(index)}
                                >⬇️</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Todo_list;
