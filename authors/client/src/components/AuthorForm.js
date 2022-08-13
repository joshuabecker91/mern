import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", { name })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="col-6 mx-auto">
            <h1 className="mx-auto my-4">Favorite Authors</h1>
            <Link className="my-2" to={"/"}><button className="btn btn-primary">Home</button></Link>
            <h5 className="text-primary my-4">Create a new author</h5>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label className="mb-2" htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                    {errors.name ? <p className="text-danger mt-2">{errors.name.message}</p> : null}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <Link className="my-2" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    );
}

export default AuthorForm;