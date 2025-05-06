import { useParams } from "react-router-dom"
import { useCardMenuData } from "../utils/useCardMenuData"
import RestraurantMenu from "../components/RestaurantMenu"

import Simmer from "./Simmer"
import { useState } from "react"

const CardMenu = () => {
    const {resId}  = useParams()
    const resInfo = useCardMenuData(resId)
    const [restaurantMenuIndex, setRestaurantMenuIndex] = useState(null)

    if (resInfo === null){
        return <Simmer></Simmer>
    }

    const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card.info
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        <section className="text-center">
            <h1 className="heading mt-[2rem]">{name}</h1>
            <div className="info">
                <div className="infoMeta">
                    <p className="font-bold text-lg">{costForTwoMessage}</p>
                </div>
            </div>
            <div className="menu mt-[2rem]">
                <b><h1>Menu</h1></b>
                {
                    categories.map((category, index) => {
                        return <RestraurantMenu 
                                key={index} 
                                data={category}
                                showItems={index===restaurantMenuIndex ? true : false}
                                setIndex={() => setRestaurantMenuIndex(index)}>                               
                                </RestraurantMenu>
                    })
                }
            </div>
        </section>
    )
}

export default CardMenu
