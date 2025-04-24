import Cards from "./Cards"
import { restaurants } from "../utils/demoData"
import { useState, useEffect } from "react"
import Simmer from "./Simmer"

const Section = () => {
    
    const [restaurantList, setrestaurantList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setTimeout(() => {
            console.log("Delayed for 3 seconds.")
            setrestaurantList(restaurants)
        }, 3000)
    }

    if (restaurantList.length === 0){
        return <Simmer/>
    }

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
