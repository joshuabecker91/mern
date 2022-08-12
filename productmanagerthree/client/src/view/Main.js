import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';

const Main = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    // const removeFromDom = personId => {
    //     setPeople(people.filter(person => person._id != personId));

    return (
        <div>
            <ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>
            <AllProducts allProducts={allProducts} setAllProducts={setAllProducts}/>
        </div>
    )
}

export default Main;

