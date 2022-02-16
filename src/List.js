import React from "react";
import Lists from './Lists';

const List = ({product, removeProduct}) => {
    return (
        <>
        {product.map((product)=>{
            return <Lists key={product.id} {...product} removeProduct={removeProduct}></Lists>
        })}
        </>
    );
}

export default List;