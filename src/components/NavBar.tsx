import Cart from './cart/Cart';

export default function NavBar() {  
    return (
        <>
            <nav className='flex justify-between items-center border-b p-3 gap-14'>
                <h1 className="text-4xl">Ecommerce 🛒</h1>
                <ul className="flex items-center grow">
                    <li className="p-4">
                        <a id='cart' className='hover:border-b cursor-pointer border-b-2'>Products</a>
                    </li>
                </ul>
                <div>
                    <Cart />
                </div>
            </nav>
        </>
    )
}