import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductById, updateProduct } from "../utils/storage";

function EditProduct() {
  const { productid } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const product = getProductById(productid);
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setDescription(product.description);
    } else {
      Swal.fire("Error!", "Product not found.", "error");
      navigate("/products");
    }
  }, [productid, navigate]);

  const formSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: Number(productid), 
      title,
      price: Number(price),
      description,
    };

    updateProduct(updatedProduct);

    Swal.fire("Success!", "Product updated successfully.", "success");
    navigate("/products");
  };

  return (
    <>
      <h1>Edit Product</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3 mt-4">
          <label className="form-label">Product Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </>
  );
}

export default EditProduct;
