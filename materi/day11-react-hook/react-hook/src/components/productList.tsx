import { cartAtoms } from '@/atoms/cartAtom'
import { productAtoms } from '@/atoms/productAtom'
import { useAtom, useAtomValue } from 'jotai'

export const ProductList = () => {

    const products = useAtomValue(productAtoms)
    const [cartData, setCartData] = useAtom(cartAtoms)

    function addToCart(index: number) {
        console.log(products[index]);
        setCartData([...cartData, products[index]])
    }

    return (
        <div className='p-4 space-y-2'>
            {products.map((product, index) => {
                return <div key={product.id} className='border p-4 rounded-lg'>
                    <div>{product.title}</div>
                    <div className='text-2xl font-medium'>${product.price}</div>
                    <button 
                    onClick={() => addToCart(index)}
                    type='button' className='bg-blue-400 text-white font-medium p-2 rounded-2xl' >Add to cart</button>
                </div>
            })}
        </div>
    )
}
