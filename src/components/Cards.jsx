const Cards = (props) => {
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId, deliveryTime} = props?.data?.info
    return (
        <div className="resCard m-[0.5rem] w-[20rem] p-[0.5rem] text-center overflow-auto hover:cursor-pointer">
            <div className="resCardImage m-[0.2rem] text-center">
                <img className="w-[150px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="food Image"></img>
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


export const withPromotedLabel = (Cards) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Cards data={props?.data}></Cards>
            </div>
        )
    }
}
