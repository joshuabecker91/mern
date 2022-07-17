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
            <h1>More Forms</h1>
            <p>What a great form!</p>
            <form onSubmit={createUser}>

                <div className="field">
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="error">
                    {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                    ) : null}
                </div>

                <div className="field">
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="error">
                    {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                    ) : null}
                </div>

                <div className="field">
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="error">
                    {email.length < 5 && email.length > 0 ? (
                    <p>email must be at least 5 characters</p>
                    ) : null}
                </div>

                <div className="field">
                    <label>Pasword: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="error">
                    {password.length < 8 && password.length > 0 ? (
                    <p>Password must be at least 8 characters</p>
                    ) : null}
                </div>

                <div className="field">
                    <label>Confirm Pasword: </label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div className="error">
                    {confirmPassword.length < 8 && confirmPassword.length > 0 ? (
                    <p>Password must be at least 8 characters</p>
                    ) : null}
                    {confirmPassword !== password && confirmPassword.length > 0 ? (
                    <p>Passwords must match</p>
                    ) : null}
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