import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
    }
    return (
        <div>
            <h2>bottes Avalable: {bottles.length}</h2>
            <h3>cart : {cart.length}</h3>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={()=> handleAddToCart(bottle)}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;