import {CDN_URL} from "../utils/constants"

const ItemLists = ({data}) => {
    console.log(data)
    return (
        <div className="w-[625px]">
            {data.map((item) => {
                return (
                    <div key={item?.card?.info?.id} className="flex overflow-auto mb-[3rem]">
                        <div className="w-[500px]">
                            <p className="text-left pl-[2rem]">{item?.card?.info?.name}</p>
                            <p className="text-left pl-[2rem]">{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
                            <p className="text-left pl-[2rem]">{item?.card?.info?.description}</p>                     
                        </div>
                        <div className="w-[100px] flex aligned-center">
                            <img src={CDN_URL + "/" + item?.card?.info?.imageId} alt="Image not Found" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemLists
