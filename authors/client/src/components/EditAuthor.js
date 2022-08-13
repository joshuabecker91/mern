import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditAuthor = (props) => {

    const { id } = useParams();

    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");

    const navigate = useNavigate();

    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log(response.data);
                setAuthorName(response.data.name);
            })
            .catch((err) => {
                console.log(err.response);
                setAuthorNotFoundError(`Author not found using that ID`);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, { name: authorName })
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
            <h5 className="text-primary my-4">Edit this author</h5>
            <form className="my-4" onSubmit={submitHandler}>
                {authorNotFoundError ? (
                    <h2>
                        {authorNotFoundError} <Link to="/new"><p className="text-warning">Click here to add author</p></Link>
                    </h2>
                ) : null}
                <div className="form-group mb-4">
                    <label className="mb-2" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
                    {errors.name ? <p className="text-danger mt-2">{errors.name.message}</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link className="my-2" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    );
}

export default EditAuthor;