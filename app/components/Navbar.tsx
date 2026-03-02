"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const {cart} = useCart();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = () => {
            const hasAuthCookie = document.cookie
                .split(";")
                .find((row) => row.trim().startsWith("auth="));
            setIsLoggedIn(hasAuthCookie?.split("=")[1] === "true");
        };

        checkAuth();
        window.addEventListener("focus", checkAuth);
        return () => {
            window.removeEventListener("focus", checkAuth);
        };
    }, []);

    const handleLogout = (): void => {
        document.cookie = "auth=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.replace("/login");
    };
    const handleCart = (): void => {
        router.replace("/cart");
    };

    return (
        <header className="border-b flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
                <span className="text-xl">🛒</span>
                <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: "var(--accent)" }}>
                    ShopNext
                </Link>
            </div>

            <div className="flex items-center gap-3">
                {isLoggedIn && (
                    <button
                        onClick={handleCart}
                        className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
                    >
                        Cart
                        {cart.length > 0 && (
                            <span className="bg-white text-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-sm">
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </button>
                )}

                {isLoggedIn && (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                    >
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
};

export default Navbar;