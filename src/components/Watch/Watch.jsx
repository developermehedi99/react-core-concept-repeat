import "./Watch.css"

const Watch = ({watch}) => {
    const {name, price} = watch;

    return (
        <div className="watch-container">
            <h3>name: {name}</h3>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;