import { cartAtoms } from '@/atoms/cartAtom'
import { useAtomValue } from 'jotai'

export const TotalProducts = () => {

    const cartData = useAtomValue(cartAtoms)


  return (
    <div>
        You have {cartData.length} products in your cart
    </div>
  )
}

