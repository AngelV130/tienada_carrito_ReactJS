import { useGetProducts } from "../hooks/getData";
import ProducItem from "./products/ProducItem";


export default function Container() {
    const {products, load, error} = useGetProducts()
    return (
        <>
          <h1 className="text-4xl font-bold m-4 flex justify-center">Productos</h1>
          <div className="grid grid-cols-5 gap-5">
            {
              load ? <p>Cargando...</p> : 
              error ? <p>{error.message}</p> :
              products?.map((product) => (
                <ProducItem 
                  key={product.id}
                  product={product}
                  quantity={1}
                />
              ))
            }
          </div>
        </>
    )
}