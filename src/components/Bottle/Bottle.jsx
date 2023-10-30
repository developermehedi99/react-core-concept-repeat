import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle,handleAddToCart}) => {
    const {name, price, img, rating} = bottle;
    return (
        <div className='bottle'>
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h3>price: $ {price}</h3>
            <p>rating: {rating}</p>
            <button onClick={handleAddToCart}>parchase</button>
        </div>
    );
};

export default Bottle;