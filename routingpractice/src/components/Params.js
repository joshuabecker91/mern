import React from 'react';
import { useParams } from 'react-router-dom';

const Params = (props)=>{

    {/* (params) can be destructured from the useParam hook and used as variables, just like values destructured from props! */}

    const {word, color, bgCol} = useParams();

    return(
        <div>
            {
            //This method returns a boolean based on whether the argument is a number. If word param isn't a number:
            isNaN(word) ?  //Ternary operator here

            //If color param exists, then style this element with the values passed in
            <h3 style={color ? {color: color, backgroundColor: bgCol} : null}>This is a word: {word}</h3>

             //If the word param IS a number:
            : <h3>This is a number: {word}</h3>
            }
        </div>
    )
}

export default Params;