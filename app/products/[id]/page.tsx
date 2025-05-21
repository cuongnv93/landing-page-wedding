import { products } from "@/data/products"
import ProductDetails from "./ProductDetails"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => String(p.id) === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={product} />
}

// 👇 generateStaticParams để Next.js biết build route nào
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}