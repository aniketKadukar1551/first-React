const Cards = (props) => {
    const {name, cuisines, rating, deliveryTime} = props.data
    return (
        <div className="resCard">
            <div className="resCardImage">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv" alt="food Image"></img>
            </div>
            <div className="resCardInfo">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
            </div>
            
        </div>
    )
}

export default Cards
