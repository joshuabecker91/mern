import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {

    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted

    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
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
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1 className="mt-4">Product Manager</h1>
            <form className="col-6 mx-auto pt-4" onSubmit={onSubmitHandler}>
                <p>
                    <label className="form-label">Title</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
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
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;