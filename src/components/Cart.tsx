import React from "react";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const items = useAppSelector((state) => state.items);
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <div>
            {item.id} : {item.name} : {item.quantity}
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
