import './App.css';
// import AllProducts from './components/AllProducts';
// import ProductForm from './components/ProductForm';
import Product from './components/Product';
import UpdateForm from './components/UpdateForm';
import Main from './view/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <ProductForm/>
      <AllProducts/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          {/* can put a home route by typing default at the end of the main route element */}
          {/* <Route element={<ProductForm/>} path="/"/>
          <Route element={<AllProducts/>} path="/allproducts"/> */}
          <Route element={<Product/>} path="/product/:id"/>
          <Route element={<UpdateForm/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
