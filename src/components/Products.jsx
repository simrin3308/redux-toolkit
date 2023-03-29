import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
    const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  
  const handleAdd = (product) => {
    dispatch(add(product));
};

  return (
    <div className="grid gap-3  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-screen">
      {products.map((product) => {
        return (
          <div className="bg-[whitesmoke] py-14 flex flex-col justify-center px-3 items-center rounded-3xl" key={product.id}>
            <img className="h-20" src={product.image} alt="" />
            <h4 className="h-18">{product.title}</h4>
            <h5 className="my-1">${product.price}</h5>
            <button onClick={() => handleAdd(product)} className="bg-black text-white p-2 mt-1 rounded-lg hover:bg-black/50">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
