import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    
    
    const foundProduct = storedProducts.find(
      (p) => p.id === parseInt(productid)
    );

    setProduct(foundProduct || null);
  }, [productid]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <h1>Product Details #{productid}</h1>

      <h3>Title: {product.title}</h3>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          width="250"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "5px",
          }}
        />
      )}

      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      {product.rating && (
        <p>
          Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
        </p>
      )}
    </>
  );
}

export default ProductDetails;
