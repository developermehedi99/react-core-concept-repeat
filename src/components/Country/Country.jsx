import { useState } from 'react';
import "./Country.css"

const Country = ({country}) => {
    const {img, flags, name, capital ,area, population, cca2} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(! visited);
    }   

    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>capital: {capital}</h3>
            <p>area: {area}</p>
            <p>population: {population}</p>
            <h5>code: {cca2}</h5>
            <button onClick={handleVisited}>{visited? 'visited': 'going'}</button>
            {visited ? 'i have already visited this country' : 'i want to visite this country'}
        </div>
    );
};

export default Country;