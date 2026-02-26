import Link from "next/link";
import { products, type Product } from "./lib/products";

const HomePage = () => {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {products.map((product : Product) => (
          <div key={product.id} className="rounded border p-4">

            <div className="mb-3">
              <img
                src = {product.image}
                alt = {product.name}
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold">
              {product.name}
            </h3>

            <p className="text-gray-600">
              Price: ${product.price}
            </p>

            <Link href={`/product/${product.id}`} className="mt-2 inline-block text-blue-600 hover:underline">
              View Product
            </Link>
          </div> 
        ))}
      </div>
    </>
  );
}
 export default HomePage;