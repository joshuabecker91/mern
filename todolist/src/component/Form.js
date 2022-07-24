import React, {useState} from 'react';

const Form = (props) => {

    const [task, setTask] = useState('');

    const {taskArray, setTaskArray} = props;
    
    const submitHandler = (e) => {
        e.preventDefault();
        setTaskArray([...taskArray, task]);
        setTask('');
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>To Do: </label>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value) }></input>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default Form;



// let data = {
//     content: task,
//     completed: false
// }

/* <input type="hidden" name="status" value="0"></input> */