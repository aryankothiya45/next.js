"use client";

import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, addToCart, decrementQuantity, removeAllFromCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
            
            {cart.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed">
                    <p className="text-gray-500 text-lg">Your cart is empty.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="grid gap-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between bg-white border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-6">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border" />
                                    <div>
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-accent font-semibold">${item.price}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-6">
                                    <div className="quantity-controls flex items-center border rounded-lg overflow-hidden bg-gray-50">
                                        <button
                                            onClick={() => decrementQuantity(item.id)}
                                            className="qty-btn px-3 py-1 hover:bg-gray-200 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="qty-value px-4 font-bold min-w-[2.5rem] text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="qty-btn px-3 py-1 hover:bg-gray-200 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <div className="text-right min-w-[5rem]">
                                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(0)}</p>
                                    </div>

                                    <button
                                        onClick={() => removeAllFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 p-2 transition-colors ml-4"
                                        title="Remove all"
                                    >
                                        <span className="text-xl">🗑️</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t flex flex-col items-end gap-4 text-right">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 text-lg">Total Amount:</span>
                            <span className="text-3xl font-bold text-accent">${totalPrice.toFixed(0)}</span>
                        </div>
                        <button className="bg-blue-400 text-white px-10 py-3 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all transform hover:-translate-y-1 shadow-lg">
                            Checkout Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;