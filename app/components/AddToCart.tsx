"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

type AddToCartProps ={
    productId : string;
    productName : string;
    productPrice : number;
    productImage : string;
};

const AddToCart = ({ productId, productName, productPrice, productImage }: AddToCartProps) =>{
    const { cart, addToCart, decrementQuantity } = useCart();
    
    const cartItem = cart.find(item => item.id === productId);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = (): void => {
        addToCart({id:productId, name:productName, price:productPrice, image:productImage});
    };

    if (quantity > 0) {
        return (
            <div className="flex items-center gap-3">
                <div className="quantity-controls flex items-center border rounded-lg overflow-hidden">
                    <button
                        onClick={() => decrementQuantity(productId)}
                        className="qty-btn px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        -
                    </button>
                    <span className="qty-value px-4 font-semibold min-w-[3rem] text-center">
                        {quantity}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className="qty-btn px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        +
                    </button>
                </div>
                <p className="text-sm text-green-600 font-medium">Added to cart</p>
            </div>
        );
    }

    return(
        <div>
            <button
                onClick={handleAddToCart}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default AddToCart;