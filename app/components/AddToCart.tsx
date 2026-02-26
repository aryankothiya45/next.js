"use client";

import { useState } from "react";

type AddToCartProps ={
    productName : string;
};

const AddToCart = ({ productName }: AddToCartProps) =>{
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const handleAddToCart = (): void => {
        setIsAdded(true);
    };

    return(
        <div>
            <button
                onClick={handleAddToCart}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Add to Cart
            </button>

            {isAdded && (
                <p className="mt-2 text-green-600">
                    {productName} added to cart!
                </p>
            )}
        </div>
    );
}

export default AddToCart;