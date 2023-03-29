import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className=" gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center p-5">
            <img className="h-20 " src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="bg-black text-white p-2 mt-1 rounded-lg hover:bg-black/50">
            Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
