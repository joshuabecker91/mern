import React from 'react';

const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    // destructuring is optional makes it so you can call upon directly
    // instead of saying {props.firstName} {props.lastName}

    return (
        <div className="Card">
            <h1>{lastName},{firstName}</h1> 
            <p>Age: {age}</p> 
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;