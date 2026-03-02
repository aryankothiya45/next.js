import { products , type Product } from "../../lib/products"
import AddToCart from "../../components/AddToCart"


type ProductPageProps = {
    params : Promise<{
        id: string;
    }>;
};

const ProductPage =  async({ params, }: ProductPageProps) => {
    const { id } =await params;

    const product: Product | undefined = products.find(
        (p : Product):boolean => p.id === id
    );

    if(!product){
        return <h2 className = "text-red-500">
            Product not found!
        </h2>
    }

    return(
        <section className ="max-w-2xl">
            <div className="mb-6">
                <img 
                    src ={product.image}
                    alt ={product.name}
                    className="w-full max-w-lg h-80 object-cover rounded"
                />
            </div>

            <h2 className="mb-4 text-3xl font-bold">
                {product.name}
            </h2>

            <p className="mb-2 text-lg">
                Price: ${product.price}
            </p>

            <p className="mb-6 text-gray-600">
                {product.description}
            </p>

            <AddToCart 
                productId={product.id} 
                productName={product.name} 
                productPrice={product.price} 
                productImage={product.image} 
            />
        </section>
    );
}

export default ProductPage;