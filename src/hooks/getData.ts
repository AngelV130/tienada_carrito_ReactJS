import { useEffect, useState } from "react"
import datos from '../../mocks/data.json'


export function useGetProducts () {
    const [products, setProducts] = useState<Product[]>()
    const [error, setError] = useState<Error>()
    const [load, setLoad] = useState<Boolean>()

    const getProducts = async () => {
        try {
            setLoad(true)
            const data = await datos
            setProducts(data.products.map((product: any) => ({
                id: product?.id,
                img: product?.images[0],
                price: product?.price,
                name: product?.brand,
                description: product?.description

            })))
        }
        catch (error) {
        setError(new Error('Error al obtener los productos: '+error || 'Error desconocido'))
        }
        finally {
            setLoad(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return {products, load, error}
}