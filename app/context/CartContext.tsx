"use client";

import { createContext , useContext ,useState , ReactNode } from "react";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    decrementQuantity: (id: string) => void;
    removeAllFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const decrementQuantity = (id: string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === id);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                );
            }
            return prevCart.filter((i) => i.id !== id);
        });
    };

    const removeAllFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, decrementQuantity, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
    