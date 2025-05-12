import Cards, { withPromotedLabel } from "./Cards"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { useInternetStatus } from "../utils/useInternetStatus"
import UserContext from "../utils/UserContext"

import Simmer from "./Simmer"

const Section = () => {
    const [restaurantList, setrestaurantList] = useState([])
    const [searchText, setsearchText] = useState("")
    const [filterRestro, setFilterRestro] = useState([])
    const internetStatus = useInternetStatus()    
    const PromotedRestaurent = withPromotedLabel(Cards)
    const {defaultUser, setUserName} = useContext(UserContext)

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

    if(!internetStatus){
        return(
            <h1>Looks like your internet connection is slow</h1>
        )
    }

    return !filterRestro.length ? <Simmer/> :
        <section className="body">
            <div className="searchSection flex justify-center items-center my-[2rem]">
                <button className="filterButton mr-[2rem]" onClick={() => {
                        const filterResList = restaurantList.filter((res) => {
                        return res?.info?.avgRating > 4.2
                        })
                        setFilterRestro(filterResList)
                    }}>Top Rated
                </button>
                <input data-testid="serachInput" className="mr-[0.2rem]" type="text" placeholder="Search for food" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }}></input>
                <button className="search-food-button" onClick={() => {
                    const filterSearch = restaurantList.filter((res) => {
                        return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilterRestro(filterSearch)
                }}>Search</button>
                <input className="ml-[5rem]" type="text" placeholder="change user Name" value={defaultUser} onChange={(e) => {
                    setUserName(e.target.value)
                }}></input>
            </div>
            <section className="resCardSection flex justify-between flex-wrap gap-y-[2rem]">
            {
                filterRestro.map((restaurant) => {
                    return restaurant?.info?.avgRating > 4.2 ?
                    <Link className="no-underline text-inherit hover:text-gray-500" key={restaurant?.info?.id} to={"restaurant/" + restaurant.info.id}><PromotedRestaurent data={restaurant}></PromotedRestaurent></Link> :
                    <Link className="no-underline text-inherit hover:text-gray-500" key={restaurant?.info?.id} to={"restaurant/" + restaurant.info.id}><Cards data={restaurant}></Cards></Link> 
                })
            }
            </section>
        </section>
}

export default Section
