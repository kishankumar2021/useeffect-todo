import { useState } from "react";
import "./App.css";
import ItemList from "./Components/ItemList";
import { v4 as uuid } from "uuid";

function App() {
  const [value, setValue] = useState("");
  const [products, setProduct] = useState([]);

  const handleDelete = (id) => {
    const newProduct = products.filter((item) => {
      return item.id !== id;
    });
    setProduct(newProduct);
  };

  const handleAdd = () => {
    const payload = {
      title: value,
      status: false,
      id: uuid(),
    };
    setProduct([...products, payload]);
  };
  return (
    <div className="App">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="AddItems"
      />
      <button onClick={handleAdd}>ADD</button>

      {products.map((product) => {
        return (
          <h4>
            <ItemList
              {...product}
              handleDelete={handleDelete}
              key={product.id}
            />
          </h4>
        );
      })}
    </div>
  );
}
export default App;
