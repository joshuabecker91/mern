import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then((response) => {
            console.log(response.data);
            setAllAuthors(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const handleDeleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then((response) => {
                console.log("Author Deleted");
                console.log(response);
                const filteredAuthors = allAuthors.filter((author) => {
                    return author._id !== id;
                });
                setAllAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log("Error Deleting Author", err.response);
            });
    };

    return (
        <div className="col-6 mx-auto">
            <h1 className="mx-auto my-4">Favorite Authors</h1>
            <Link to={"/new"}><button className="btn btn-primary">New</button></Link>
            <h5 className="my-4">We have quotes by</h5>
            <table className="col-12 mx-auto table text-start mt-4">
                <thead className="col-6">
                    <tr className="text-start">
                        <th className="col-6">Author</th>
                        <th className="col-6">Actions</th>
                    </tr>
                </thead>
                <tbody  className="col-6">
                    {allAuthors.map((author, index) => {
                        return (
                            <tr className="text-start" key={author._id}>
                                <td className="col-6">{author.name}</td>
                                <td className="col-6">
                                    <Link to={`/edit/${author._id}`}>
                                        <button className="btn btn-warning">Edit</button>
                                    </Link>
                                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAll;