import { Header } from '@/components/header'
import { ProductCard } from '@/components/productCard'
import type { Product } from '@/types/product'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      if (!response.ok) throw new Error('Gagal memberikan info')
        const data = await response.json()
        return data as Product[]
  }
})



function App() {
  const products = Route.useLoaderData()
  console.log(products);
  
  return (
    <div>
      <Header />
      <div>Hello index</div>
      <div className='grid grid-cols-2 gap-4'>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product}/>
        })}
      </div>
    </div>
  )
}
