import React from 'react';

const List = ({id, image, name, quantity, removeProduct}) => {
    return (
    <article className='product'>
        <img src={image} alt={name} />
        <div>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
        </div>
        <div>
            <button className="tick" onClick={()=> removeProduct(id)}>Tick</button>
        </div>   
    </article>
    );

}

export default List;