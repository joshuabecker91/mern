import React, { useState } from 'react';
import axios from 'axios';
// import AllProducts from './AllProducts';

const ProductForm = (props) => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {allProducts, setAllProducts} = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setAllProducts([...allProducts, res.data]); //this is new
                //    new object created and returned from our post request. 
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="bg-light">
            <h1 className="col-6 mx-auto pt-4">Product Manager</h1>
            <form className="col-6 mx-auto mt-4 pb-4" onSubmit={onSubmitHandler}>
                <p>
                    <label className="form-label">Title</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Price</label><br/>
                    <input className="form-control" type="number" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Description</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input className="btn btn-primary" type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;