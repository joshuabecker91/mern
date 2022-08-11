import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams(); 

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

    return(
        <div className="bg-white">
            <h3 className="py-4 col-6 mx-auto">Product</h3>
            <table className="table-bordered col-6 mx-auto text-start">
                <tr>
                    <th className="py-2">Title</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Price</th>
                </tr>
                <tr> 
                    <td className="py-2">{product.title}</td> 
                    <td className="py-2">{product.description}</td>
                    <td className="py-2">{product.price}</td>
                </tr>
            </table>
            <Link className="btn btn-primary my-4" to={"/"}>Dashboard</Link>
        </div>
    )
}

export default Product;