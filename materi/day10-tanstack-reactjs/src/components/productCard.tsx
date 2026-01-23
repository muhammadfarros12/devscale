import type { Product } from "@/types/product"

export function ProductCard(product: Product) {
    return (
        <div className="border border-zinc-300 rounded-lg bg-zinc-50 p-4">
            <div><img src={product.image} alt={product.title} /></div>
            <div className="text-2xl">{product.title}</div>
            <div className="text-xl">${product.price}</div>
            <div>{product.description}</div>
        </div>
    )
}