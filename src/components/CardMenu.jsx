import { useParams } from "react-router-dom"
import { useCardMenuData } from "../utils/useCardMenuData"

import Simmer from "./Simmer"

const CardMenu = () => {
    const {resId}  = useParams()
    const {resInfo} = useCardMenuData(resId)

    if (resInfo === null){
        return <Simmer></Simmer>
    }

    const { name, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card.info
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <section>
            <h1 className="heading">{name}</h1>
            <div className="info">
                <div className="infoMeta">
                    <p>{avgRating}</p>
                    <p>{costForTwoMessage}</p>
                </div>
            </div>
            <div className="menu">
                <b><h1>Menu</h1></b>
                <ul>
                    {   
                        itemCards?.length &&  
                        itemCards.map((item) => {     
                            return (
                                <li key={item?.card?.info?.id}>
                                    {item?.card?.info?.name} - {item?.card?.info?.price || item?.card?.info?.defaultPrice}
                                </li>
                            )
                        })
                    }
                </ul>
                <p>name - price</p>
            </div>
        </section>
    )
}

export default CardMenu
