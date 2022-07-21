import React, {useState} from 'react';

const Form = (props) => {

    const {boxColorArray, setBoxColorArray} = props;

    const [color, setColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setBoxColorArray([...boxColorArray,color]);
        console.log(color);
        setColor("");
    }

    return(
    <div>
    <form onSubmit={submitHandler}>
        <label>Color: </label>
        <input type="text" value={color} name="color" onChange={(e) => setColor(e.target.value)}/>
        <input type="submit"></input>
    </form>
    </div>
    );
}

export default Form;