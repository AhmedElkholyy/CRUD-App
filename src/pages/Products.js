import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import productsData from "../data/productsData";

function Products() {
  const [products, setProducts] = useState([]);

  const getallproducts = () => {
    let storedProducts = JSON.parse(localStorage.getItem("products"));
    if (!storedProducts || storedProducts.length === 0) {
      localStorage.setItem("products", JSON.stringify(productsData));
      storedProducts = productsData;
    }
    setProducts(storedProducts);
  };

  useEffect(() => {
    getallproducts();
  }, []);

  const deleteproduct = (productid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProducts = products.filter((p) => p.id !== productid);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <h1>Products Page</h1>
      <Link to="/products/add" className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-bordered mt-5">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={{ width: "500px" }}>{product.title}</td>
              <td style={{ width: "100px" }}>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => deleteproduct(product.id)}
                  className="btn btn-danger btn-sm me-2"
                >
                  Delete
                </button>
                <Link
                  className="btn btn-info btn-sm text-white me-2"
                  to={`/products/${product.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/products/edit/${product.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;