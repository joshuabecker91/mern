import React, {useState} from 'react';
import './App.css';
import Form from './component/Form';
import Tasks from './component/Tasks';

function App() {

  const [taskArray, setTaskArray] = useState([]);

  const [style, setStyle] = useState("none");
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>
      <Form taskArray={taskArray} setTaskArray={setTaskArray}/>
      {
      taskArray.map((task, index) => {
        return <div>
        <p className="m-2" style={{textDecoration: `${style}`}}>{index} {task}</p>
        <input type="checkbox" onClick={() => setStyle("line-through")}></input>
        </div>
      })
      }
    </div>
    );
  }
  
  export default App;


// <input type="checkbox" onClick={() => setTaskArray[index].status("1")}></input> */

// 

// <p className="m-2" {if taskArray[index].status == 1 ? style={{textDecoration: "line-through";}}} >{index} {task}</p>
// <input type="checkbox" onClick={() => setTaskArray[index].status("1")}></input>

// 1. Create new task with style = normal
// 2. using .map() iterate through list
//     empty list of tasks

// 3. Each task has a style of line-through or normal
// 3. Checkbox that toggles the style status

// 4. Delete button that removes from list using .filter()



//  store and modify a list of tasks
// Each task will have a text string as well as a completed property, which will be set to false initially. 

// As you check off items, they should appear slashed out on the page. 
// text-decoration   css style={{text-decoration: "line-through"}}

// state and iterating through lists, render a list of items,

// Create and Delete
// give the user the option to remove each item and add new ones.


// Other Notes ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// One way to do it is using the built-in filter method. Filter returns a new array when invoked and is a great way to stay true to the functional nature of React.
// Hint: When calling setState, make sure to send in a brand new object or array.


// ninja bonus