import React, { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addItem, removeItem, removeItemByOne } from "./redux/slices/item";
import Cart from "./components/Cart";

interface ItemType {
  id: string;
  name: string;
}

const initialValues: ItemType = {
  id: "",
  name: "",
};

function App() {
  const count = useAppSelector((state) => state.counter);
  const items = useAppSelector((state) => state.items);

  const dispatch = useAppDispatch();

  const [item, setItem] = useState<ItemType>(initialValues);
  const [id, setId] = useState<string | undefined>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  return (
    <div className="App">
      {/* <h1>Count is {count}</h1> */}
      <h3>Add Item</h3>
      <input placeholder="ID" name="id" onChange={handleChange} />
      <input placeholder="Name" name="name" onChange={handleChange} />
      <button onClick={() => dispatch(addItem(item))}>Add Item</button>

      <h3>Remove Item</h3>
      <input placeholder="ID" name="id" onChange={handleChangeId} />
      <button onClick={() => dispatch(removeItem(id))}>Remove Item</button>
      <h3>from App component</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <div>
            <div>
              <button onClick={() => dispatch(removeItemByOne(item.id))}>
                -
              </button>
              {item.id} : {item.name} : {item.quantity}
              <button
                onClick={() =>
                  dispatch(addItem({ id: item.id, name: item.name }))
                }
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in added</p>
      )}

      <h3>from Cart component</h3>
      <Cart />
    </div>
  );
}

export default App;
