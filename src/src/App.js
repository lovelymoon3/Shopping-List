import React, { useState } from "react";
import List from './List';
import data from './data';

function App() {
  const [product, setProduct] = useState(data);

  const removeProduct = (id) => {
    const newProduct = product.filter((product) => product.id !== id);
    setProduct(newProduct);
  }

  if (product.length === 0){
    return(
      <main>
        <section>
          <h2 style={{display: 'flex',justifyContent:'center', alignItems:'center'}}>You purchased everything you need :)</h2>
        </section>
      </main>
    )
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
