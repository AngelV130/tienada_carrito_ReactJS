import CartItem from "./CartItem"
import { useCart } from "../../contexts/CartContext"



export default function CartList() {
    const { cart, removeFromCart } = useCart();
    return (
        <>
        <ul className="flex flex-col gap-4">
            {
                cart?.map((item) => {
                    return <CartItem key={item.product.id} item={item} removeFromCart={removeFromCart} />
                })
            }
        </ul>
        </>
    )
}