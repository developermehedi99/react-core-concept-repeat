import { useEffect, useState } from "react";
import Watch from "../Watch/Watch";
import "./Watches.css"

const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <div>
            <h2>watch : {watches.length}</h2>
            <div className="watches-container">
            {
                watches.map(watch => <Watch
                key={watch.id}
                watch={watch}
                ></Watch>)
            }
            </div>
        </div>
    );
};

export default Watches;