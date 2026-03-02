import Link from "next/link";
import { Suspense } from "react";
import { products, type Product } from "./lib/products";
import LoginPopup from "./components/LoginPopup";
import AddToCart from "./components/AddToCart";

type HomepageProps = {        
  searchParams: Promise<{
    category?: string;
  }>;
};

const HomePage = async ({
  searchParams,
}: HomepageProps) => {
  const { category: categoryParam } = await searchParams;
  const category: string = categoryParam ?? "all";

  const filteredProducts: Product[] =
    category === "all"
      ? products
      : products.filter(
        (p: Product):boolean => p.category === category
      );

  return (
    <>
      <Suspense fallback={null}>
        <LoginPopup />
      </Suspense>
      <h2 className="mb-6 text-2xl font-bold">{category} Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredProducts.map((product : Product) => (
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

            <AddToCart productId={product.id} productName={product.name} productPrice={product.price} productImage={product.image} />
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