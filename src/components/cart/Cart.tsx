import CartIcon from '../../assets/icons/CartIcon'
import CartList from './CartList'

export default function Cart() {
    return (
        <>
            <label className='cursor-pointer cart-check' htmlFor='cart-check'>
                <CartIcon />
            </label>
            <input type="checkbox" id='cart-check' hidden/>
            <div className='cart-dropdown rounded-xl overflow-y-auto mb-2'>
                <h2 className='text-3xl font-bold m-4'>Carrito</h2>
                <CartList />
            </div>
        </>
    )
}