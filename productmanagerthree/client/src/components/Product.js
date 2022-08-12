import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                navigate("/"); 
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="bg-white">
            <h3 className="py-4 col-6 mx-auto">Product</h3>
            <table className="table-borderless mx-auto col-6 text-start">
                <tr>
                    <th className="py-2">Title</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Edit</th>
                    <th className="py-2">Delete</th>
                </tr>
                <tr> 
                    <td className="py-2">{product.title}</td> 
                    <td className="py-2">{product.description}</td>
                    <td className="py-2">{product.price}</td>
                    <td className="py-2 col-1"><Link to={`/product/edit/${product._id}`}>Edit</Link></td>
                    <button className="btn btn-warning" onClick={()=> deleteProduct(product._id)}>Delete</button>
                </tr>
            </table>
            <Link className="btn btn-dark my-4" to={"/"}>Dashboard</Link>
        </div>
    )
}

export default Product;