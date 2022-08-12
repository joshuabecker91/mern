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

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                // console.log(allProducts);
                const newList = allProducts.filter((product) => {
                    return product._id !== productId
                })
                setAllProducts(newList)
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="bg-white">
            <h3 className="py-4 col-6 mx-auto">All Products</h3>
            <table className="table-borderless mx-auto col-6 text-start">
                <tr>
                    <th className="py-2 col-1">Title</th>
                    <th className="py-2 col-2">Description</th>
                    <th className="py-2 col-1">Price</th>
                    <th className="py-2 col-1">Edit</th>
                    <th className="py-2 col-1">Delete</th>
                </tr>
            {
                allProducts.map((product, index) => {
                    return (
                    <tr key={index}> 
                        <td className="py-2 col-1"><Link to={`/product/${product._id}`}> {product.title}</Link></td>
                        {/* <td className="py-2">{product.title}</td>  */}
                        <td className="py-2 col-2">{product.description}</td>
                        <td className="py-2 col-1">{product.price}</td>
                        <td className="py-2 col-1"><Link to={`/product/edit/${product._id}`}>Edit</Link></td>
                        <button className="btn btn-warning" onClick={()=> deleteProduct(product._id)}>Delete</button>
                    </tr>
                )
            })
            }
            </table>
        </div>
    )
}

export default AllProducts;