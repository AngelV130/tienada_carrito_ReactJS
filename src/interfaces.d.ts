interface Product {
    id: string;
    img: string;
    price: number;
    name: string;
    description: string;
}
interface CartItem {
    product: Product;
    quantity: number;
}