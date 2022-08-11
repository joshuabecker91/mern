import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {

    // const [allProducts, setAllProducts] = useState([]);
    const {allProducts, setAllProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <div className="bg-white">
            <h3 className="py-4 col-6 mx-auto">All Products</h3>
            <table className="table-bordered col-6 mx-auto text-start">
                <tr>
                    <th className="py-2">Title</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Price</th>
                </tr>
            {
                allProducts.map((product, index) => {
                    return (
                    <tr key={index}> 
                        <td className="py-2"><Link to={`/product/${product._id}`}> {product.title}</Link></td>
                        <td className="py-2">{product.title}</td> 
                        <td className="py-2">{product.description}</td>
                        <td className="py-2">{product.price}</td>
                    </tr>
                )
            })
            }
            </table>
        </div>
    )
}

export default AllProducts;