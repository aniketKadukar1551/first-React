import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Simmer from "./Simmer"

const CardMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {resId}  = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        )

        const json = await data.json()
        setResInfo(json?.data)
    }

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
