import QuantityButtons from "../QuantityButtons";
import { useCart } from "../../contexts/CartContext";

interface PropsCartItem {
    item:CartItem
    removeFromCart: (id: string) => void
}

export default function CartItem({item, removeFromCart}:PropsCartItem) {
    // const [quantity, setQuantity] = useState(item.quantity);
    const {setQuantity} = useCart();
    const {id, img, price, name} = item.product;
    const setCantidad = (cantidad: number) => setQuantity != undefined && setQuantity(id, cantidad);
    
    return (
        <>
            <div className="flex items-center relative border p-1 rounded-lg">
                <div className='flex flex-col gap-2'>
                    <img 
                        className='rounded-lg' 
                        src={img} 
                        alt="" 
                        width='220px' 
                    />

                    <h3 
                    className='flex gap-3 items-center'
                    >
                        Producto: 
                        <p 
                        className="font-bold"
                        >
                            {name}
                        </p>
                    </h3>

                    <h3 className='flex gap-4 items-center'>
                            Cantidad:
                            <QuantityButtons quantity={item.quantity} setQuantity={setCantidad} />
                    </h3>

                    <h3 className='flex gap-4 items-center'>
                        Precio: <p className="font-bold">${price * item.quantity}</p>
                    </h3>
                </div>

                <button
                className='bg-red-500 text-white p-2 rounded-full absolute top-0 right-0 w-8 h-8 
                        flex justify-center items-center m-2'
                    onClick={() => removeFromCart(id)}
                >
                    X
                </button>
            </div>
        </>
    )
}