import React, {useState} from 'react'

function DoList(){

    const [tasks, settasks] = useState(["Brush My Teeth", "Take a Shower", "Have Breakfast"]);
    const [newtasks, setnewtasks] = useState("");

    function handleInputChange(event){
        setnewtasks(event.target.value);
    }
    function addTask(){
        if(newtasks.trim() !==""){
            settasks(t => [...t, newtasks]);
            setnewtasks("");
        }
    }
    function deleteTask(index){
        const updatedtasks = tasks.filter((_, i) => i !== index);
        settasks(updatedtasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedtasks= [...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=
            [updatedtasks[index-1] ,updatedtasks[index]];
            settasks(updatedtasks);
        }
    }
    function moveTaskDown(index){ 
        if(index< tasks.length-1){
            const updatedtasks= [...tasks];
            [updatedtasks[index],updatedtasks[index+1]]=
            [updatedtasks[index+1] ,updatedtasks[index]];
            settasks(updatedtasks);
        }
    }

    return(
        <div className='list'>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter a Task...'
                    value={newtasks}
                    onChange={handleInputChange}
                />
                <button className="addbutton" onClick={addTask}> Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                       <span className='text'>{task}</span> 
                       <button className='deletebutton' onClick={() => deleteTask(index)}>Delete</button>
                       <button className='movebutton' onClick={() => moveTaskUp(index)}>👆</button>
                       <button className='movebutton' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                    
                )}
            </ol>

        </div>
    );
}

export default DoList