import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
// import AllProducts from './AllProducts';

const UpdateForm = (props) => {

    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // const {allProducts, setAllProducts} = props;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
        }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/"); // This will take us back to the Main.js
                // setAllProducts([...allProducts, res.data]); //this is new
                // //    new object created and returned from our post request. 
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="bg-light">
            <h1 className="col-6 mx-auto pt-4">Edit a Product</h1>
            <form className="col-6 mx-auto mt-4 pb-4" onSubmit={updateProduct}>
                <p>
                    <label className="form-label">Title</label><br/>
                    <input value={title} name="title" className="form-control" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Price</label><br/>
                    <input value={price} name="price" className="form-control" type="number" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Description</label><br/>
                    <input value={description} name="description" className="form-control" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input className="btn btn-primary" type="submit"/>
            </form>
            <Link className="btn btn-dark my-4" to={"/"}>Dashboard</Link>
        </div>
    )
}

export default UpdateForm;