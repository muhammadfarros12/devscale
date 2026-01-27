import { cartAtoms } from "@/atoms/cartAtom"
import { useAtomValue } from "jotai"

export const Cart = () => {

    const cartData = useAtomValue(cartAtoms)

    return (
        <div className="p-4 bg-zinc-50 rounded-2xl">
            <div className="text-3xl">My Cart</div>
            {cartData.length === 0 && <div>No Product in Cart</div>}


            <div>
                {cartData.map((product) => {
                    return <div key={product.id} className='border p-4 rounded-lg'>
                        <div>{product.title}</div>
                        <div className='text-2xl font-medium'>${product.price}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
