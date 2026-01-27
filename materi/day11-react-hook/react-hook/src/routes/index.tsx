
import { productAtoms } from '@/atoms/productAtom'
import { Cart } from '@/components/cart'
import { ProductList } from '@/components/productList'
import { TotalProducts } from '@/components/totalProducts'
import { createFileRoute } from '@tanstack/react-router'
import { useHydrateAtoms } from 'jotai/utils'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
      throw new Error('Gagal mengakses product')
    }

    const data = await res.json()
    return data
  }
})

function App() {
  const products = Route.useLoaderData()
  useHydrateAtoms([[productAtoms, products]])


  return (
    <main className='grid grid-cols-2 gap-2'>
      <ProductList />
      <div>
        <Cart />
        <TotalProducts />
      </div>
    </main>
  )
}
