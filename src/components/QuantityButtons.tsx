
interface PropsQuantityButton {
    quantity: number;
    setQuantity: (quantity:number) => void;
}

export default function QuantityButton({quantity, setQuantity}:PropsQuantityButton) {
    return (
        <>
            <div className='flex gap-5 items-center'>

                <button 
                className="hover:bg-red-500 text-white font-bold border w-7 h-7 rounded
                    flex items-center justify-center"
                    onClick={() => quantity == 1 ? null : setQuantity(quantity - 1)}    
                >
                    -
                </button>

                <span className="font-bold">{quantity}</span>
                
                <button 
                className="hover:bg-blue-500 text-white font-bold border w-7 h-7 rounded
                    flex items-center justify-center"
                    onClick={() => setQuantity(quantity + 1)}    
                >
                    +
                </button>
            </div>
        </>
    )
}