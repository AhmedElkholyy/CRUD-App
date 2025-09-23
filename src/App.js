import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails.js";
import EditProduct from "./pages/EditProduct.js";

function App() {
  return (
  <>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:productid" element={<ProductDetails />} />
            <Route path="/products/edit/:productid" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
      </>
  
  );
}

export default App;
