import ItemLists from "./ItemLists"

const RestaurantMenu = ({data, showItems, setIndex}) => {
    const handleClick = () => {
        setIndex()
    }

    return (
        <div className="border ml-[40rem] mr-[40rem] mb-[2rem]">
            <div className="flex justify-between items-center m-[2rem] mr-[3.8rem] hover:cursor-pointer" onClick={handleClick}>
                <div>{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</div>
                <div>up</div>
            </div> 
            { showItems && <ItemLists data={data?.card?.card?.itemCards}></ItemLists> }
        </div>
    )
}

export default RestaurantMenu
