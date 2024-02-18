import { useState } from "react";
import CartAddIcon from "../../assets/icons/CartAddIcon";
import QuantityButtons from "../QuantityButtons";
import { useCart } from "../../contexts/CartContext";

interface ProductProps {
    product: Product;
    quantity: number;
}

export default function ProductItem({product, quantity}:ProductProps) {
    const {img, price, name} = product;
    const {addToCart} = useCart();
    const [quantityProduct, setQuantityProduct] = useState<number>(quantity);
    return(
        <>
            <div className="flex flex-col items-center gap-2 border rounded-lg py-3">
              <img 
                className='rounded-lg w-64 h-64 object-cover' 
                src={img} 
                alt="" 
              />
              <h3>Producto: {name}</h3>
              <p>Precio: ${price}</p>
                <QuantityButtons quantity={quantityProduct} setQuantity={setQuantityProduct} />
                <button className='border text-white p-2 rounded-lg hover:bg-blue-500'
                    onClick={() => {
                        console.log('Añadir al carrito');
                        addToCart({product, quantity: quantityProduct})
                    }}
                >
                    <CartAddIcon />
                </button>
            </div>
        </>
    )
}