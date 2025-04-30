import Cards from "./Cards"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Simmer from "./Simmer"

const Section = () => {
    
    const [restaurantList, setrestaurantList] = useState([])
    const [searchText, setsearchText] = useState("")
    const [filterRestro, setFilterRestro] = useState([])
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.593674449063272&lng=73.78601700669863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json()

        setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return filterRestro.length === 0 ? <Simmer/> :
        <section className="body">
            <div className="searchSection">
                <button className="filterButton" onClick={() => {
                        const filterResList = restaurantList.filter((res) => {
                        return res.info.avgRating > 4.2
                        })
                        setFilterRestro(filterResList)
                    }}>Top Rated
                </button>
                <input type="text" placeholder="Search for food" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }}></input>
                <button className="search-food-button" onClick={() => {
                    const filterSearch = restaurantList.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilterRestro(filterSearch)
                }}>Search</button>
            </div>
            <section className="resCardSection">
            {
                filterRestro.map((restaurant) => {
                    return <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}><Cards data={restaurant}></Cards></Link> 
                })
            }
            </section>
        </section>
}

export default Section
