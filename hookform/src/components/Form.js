import React, {useState} from 'react';

const Form = (props) => {

    // const {firstName} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Hook Form</h1>
            <p>What a great form!</p>
            <form onSubmit={createUser}>
                <div className="field">
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Pasword: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Confirm Pasword: </label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Create User"></input>
            </form>
            <div>
                <p className ="output">First Name: {firstName}</p>
                <p className ="output">Last Name: {lastName}</p>
                <p className ="output">email: {email}</p>
                <p className ="output">Password: {password}</p>
                <p className ="output">Confirm Password: {confirmPassword}</p>
            </div>
        </div>

    );
}

export default Form;