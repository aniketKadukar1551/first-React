import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice"

const ItemLists = ({data}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItems("pizza"))
    }

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
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemLists
