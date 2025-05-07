import { useDispatch, useSelector } from "react-redux"
import ItemLists from "./ItemLists"
import { clearCart } from "../utils/cartSlice"

const CartItems = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector((store) => {
        return store.cart.items
    })

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <section>
            <h3 className="text-center m-[2rem]">Cart Items</h3>
            <div className="text-center">
                <button className="w-[5rem] h-[2rem]" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="flex justify-center m-[2rem]">
                <ItemLists data={cartItems}></ItemLists>
            </div>
        </section>
    )
}

export default CartItems
