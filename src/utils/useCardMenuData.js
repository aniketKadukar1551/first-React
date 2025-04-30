import { useState, useEffect } from "react"

export const useCardMenuData = (resId) => {
    const [resInfo, setResInfo] = useState(null)

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

    return resInfo
}
