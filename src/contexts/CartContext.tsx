import { ReactElement, createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
    cart: CartItem[] | undefined;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    setQuantity?: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    setQuantity: () => {},
    });

export const useCart = () => {
    return useContext(CartContext);
}

interface Props {
    children: ReactElement | ReactElement[]
}

export const CartProvider: React.FC<Props> = ({ children }:Props) => {
    const [cart, setCart] = useState<CartItem[]>(
        () => JSON.parse(localStorage.getItem('cart') || '[]')
    );

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            if(prev === undefined || prev.length === 0) return [item];
            if(!prev.find((v)=>v.product.id == item.product.id)) return [...prev, item];
            const nuevo = prev.map((element) => {
                if(element.product.id === item.product.id){
                    return {
                        product: element.product,
                        quantity: element.quantity + item.quantity
                    }
                }
                return element;
            })
            return nuevo;
        })
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => {
            return prev?.filter((item) => item.product.id !== id);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (id: string, quantity: number) => {
        setCart((prev) => {
            return prev?.map((item) => {
                if(item.product.id === id){
                    return {
                        product: item.product,
                        quantity: quantity
                    }
                }
                return item;
            });
        });
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, setQuantity }}>
            {children}
        </CartContext.Provider>
    );
}