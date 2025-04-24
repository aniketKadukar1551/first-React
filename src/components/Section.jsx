import Cards from "./Cards"
import { restaurants } from "../utils/demoData"
import { useState } from "react"

const Section = () => {
    
    const [restaurantList, setrestaurantList] = useState(restaurants)

    return (
        <section className="body">
            <div className="searchSection">
                <input type="text" placeholder="Search for food"></input>
                <button className="filterButton" onClick={() => {
                    const filterResList = restaurantList.filter((res) => {
                        return res.rating.split(" ")[0] > 4
                    })
                    setrestaurantList(filterResList)
                }}>Click Me</button>
            </div>
            <section className="resCardSection">
                {/* <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards> */}
                {/* {[...Array(10)].map((_, index) => (
                    <Cards key={index} />
                ))} */}
                {
                    restaurantList.map((restaurant, index) => {
                        return <Cards key={index} data={restaurant}></Cards>
                    })
                }

            </section>
        </section>
    )
}

export default Section
