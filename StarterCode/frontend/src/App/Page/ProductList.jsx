import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //implement the delete function
  const handleDelete = (id) => {};

  return <Container></Container>;
};

export default ProductList;
