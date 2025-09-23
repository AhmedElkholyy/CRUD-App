import { useState } from "react";
import Swal from "sweetalert2";
import { addProduct } from "../utils/storage";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      description,
      category: "general",
      image: "https://via.placeholder.com/150",
    };

    addProduct(newProduct);

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Product added successfully.",
    });

    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <>
      <h1>Add Product</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3 mt-4">
          <label className="form-label">Product Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
