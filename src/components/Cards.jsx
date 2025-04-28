const Cards = (props) => {
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId, deliveryTime} = props?.data?.info
    return (
        <div className="resCard">
            <div className="resCardImage">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="food Image"></img>
            </div>
            <div className="resCardInfo">
                <h4>{name}</h4>
                <h5>{cuisines}</h5>
                <h5>{avgRating}</h5>
                <h5>{costForTwo}</h5>
                <h5>{deliveryTime} minutes</h5>
            </div>      
        </div>
    )
}

export default Cards
