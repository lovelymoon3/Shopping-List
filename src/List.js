import React from "react";

const List = ({product}) => {
    return (
        <>
        {product.map((pro)=>{
            const {id, name, quantity, image} = pro;
            return (<article key={id} className='product'>
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>Quantity: {quantity}</p>
                </div>
            </article>);
        })}
        </>
    );
}

export default List;