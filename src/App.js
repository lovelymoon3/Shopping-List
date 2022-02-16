import React, { useState } from "react";
import List from './List';
import data from './data';

function App() {
  const [product, setProduct] = useState(data);

  ////tour????????
  const removeProduct = (id) => {
    const newProduct = product.filter((product) => product.id !== id);
    setProduct(newProduct);
  }

  return (
    <>
    <main>
      <section className="container">
        <h1 style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>Shopping List</h1>
        <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>{product.length} things I need to buy</h3>
        <List product={product} removeProduct={removeProduct}/>
        <button className = "clearall" onClick={() => setProduct([])}>All purchased</button>
      </section>
    </main></>
  );
}

export default App;
